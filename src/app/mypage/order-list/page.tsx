import OrderItem from "../../../components/order-list/OrderItem";

const OrderList = () => {
  return (
    <section className="border-l border-light_gray min-h-[70vh] p-4 flex-1">
      <OrderItem />
      <OrderItem />
    </section>
  );
};

export default OrderList;
