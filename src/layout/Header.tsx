"use client";
import AccountIcon from "@/components/Common/Icons/AccountIcon";
import CartIcon from "@/components/Common/Icons/CartIcon";
import SearchIcon from "@/components/Common/Icons/SearchIcon";
import Logo from "@/components/Common/Logo";
import RefreshAnimation from "@/components/Home/RefreshAnimation";
import Search from "@/components/Home/Search";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const [searchState, setSearchState] = useState(false);
  return (
    <div className="w-full ">
      {searchState ? (
        <>
          <div className=" bg-point bg-opacity-70 w-full h-full  flex flex-row justify-center items-center  overflow-hidden fixed z-20">
            <div className=" inset-0 w-full h-[110px] flex flex-row justify-center items-center fixed z-20">
              <div className="w-full lg:w-[1024px] flex flex-row justify-between items-center px-3 ">
                <Link href="/">
                  <Logo color="white" width="150px" />
                </Link>
                <input className=" w-[500px] bg-transparent outline-none font-light text-xl italic text-white border-b-white border-b h-[40px]"></input>
                <div className="flex flex-row justify-between items-center w-[20%] ">
                  <div
                    className="w-50 h-50  rounded-full hover:bg-white hover:bg-opacity-30 cursor-pointer"
                    onClick={() => setSearchState(!searchState)}
                  >
                    <SearchIcon color="white" width="50px" />
                  </div>
                  <div
                    className=" w-[50px] h-[50px]  rounded-full"
                    onClick={() => setSearchState(false)}
                  >
                    {" "}
                    X
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-[100vh] flex flex-col justify-center items-center relative z-10 ">
            <Search />
          </div>
        </>
      ) : (
        <>
          <div className=" w-full h-[130px] "></div>
          <div className="-left-10 -top-10 bg-light_green w-[120%] h-[160px] flex flex-row justify-center items-center blur-lg overflow-hidden fixed z-20">
            <RefreshAnimation />
          </div>
          <div className=" inset-0 w-full h-[110px] flex flex-row justify-center items-center fixed z-20">
            <div className="w-full lg:w-[1024px] flex flex-row justify-between px-3">
              <Link href="/">
                <Logo color="#16a263" width="150px" />
              </Link>
              <div className="flex flex-row justify-between items-center w-[20%]">
                <div
                  className="w-50 h-50"
                  onClick={() => setSearchState(!searchState)}
                >
                  <SearchIcon color="#16a263" width="50px" />
                </div>
                <CartIcon color="#16a263" width="50px" isFull={false} />
                <AccountIcon color="#16a263" width="50px" isLoggedIn={false} />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
