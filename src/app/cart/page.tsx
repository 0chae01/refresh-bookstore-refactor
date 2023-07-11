"use client";

import { cartStateType } from "../../types/cartStateType";
import BookItem from "../../components/Cart/BookItem";
import { useRecoilState } from "recoil";
import { cartStore } from "../../states";

const Cart = () => {
  const [cart, setCart] = useRecoilState(cartStore.cartState);

  return (
    <div>
      <h1 className="text-large my-1">장바구니</h1>
      <hr />
      {cart ? (
        <>
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
          {cart.map((book: cartStateType) => (
            <BookItem
              key={book.isbn}
              isbn={book.isbn}
              image_path={book.image_path}
              title={book.title}
              author={book.author}
              price={book.price}
              amount={book.amount}
            />
          ))}
        </>
      ) : (
        <p>상품이 없습니다.</p>
      )}
    </div>
  );
};

export default Cart;
