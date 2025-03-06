import React from "react";

function IntegrationApp({ icon, title, description }) {
  return (
    <div className="flex flex-1 gap-4 items-center">
      <div className="flex overflow-hidden items-start self-stretch my-auto w-14 rounded-xl">
        <img
          src={icon}
          className="object-contain w-14 aspect-square"
          alt={`${title} icon`}
        />
      </div>
      <div className="flex-1 shrink self-stretch pr-14 pb-1 my-auto text-gray-800 basis-0 min-w-60">
        <h3 className="text-xl tracking-normal leading-none">{title}</h3>
        <p className="text-base tracking-normal leading-7">{description}</p>
      </div>
    </div>
  );
}

export default IntegrationApp;
