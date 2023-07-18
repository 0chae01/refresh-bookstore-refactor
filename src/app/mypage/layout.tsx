import Link from "next/link";

const MyPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="m-8">
      <h1 className="text-large my-1">마이페이지</h1>
      <hr className="text-light_gray" />
      <div className="flex">
        <section className="menu flex flex-col">
          <Link
            className="text-medium text-center p-2 m-2"
            href={"/mypage/order-list"}
          >
            주문내역
          </Link>
          <Link className="text-medium text-center p-2 m-2" href={"/mypage"}>
            회원정보수정
          </Link>
        </section>
        {children}
      </div>
    </div>
  );
};

export default MyPageLayout;
