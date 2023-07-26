import Book from "@/components/Common/Book";
import React from "react";
import books from "../../../../public/mock-data/products.json";
import { truncateText } from "@/utils/truncateText";
import Logo from "@/components/Common/Logo";

interface BookDetailProps {
  params: {
    bookId: string;
  };
}

const page: React.FC<BookDetailProps> = ({ params }) => {
  const thisBook = books.find((book) => book.isbn === params.bookId);
  const date = new Date(thisBook.publication_date);
  return (
    <div className="my-10">
      <div className="w-full flex flex-row justify-between items-start m-5">
        <div className="w-[45%] h-[400px] border border-light_gray flex justify-center items-center relative rounded-xl bg-[#f9f9f9]">
          <img
            src={`https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/${thisBook.isbn}.jpg`}
            className=" w-[45%] drop-shadow-xl border border-light_gray"
          />
          <div className="w-[100px] m-2  absolute right-0 bottom-0 opacity-20">
            <Logo width="100px" color="gray" />
          </div>
        </div>
        <div className="w-[50%] h-[400px] flex flex-col justify-start items-start">
          <div className="w-full flex flex-col justify-start items-start border-b border-light_gray overflow-hidden relative">
            <div className=" h-7 mb-2 px-2 text-md font-light text-white bg-point rounded-full flex flex-col justify-center items-center drop-shadow-lg">{`#${thisBook.category}`}</div>
            <div className=" font-bold text-2xl mt-1 mb-2">
              {thisBook.title}
            </div>
            <div className="text-md mb-4 text-point">{`${thisBook.author} | ${
              thisBook.publisher
            } | ${date.getFullYear()}`}</div>
          </div>
        </div>
      </div>
      <div className="w-full "></div>
      <div className="w-full p-5 ">{thisBook.description}</div>
    </div>
  );
};

export default page;
