"use client";

import { cartStateType } from "../../types/cartStateType";
import { useEffect, useState } from "react";
import BookItem from "../../components/Cart/BookItem";
const Cart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    localStorage.setItem(
      "cart",
      JSON.stringify([
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
      ])
    );
    const storage: string | null = localStorage.getItem("cart");
    if (storage) {
      setData(JSON.parse(storage));
    }
  }, []);
  return (
    <div>
      <h1 className="text-large my-1">장바구니</h1>
      <hr />
      <div className="my-2 flex justify-between">
        <label>
          <input type="checkbox" name="selectAll" className="mx-1" />
          전체선택
        </label>
        <input
          type="button"
          className="border-[1px] rounded px-1 cursor-pointer"
          value="선택삭제"
        />
      </div>
      {data.map((book: cartStateType) => (
        <BookItem
          key={book.isbn}
          image_path={book.image_path}
          title={book.title}
          author={book.author}
          price={book.price}
          amount={book.amount}
        />
      ))}
    </div>
  );
};

export default Cart;
