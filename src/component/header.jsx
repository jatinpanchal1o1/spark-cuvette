import React from "react";

function Header() {
  return (
    <header className="flex items-start self-start py-2.5 pr-3.5 pl-11 text-base leading-loose text-center text-white bg-white border border-solid border-neutral-200 rounded-[120px] max-md:pl-5">
      <div className="flex flex-wrap gap-5 justify-between py-1 min-w-60 w-[1318px] max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0bd5a8183c6b980a045c4e7393a5b79ee9bdd6c9c3308d0295e42ab7cbb6aa68?placeholderIfAbsent=true&apiKey=261c62fc181c4ec0b7c1c0697600ce32"
          className="object-contain shrink-0 my-auto max-w-full aspect-[8.4] w-[277px]"
          alt="Spark logo"
        />
        <div className="flex gap-2 items-start">
          <button className="px-7 pt-4 pb-5 bg-green-600 rounded-[96px] max-md:px-5 text-white">
            Sign up free
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
