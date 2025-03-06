import React from "react";

function Hero() {
  return (
    <section className="self-end mt-24 w-full max-w-[1356px] max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col items-start w-full text-gray-800 max-md:mt-3.5 max-md:max-w-full">
            <h1 className="self-stretch text-6xl font-bold leading-[70px] max-md:max-w-full max-md:text-4xl max-md:leading-[56px]">
              The easiest place to update and share your Connection
            </h1>
            <p className="mt-2 text-xl font-medium leading-8 max-md:max-w-full">
              Help your followers discover everything you're sharing all over
              the internet, in one simple place. They'll thank you for it!
            </p>
            <button className="pt-5 pr-9 pb-5 pl-7 mt-12 text-sm leading-6 text-white bg-green-600 rounded-[10000px] max-md:px-5 max-md:mt-10">
              Get your free Spark
            </button>
          </div>
        </div>
        <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/41701ccea4faaaa9e84dd2727e7ee4e460359ed0050d5932ae4a60a4d31bc3dc?placeholderIfAbsent=true&apiKey=261c62fc181c4ec0b7c1c0697600ce32"
            className="object-contain grow mt-5 w-full aspect-[1.4] rounded-[34px] shadow-[0px_1px_80px_rgba(40,162,99,0.2)] max-md:mt-8 max-md:max-w-full"
            alt="Spark platform preview"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
