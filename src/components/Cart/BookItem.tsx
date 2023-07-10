import { ChangeEvent } from "react";

type bookItemType = {
  image_path: string;
  title: string;
  author: string;
  price: number;
  amount: number;
};

const amountChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
  console.log(e.target.value);
};

const BookItem = ({
  image_path,
  title,
  author,
  price,
  amount,
}: bookItemType) => {
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
        <p className="text-medium">{price}원</p>
      </div>
      <input type="button" value="삭제" />
    </div>
  );
};

export default BookItem;
