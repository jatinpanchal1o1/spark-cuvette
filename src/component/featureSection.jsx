import React from "react";

function FeatureSection({
  reversed = false,
  content,
  // eslint-disable-next-line no-unused-vars
  image,
  backgroundColor = "bg-white",
  contentWidth = "w-1/2",
  imageWidth = "w-1/2",
  imageContent,
  additionalContent,
}) {
  const contentSection = (
    <div
      className={`${reversed ? "ml-5" : ""} ${contentWidth} max-md:ml-0 max-md:w-full`}
    >
      <div className="flex flex-col justify-center py-10 my-auto text-gray-800 max-md:mt-10 max-md:max-w-full">
        <div className="w-full max-md:max-w-full">
          <h2 className="text-4xl font-bold tracking-tighter leading-[59px] max-md:max-w-full">
            {content.title}
          </h2>
          <p className="mt-6 text-base tracking-tight leading-8 max-md:max-w-full">
            {content.description}
          </p>
        </div>
      </div>
    </div>
  );

  const imageSection = (
    <div
      className={`${!reversed ? "ml-5" : ""} ${imageWidth} max-md:ml-0 max-md:w-full`}
    >
      <div
        className={`flex grow items-start px-10 py-12 w-full ${backgroundColor} rounded-[32px] max-md:px-5 max-md:mt-8`}
      >
        <div className="flex flex-col flex-1 shrink pt-10 w-full basis-0 min-w-60 max-md:max-w-full">
          {imageContent}
          {additionalContent}
        </div>
      </div>
    </div>
  );

  return (
    <section className="mt-12 w-full max-w-[1270px] max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        {reversed ? contentSection : imageSection}
        {reversed ? imageSection : contentSection}
      </div>
    </section>
  );
}

export default FeatureSection;
