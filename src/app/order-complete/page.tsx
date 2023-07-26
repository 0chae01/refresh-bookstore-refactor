import Link from "next/link";

const OrderComplete = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-[70vh]">
      <h1 className="text-[25px] mb-8">주문이 완료되었습니다!</h1>
      <div className="flex text-medium">
        <Link
          className="rounded text-white font-medium bg-point w-[130px] h-[40px] m-2 flex justify-center items-center"
          href={"/"}
          replace
        >
          메인으로
        </Link>
        <Link
          className="rounded text-white font-medium bg-point w-[130px] h-[40px] m-2 flex justify-center items-center"
          href={"/mypage/order-list"}
          replace
        >
          주문내역확인
        </Link>
      </div>
    </div>
  );
};

export default OrderComplete;
