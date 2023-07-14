import React, { useState } from "react";

// interface BookCatalogue {
//   book: bookDataType;
// }

const BookCatalogue = ({ book }) => {
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };
  return (
    <div className="w-[180px] h-[300px] flex flex-col justify-start items-center rounded-2xl relative m-1 ">
      <div className=" left-5 relative w-full m-3 flex flex-row justify-center items-center">
        <div className=" top-[10px] left-[8px] bg-black w-[100px] h-[140px] absolute opacity-[0.15] blur-sm"></div>
        <div className=" top-[148px] left-[25px] skew-x-[55deg] bg-black w-[100px] h-[15px] absolute opacity-[0.15] blur-sm"></div>
        <div className=" absolute left-[15px]   top-[3px] w-[8px] h-[145px] skew-x-6 -skew-y-[50deg] bg-gradient-to-t from-[#f9f9f9] to-light_gray"></div>
        <div className=" absolute left-[27px] top-[145px] w-[100px] h-[6px] -skew-x-[30deg] bg-gradient-to-r from-light_gray to-gray  border-light_gray"></div>
        <div className=" absolute left-[21px] top-0 w-[100px] h-[145px] cursor-pointer skew-x-6 hover:drop-shadow-lg hover:skew-x-0 hover:scale-[1.3] hover:z-10 bg-point overflow-hidden object-cover transition-all">
          <div className="inset-0 w-full h-[150px] bg-gradient-to-tr from-transparent hover:opacity-0 transition-all from-30% to-90% to-black opacity-[0.3] absolute "></div>
          <img
            src={`https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/${book.isbn}.jpg`}
            className="w-full h-full "
          />
        </div>
      </div>
      <div className="w-full px-3 top-[200px] h-auto flex flex-col justify-center items-center absolute">
        <div className=" w-full min-h-[40px] h-auto my-2 font-semibold text-sm px-2 flex flex-row justify-center border-b border-light_gray">
          {truncateText(book.title, 20)}
        </div>
        <div className=" w-full h-[20px] text-xs mt-2  px-2  flex flex-row justify-center text-point  ">
          {`#${book.category}`}
        </div>
        <div className=" w-full h-[20px] text-xs  px-2  flex flex-row justify-center  ">
          {book.price}
        </div>
      </div>
    </div>
  );
};

export default BookCatalogue;
