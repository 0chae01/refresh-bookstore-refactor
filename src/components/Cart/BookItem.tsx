import { ChangeEvent } from "react";
import { useRecoilState } from "recoil";
import { cartStore } from "../../stores";
import { cartStateType } from "../../types/cartStateType";

type BookItemProps = {
  isbn: string;
  image_path: string;
  title: string;
  author: string;
  price: number;
  amount: number;
};

const BookItem = ({
  isbn,
  image_path,
  title,
  author,
  price,
  amount,
}: BookItemProps) => {
  const [cart, setCart] = useRecoilState(cartStore.cartState);
  const index = cart.findIndex((item: cartStateType) => item.isbn === isbn);

  const replaceItemAtIndex = (
    arr: cartStateType[],
    index: number,
    newValue: cartStateType
  ) => {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
  };

  const deleteItemAtIndex = (arr: cartStateType[], index: number) => {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
  };

  const setAmount = (amount: number) => {
    const newCart = replaceItemAtIndex(cart, index, {
      ...cart[index],
      amount: amount,
    });
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const amountChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e.target.value));
  };

  const deleteItem = () => {
    const newCart = deleteItemAtIndex(cart, index);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  return (
    <div className="border-[1px] border-light_gray rounded-lg w-full h-[160px] my-2 px-4 py-1 flex justify-between items-center shadow-md">
      <input type="checkbox" />
      <div className="w-[100px] h-[130px] p-1 flex items-center border-[1px] border-light_gray">
        <img src={image_path} alt={title} />
      </div>
      <div className="flex flex-col justify-center w-1/2">
        <h1 className="text-medium font-normal">{title}</h1>
        <div className="text-regular text-dark_gray">{author}</div>
      </div>
      <div className="flex items-center">
        <input
          type="number"
          className="border-[1px] rounded pl-1 w-[100px]"
          min={1}
          value={amount}
          onChange={amountChangeHandler}
        />
      </div>
      <div className="w-[150px] flex flex-col justify-center items-center">
        <p className="text-small">상품 금액</p>
        <p className="text-medium">{(price * amount).toLocaleString()}원</p>
      </div>
      <input type="button" value="삭제" onClick={deleteItem} />
    </div>
  );
};

export default BookItem;
