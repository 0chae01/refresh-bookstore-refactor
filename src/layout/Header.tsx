import CartIcon from "@/components/Common/Icons/CartIcon";
import SearchIcon from "@/components/Common/Icons/SearchIcon";
import Logo from "@/components/Common/Logo";
import RefreshAnimation from "@/components/Home/RefreshAnimation";
import Link from "next/link";

const Header = () => {
  return (
    <div className="w-full ">
      <div className=" w-full h-[150px] "></div>
      <div className="inset-0 -top-5 bg-light_green w-[110%] h-[150px] flex flex-row justify-center items-center blur-md overflow-hidden fixed z-20">
        <RefreshAnimation />
      </div>
      <div className=" inset-0 w-full h-[130px] flex flex-row justify-center items-center fixed z-20">
        <div className="w-full lg:w-[1024px] flex flex-row justify-between px-3">
          <Link href="/">
            <Logo color="#16a263" width="150px" />
          </Link>
          <div className="flex flex-row justify-between items-center w-[20%]">
            <CartIcon color="#16a263" width="50px" isFull={false} />
            <SearchIcon color="#16a263" width="50px" />
            <div> 아이콘 3</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
