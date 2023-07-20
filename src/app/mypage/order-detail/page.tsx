"use client";

import { useSearchParams } from "next/navigation";

const OrderDetail = () => {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");

  console.log(orderId);
  return (
    <section className="border-l border-light_gray min-h-[70vh] p-4">
      <h1 className="text-medium font-[600] border-dark_gray border-b-2">
        주문/배송 상세
      </h1>
      <div className="flex">
        <h2 className="p-2">주문날짜</h2>
        <p>2023.07.20</p>
      </div>
      <div className="flex">
        <h2>주문번호</h2>
        <p>{orderId}</p>
      </div>
      <div className="flex">
        <h2>배송상태</h2>
        <p>배송중</p>
      </div>
    </section>
  );
};

export default OrderDetail;
