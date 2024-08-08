import React from "react";
import Logo from "../../public/brandLogo1.png";

const Temp1 = () => {
  return (
    <div>
      <div className="w-[400px] h-[400px] bg-yellow-400 relative ">
        {/* image shape with image  */}
        <div className="w-[70%] h-[400px] absolute top-0 right-0 overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="https://img.freepik.com/free-photo/analog-landscape-city-with-buildings_23-2149661457.jpg?ga=GA1.1.1242648836.1702358523&semt=ais_hybrid"
            alt=""
          />
        </div>

        {/* shape  */}
        <div className="absolute">
          <svg
            width="296"
            height="400"
            viewBox="0 0 296 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M229.675 113.208C223.714 55.4809 188.322 13.6831 171.371 0H0V400H182.175C182.92 380.267 202.727 314.097 212.537 283.479C224.757 245.486 230.792 196.595 232.282 176.898C234.369 153.484 231.413 124.682 229.675 113.208Z"
              fill="#1A2736"
            />
            <path
              d="M296 400C207.041 317.319 60.0634 313.762 0 324.192V400H296Z"
              fill="#F9C700"
            />
          </svg>
        </div>

        {/* content  */}
        <div className="absolute top-[23px] left-6 ">
          {/* logo */}
          <div className="flex items-center gap-x-2">
            <img src={Logo} className="h-[18px] w-[20px]" alt="" />
            <h1
              style={{ fontFamily: "Bebas Neue", fontWeight: "400" }}
              className="text-[10px]   text-[#FFFFFF] uppercase font-normal "
            >
              your company
            </h1>
          </div>

          {/* heading  */}
          <div className="w-[174px] h-[60px] mt-12 ">
            <h1
              style={{
                fontFamily: "Bebas Neue",
                fontWeight: "400",
                letterSpacing: "1.5px",
              }}
              className="uppercase  font-semibold text-[#FFFFFF] text-[17px] leading-[18px]"
            >
              Empower innovation, embrace change, and drive the future
            </h1>
          </div>

          {/* sub-heading  */}
          <div className="w-[165px] h-[67px] mt-6  text-[16px]  font-normal">
            <h1
              style={{ fontFamily: "Be Vietnam" }}
              className=" text-19px leading-[17px] text-[#F9C700]"
            >
              Luxury awaits: stunning 4-bed, 3-bath home with pool, gourmet
              kitchen, and breathtaking views.
            </h1>
          </div>

          {/* contact info  */}
          <div className="mt-[110px] flex items-center gap-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 30 30"
              fill="none"
            >
              <path
                d="M29.63 22.0225C29.8487 22.6075 29.9762 23.2362 29.995 23.8937C30 23.9562 30 24.0187 30 24.0837C30 27.35 27.3512 30 24.085 30C10.7837 30 0 19.2162 0 5.915C0 2.64875 2.65 0 5.91625 0C5.98125 0 6.04375 0 6.10625 0.005C6.76375 0.0237501 7.395 0.15125 7.98 0.37L10.2 9.985C10.2 9.99 10.1975 9.9925 10.1925 9.995L6.12 11.825L6.10875 11.83C7.9775 17.5212 12.4787 22.0225 18.17 23.8912L18.175 23.88L20.0075 19.805L29.63 22.0225Z"
                fill="#1A2736"
              />
            </svg>
            <h1
              style={{ fontFamily: " Bebas Neue" }}
              className="font-normal  mt-1 text-[19px] text-[#1A2736]"
            >
              +123-456-7890
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Temp1;
