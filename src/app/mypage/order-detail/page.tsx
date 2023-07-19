"use client";

import { useSearchParams, usePathname } from "next/navigation";

const OrderDetail = () => {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");

  console.log(orderId);
  return (
    <section className="border-l border-light_gray min-h-[70vh] p-4">
      <h1 className="text-medium font-[600] border-dark_gray border-b-2">
        주문/배송 상세
      </h1>
      <p>{orderId}</p>
    </section>
  );
};

export default OrderDetail;
