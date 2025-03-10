import React from "react";
import { Link } from "react-router-dom";
import MainLogo from "../assets/MainFrame.svg";

function Header() {
  return (
    <header className="px-auto p-1 sm:px-2 text-base w-full leading-loose text-center text-white bg-white border border-solid border-neutral-200 rounded-full">
      <div className="flex flex-wrap gap-5 justify-between py-1 w-full customCsss">
        <a href="/spark-cuvette/"><img
          src={MainLogo}
          className="object-contain shrink-0 my-auto lg:max-w-full w-60"
          alt="Spark logo"
        /></a>
        <div className="flex gap-2 items-start">
          <Link to="/spark-cuvette/signup"><button className="px-7 pt-4 pb-5 bg-green-600 rounded-full max-md:px-5 text-white hover:bg-green-500 cursor-pointer">
            Sign up free
          </button></Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
