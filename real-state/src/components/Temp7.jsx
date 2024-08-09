import React from "react";
import Logo from "../../public/brandLogo1.png";
const Temp7 = () => {
  return (
    <div className="w-[400px] h-[400px] relative">
      {/* image masking  */}
      <div className="w-[263px] h-[400px] bg-white absolute right-0 top-0 overflow-hidden">
        <img
          className="w-full h-full "
          src="https://img.freepik.com/free-photo/high-structural-modern-skyscraper_23-2148184238.jpg?ga=GA1.1.317116668.1722370668&semt=ais_hybrid"
          alt=""
        />
      </div>

      {/* shape  */}
      <svg
        className="absolute"
        width="385"
        height="400"
        viewBox="0 0 385 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M213.087 89.6296C208.794 31.1111 165.084 7.40741 152.4 0H0V400H385C371.797 382.496 348.374 364.991 340.818 359.344L340.704 359.259C325.094 347.593 301.393 335.211 291.14 329.63C268.31 317.201 255.867 305.19 250.943 300.556C227.331 278.333 218.099 255.287 214.843 246.296C204.11 216.667 206.842 188.148 208.989 169.259C214.068 124.567 213.875 100.37 213.087 89.6296Z"
          fill="#967236"
        />
        <path
          d="M192.94 90.1383C187.983 31.3364 156.286 5.22273 139.886 0H0V400H351C340.867 383.336 322.056 365.591 313.917 358.525C303.637 348.793 285.279 335.55 275.55 330.138C250.032 315.945 238.158 306.273 232.96 302.304C206.157 281.843 196.017 257.696 192.573 248.848C181.264 219.797 184.556 180.215 187.616 164.055C195.547 123.65 193.624 98.2489 192.94 90.1383Z"
          fill="#C6AA77"
        />
        <path
          d="M186.344 90.1383C181.556 31.3364 150.942 5.22273 135.104 0H0V400H339C329.213 383.336 311.046 365.591 303.185 358.525C293.256 348.793 275.526 335.55 266.129 330.138C241.484 315.945 230.016 306.273 224.995 302.304C199.109 281.843 189.315 257.696 185.989 248.848C175.067 219.797 178.247 180.215 181.202 164.055C188.861 123.65 187.004 98.2489 186.344 90.1383Z"
          fill="#121212"
        />
      </svg>

      {/* brand name and logo  */}
      <div className="flex items-center overflow-hidden absolute top-4 left-[21px] gap-x-2">
        <img src={Logo} className="h-[18px] w-[20px]" alt="" />
        <h1
          style={{ fontFamily: "Bebas Neue", fontWeight: "400" }}
          className="text-[11px]   text-[#FFFFFF] uppercase font-normal "
        >
          your company
        </h1>
      </div>

      {/* content  */}

      <div className="absolute top-[23px] left-6 ">
        {/* heading  */}
        <div className="w-[148px] break-words h-[125px] mt-7  ">
          <h1
            style={{
              fontFamily: "Poppins",
              fontWeight: "700",
              letterSpacing: "1.5px",
            }}
            className="uppercase  font-semibold text-[#FFFFFF] text-[16px] leading-[18px]"
          >
            Beautiful 3 bedroom house for sale in a quiet neighborhood nearby
            city
          </h1>
        </div>

        {/* sub-heading  */}
        <div className="w-[148px] h-[86px] mt-5  text-[16px]   font-normal">
          <h1
            style={{ fontFamily: "Poppins", fontWeight: "400" }}
            className=" text-[13.5px] break-words leading-[17px] text-[#F9C700]"
          >
            Luxury awaits stunning 4 bed, 3 bath home with pool, gourmet
            kitchen, and breathtaking views
          </h1>
        </div>

        {/* button  */}
        <button
          style={{ fontFamily: "Poppins", fontWeight: "600" }}
          className="  bg-[#C6AA77] px-[19px] py-[7px]  rounded-full text-[#121212] text-[9px] uppercase mt-7"
        >
          Book now
        </button>

        {/* contact info  */}
        <div className=" flex items-center gap-x-2 mt-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 39 39"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16.0574 14.9382C12.4428 17.0267 17.9584 27.3704 21.9167 25.084L25.5834 31.4382C23.9167 32.4017 22.5001 33.0111 20.5678 31.9069C15.1928 28.834 9.27612 18.5892 9.44799 12.485C9.50529 10.36 10.7553 9.5319 12.3907 8.58398L16.0574 14.9382Z"
              fill="#C9AD7B"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17.5733 14.7656C17.1827 14.9896 16.6827 14.8594 16.4587 14.4687L13.0004 8.47916C12.7712 8.08332 12.9066 7.58332 13.2972 7.35936L15.115 6.30728C15.5056 6.08332 16.0108 6.21874 16.2347 6.60936L19.6931 12.5989C19.917 12.9896 19.7816 13.4896 19.391 13.7187L17.5733 14.7656Z"
              fill="#C9AD7B"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M27.0206 31.1308C26.6299 31.3548 26.1299 31.2246 25.906 30.834L22.4476 24.8392C22.2185 24.4486 22.3539 23.9486 22.7445 23.7246L24.5622 22.6725C24.9528 22.4486 25.4581 22.584 25.682 22.9746L29.1403 28.9642C29.3643 29.3548 29.2289 29.8548 28.8383 30.084L27.0206 31.1308Z"
              fill="#C9AD7B"
            />
            <path
              d="M19.349 0.00520833C24.6927 0.00520833 29.526 2.17187 33.026 5.66667C36.526 9.16667 38.6875 14.0052 38.6875 19.349C38.6875 24.6927 36.526 29.5312 33.026 33.026C29.526 36.526 24.6927 38.6875 19.349 38.6875C14.0052 38.6875 9.16667 36.526 5.66667 33.026C2.17187 29.526 0.00520833 24.6927 0.00520833 19.349C0.00520833 14.0052 2.17187 9.16667 5.66667 5.66667C9.16667 2.17187 14.0052 0.00520833 19.349 0.00520833ZM19.349 2.30729C14.6458 2.30729 10.3906 4.21875 7.30208 7.30208C4.21875 10.3906 2.30729 14.6458 2.30729 19.349C2.3125 24.0469 4.21875 28.3073 7.30208 31.3906C10.3906 34.474 14.6458 36.3854 19.349 36.3854C24.0469 36.3854 28.3073 34.4792 31.3906 31.3906C34.4792 28.3073 36.3854 24.0469 36.3854 19.349C36.3854 14.6458 34.4792 10.3906 31.3906 7.30208C28.3073 4.21875 24.0469 2.30729 19.349 2.30729Z"
              fill="#C9AD7B"
            />
          </svg>
          <h1
            style={{ fontFamily: " Bebas Neue" }}
            className="font-normal  mt-1 text-[19px] text-[#ffffff]"
          >
            +123-456-7890
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Temp7;
