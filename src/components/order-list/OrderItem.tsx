import Link from "next/link";

const OrderItem = () => {
  return (
    <div className="border-[1px] border-light_gray rounded-lg h-[150px] mb-4 flex justify-between items-center shadow-md">
      <div className="h-[-webkit-fill-available] p-4 my-2 flex flex-col justify-center items-center text-dark_gray border-light_gray border-r">
        <Link
          href={"/order-detail/RJ558046"}
          className="underline hover:underline hover:decoration-point hover:text-point"
        >
          RJ558046
        </Link>
        <p>2023.07.19</p>
      </div>
      <div className="flex flex-1 p-2">
        <div className="w-[100px] h-auto p-1 flex items-center border-[1px] border-light_gray">
          <img
            src="/product-images/9791158392239.png"
            alt="모던 자바스크립트 Deep Dive"
          />
        </div>
        <p className="flex-1 text-medium mx-2 flex items-center">
          모던 자바스크립트 Deep Dive 외 1건
        </p>
      </div>
      <div className="h-[-webkit-fill-available] w-[150px] flex flex-col justify-center items-center p-4 my-2 border-light_gray border-l">
        <p className="text-small">총 1 권</p>
        <p className="text-medium">45,000원</p>
        <Link
          href={"/order-detail/RJ558046"}
          className="px-1 rounded text-dark_gray hover:text-point text-small hover:border-point border"
        >
          주문 상세
        </Link>
      </div>
    </div>
  );
};

export default OrderItem;
