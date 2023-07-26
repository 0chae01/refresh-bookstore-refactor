"use client";

import { cartStateType } from "../../types/cartStateType";
import CartItem from "../../components/Cart/CartItem";
import { useRecoilState } from "recoil";
import { cartStore } from "../../stores";
import { createRef, SyntheticEvent, useEffect, useRef, useState } from "react";
import { checkedCartState } from "../../stores/cart";
import ErrorIcon from "../../components/Common/Icons/ErrorIcon";
import { API_BASE_URL } from "../../constants/path";

// 임시 장바구니 데이터 저장 (book-detail에서 cartState 저장 구현 예정)
if (typeof window !== "undefined") {
  localStorage.setItem(
    "cart",
    JSON.stringify([
      {
        id: "6446b858a5a770787eea5b3c",
        title: "모던 자바스크립트 Deep Dive",
        author: "이웅모",
        publisher: "위키북스",
        publication_date: "2020-09-24T15:00:00.000Z",
        isbn: "9791158392239",
        description:
          "자바스크립트를 둘러싼 기본 개념을 정확하고 구체적으로 설명하고, 자바스크립트 코드의 동작 원리를 집요하게 파헤친다. 작성한 코드가 컴퓨터 내부에서 어떻게 동작할 것인지 예측하고, 명확히 설명할 수 있도록 돕는다. 또한 최신 자바스크립트 명세를 반영해 안정적이고 효율적인 코드를 작성할 수 있는 기본기를 다지고, 실전에서 쓰이는 모던 자바스크립트 프레임워크나 도구를 완벽하게 이해하고 활용할 수 있게 도와준다.",
        price: 45000,
        image_path: "product-images/9791158392239.png",
        category: "프론트엔드",
        amount: 1,
      },
      {
        id: "6446b858a5a770787eea5b34",
        title: "파이썬으로 배우는 게임 개발 입문편",
        author: "히로세 츠요시",
        publisher: "제이펍",
        publication_date: "2020-10-25T15:00:00.000Z",
        isbn: "97911906654451",
        description:
          "프로 게임 크리에이터가 설명하는 게임 개발 입문서. 파이썬은 물론 프로그래밍 경험이 거의 없는 독자부터 프로그래밍에 능숙한 독자까지 단시간에 게임 개발을 배울 수 있도록 구성했다. 파이썬의 기초에 관해 간단히 설명한 뒤, 많은 페이지에 걸쳐 게임 제작 기술을 설명한다. 프로 크리에이터들이 게임 개발 현장에서 사용하는 기술을 바탕으로 설명하므로, 게임 크리에이터를 꿈꾸는 분들은 나중에 실무에서도 활용할 수 있다.",
        price: 28000,
        image_path: "product-images/9791190665445.png",
        category: "게임 개발",
        amount: 1,
      },
    ])
  );
}

