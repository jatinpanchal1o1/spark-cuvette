import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="px-auto p-1 sm:px-2 text-base w-full leading-loose text-center text-white bg-white border border-solid border-neutral-200 rounded-full">
      <div className="flex flex-wrap gap-5 justify-between py-1 w-full">
        <a href="/" className="py-4"><img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0bd5a8183c6b980a045c4e7393a5b79ee9bdd6c9c3308d0295e42ab7cbb6aa68?placeholderIfAbsent=true&apiKey=261c62fc181c4ec0b7c1c0697600ce32"
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
