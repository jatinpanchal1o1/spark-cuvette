import React from "react";

function TestimonialCard({ backgroundColor = "bg-white" }) {
  return (
    <article
      className={`flex overflow-hidden relative flex-col grow shrink items-start px-7 py-8 ${backgroundColor} min-w-60 rounded-[32px] w-[502px] max-md:px-5 max-md:max-w-full`}
    >
      <div className="z-0 self-stretch w-full max-w-[561px] max-md:max-w-full">
        <h3 className="text-2xl font-light tracking-tight leading-none text-black max-md:max-w-full">
          Amazing tool! Saved me months
        </h3>
        <p className="mt-7 text-base font-medium leading-6 text-stone-900 max-md:max-w-full">
          This is a placeholder for your testimonials and what your client has
          to say, put them here and make sure its 100% true and meaningful.
        </p>
        <div className="flex gap-4 items-center mt-7 max-w-full min-h-12 w-[411px]">
          <div className="flex shrink-0 self-stretch my-auto w-12 h-12 bg-green-600 border-2 border-solid border-neutral-200 rounded-[3122px]" />
          <div className="flex-1 shrink self-stretch my-auto basis-0 min-w-60">
            <p className="text-base font-light text-black">John Master</p>
            <p className="text-sm font-medium leading-none text-neutral-700">
              Director, Spark.com
            </p>
          </div>
        </div>
      </div>
      <div className="flex absolute top-0 right-0 z-0 max-w-full h-[195px] min-h-[195px] w-[628px]" />
      <div className="flex absolute left-8 top-12 z-0 max-w-full min-h-24 w-[556px]" />
    </article>
  );
}

export default TestimonialCard;