const Cart = () => {
  const [isClient, setIsClient] = useState(false);
  const [cart, setCart] = useRecoilState(cartStore.cartState);
  const [checkedItemPrice, setCheckedItemPrice] = useState(0);

  const [checkedCartData, setCheckedCartData] =
    useRecoilState(checkedCartState);
  const formRef = useRef<HTMLFormElement>(null);
  const checkboxRefs = cart.map(() => createRef<HTMLInputElement>());
  const [formData, setFormData] = useState<FormData>();

  const setAllCheckedFromItems = () => {
    if (!formRef.current) return;
    const data = new FormData(formRef.current);
    const selectedCount = data.getAll("select-item").length;
    const allChecked = selectedCount === cart.length;
    formRef.current.querySelector<HTMLInputElement>(".select-all")!.checked =
      allChecked;
  };

  const setItemsCheckedFromAll = (targetInput: HTMLInputElement) => {
    const allChecked = targetInput.checked;
    checkboxRefs
      .filter((inputElem) => {
        return !inputElem.current!.disabled;
      })
      .forEach((inputElem) => {
        inputElem.current!.checked = allChecked;
      });
  };

  const handleCheckboxChanged = (e?: SyntheticEvent) => {
    if (!formRef.current) return;
    const targetInput = e?.target as HTMLInputElement;
    if (targetInput && targetInput.classList.contains("select-all")) {
      setItemsCheckedFromAll(targetInput);
    } else {
      setAllCheckedFromItems();
    }
    const data = new FormData(formRef.current);
    setFormData(data);
  };

  const deleteCheckedItem = () => {
    const unCheckedItems: cartStateType[] = checkboxRefs.reduce<
      cartStateType[]
    >((res, ref, i) => {
      if (!ref.current?.checked) res.push(cart[i]);
      return res;
    }, []);
    setCart(unCheckedItems);
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(unCheckedItems));
    }
  };

  const purchase = async () => {
    try {
      const data = await fetch(`${API_BASE_URL}/api/user/info`, {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log(data);
    } catch (err: any) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    setIsClient(true);

    const checkedPriceArr = cart.map((item) => item.amount * item.price);
    const checkedPrice = checkedPriceArr.reduce((a, b) => a + b, 0);
    setCheckedItemPrice(checkedPrice);

    // localStorage.setItem("cart", JSON.stringify(cart));
  }, []);

  // cart와 formData, 체크박스의 상태가 바뀌면 가격 변경 출력
  useEffect(() => {
    const checkedItems = checkboxRefs.reduce<cartStateType[]>((res, ref, i) => {
      if (ref.current?.checked) res.push(cart[i]);
      return res;
    }, []);

    const checkedPriceArr = checkedItems.map(
      (item) => item.amount * item.price
    );
    const checkedPrice = checkedPriceArr.reduce((a, b) => a + b, 0);
    setCheckedItemPrice(checkedPrice);
  }, [cart, formData, checkboxRefs]);

  if (!isClient) return null;
  return (
    <div className="m-8">
      <h1 className="text-large my-1">장바구니</h1>
      <hr className="text-light_gray" />
      {cart.length ? (
        <>
          <form ref={formRef} onChange={handleCheckboxChanged}>
            <section className="my-3 flex justify-between">
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="select-all mx-2 cursor-pointer w-[16px] h-[16px]"
                  name="select-all"
                  defaultChecked
                />
                전체선택
              </label>
              <input
                type="button"
                className="border-[1px] border-gray bg-white text-dark_gray font-medium rounded px-1 cursor-pointer duration-500 hover:bg-light_gray"
                value="선택 삭제 𐌢"
                onClick={deleteCheckedItem}
              />
            </section>
            {cart.map((book: cartStateType, i) => (
              <div
                key={book.isbn}
                className="border-[1px] border-light_gray rounded-lg w-full h-[160px] my-3 px-4 py-1 flex justify-between items-center shadow-md"
              >
                <CartItem
                  isbn={book.isbn}
                  image_path={book.image_path}
                  title={book.title}
                  author={book.author}
                  price={book.price}
                  amount={book.amount}
                  ref={checkboxRefs[i]}
                />
              </div>
            ))}
          </form>
          <hr className="text-light_gray" />
          <section className="cartInfo flex justify-between">
            <p className="text-dark_gray m-2">
              * 기본배송비 3,000원 | 50,000원 이상 구매시 무료 배송
            </p>
            <div className="priceInfo w-[30%] text-medium font-normal m-2">
              <div className="flex justify-between mb-2">
                <p>선택 상품 금액</p>
                <p>{checkedItemPrice.toLocaleString()}원</p>
              </div>
              <div className="flex justify-between mb-2">
                <p>배송비</p>
                <p>
                  {checkedItemPrice > 50000 || checkedItemPrice === 0
                    ? 0
                    : "3,000"}
                  원
                </p>
              </div>
              <div className="flex justify-between mb-2">
                <p>선택 상품 금액</p>
                <p>
                  {checkedItemPrice > 50000 || checkedItemPrice === 0
                    ? checkedItemPrice.toLocaleString()
                    : (checkedItemPrice + 3000).toLocaleString()}
                  원
                </p>
              </div>
              <button
                onClick={purchase}
                disabled={checkedItemPrice ? false : true}
                className="rounded text-white bg-point w-[100%] h-[45px] disabled:bg-gray"
              >
                구매하기
              </button>
            </div>
          </section>
        </>
      ) : (
        <div className="flex flex-col justify-center items-center my-20">
          <ErrorIcon fill="#bfbfbf" width={100} />
          <p className="text-gray text-medium font-bold m-2">
            상품이 없습니다.
          </p>
        </div>
      )}
    </div>
  );
};

export default Cart;
