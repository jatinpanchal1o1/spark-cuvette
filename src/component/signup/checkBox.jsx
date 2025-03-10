import React from "react";

function CheckboxWithLabel({ checked, onChange, children, id }) {
  return (
    <div className="flex gap-1.5 items-start mx-0 my-5">
      <div className="flex items-start">
        <input
          type="checkbox"
          id={id}
          checked={checked}
          onChange={onChange}
          className="sr-only"
          aria-required="true"
        />
        <label htmlFor={id} className="cursor-pointer">
          <div className="inline-block">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="checkbox"
              style={{ width: "16.914px", height: "16.914px" }}
            >
              <g clipPath="url(#clip0_159_198)">
                <path
                  d="M14.0408 3.03418H4.17416C3.39188 3.03418 2.76465 3.66846 2.76465 4.44369V14.3103C2.76465 15.0855 3.39188 15.7198 4.17416 15.7198H14.0408C14.823 15.7198 15.4503 15.0855 15.4503 14.3103V4.44369C15.4503 3.66846 14.823 3.03418 14.0408 3.03418ZM7.69795 12.9008L4.17416 9.37699L5.16787 8.38328L7.69795 10.9063L13.0471 5.55721L14.0408 6.55796L7.69795 12.9008Z"
                  fill={checked ? "#111111" : "transparent"}
                  stroke={checked ? "none" : "#111111"}
                  strokeWidth={checked ? "0" : "1"}
                />
              </g>
              <defs>
                <clipPath id="clip0_159_198">
                  <rect
                    width="16.9142"
                    height="16.9142"
                    fill="white"
                    transform="translate(0.650391 0.919922)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </label>
      </div>
      <div className="text-xs text-neutral-700">{children}</div>
    </div>
  );
}

export default CheckboxWithLabel;
