import React from "react";

const TemplateSix = () => {
  return (
    <div>
      <div className="w-[400px] h-[400px] bg-[#143A6D] relative">
        <div className=" absolute w-[318.52px] h-[179.26px] top-[102px] left-[40px] bg-[#e0dddd] rounded-[40px] overflow-hidden">
          <img
            className="object-cover"
            src="https://img.freepik.com/free-photo/analog-landscape-city-with-buildings_23-2149661456.jpg?t=st=1723102433~exp=1723106033~hmac=0fd47463ab32c68c014a6442a33674a6331a5d7a2edf1158d9f851fb0ecb00c7&w=740"
            alt=""
          />
        </div>
        <svg
          className="top-[36px] absolute "
          width="400"
          height="365"
          viewBox="0 0 400 365"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="276.852" width="400" height="88.1481" fill="yellow" />
          <path
            d="M27.3574 1.3584L62.4266 1.3584"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
          />
          <line
            x1="28"
            y1="1.3584"
            x2="28"
            y2="276.902"
            stroke="white"
            stroke-width="2"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M372.683 276.901V1.35742H373.398V276.901H372.683Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
};

export default TemplateSix;
