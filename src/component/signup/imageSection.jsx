import React from "react";
import CoverImage from "../../assets/coverImg.png";

function ImageSection() {
  return (
    <aside className="overflow-hidden relative bg-lime-900 w-[541px] max-md:w-full max-md:h-[300px]">
      <img
        src={CoverImage}
        alt="coverimage"
        className="object-cover absolute top-0 h-[949px] left-[-158px] w-[727px] max-md:object-cover max-md:static max-md:size-full"
        role="presentation"
      />
    </aside>
  );
}

export default ImageSection;
