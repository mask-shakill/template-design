import React from "react";
import Logo from "../../public/brandLogo1.png";
const Temp5 = () => {
  return (
    <div className="h-[400px] w-[400px relative">
      {/* shape */}
      <svg
        width="400"
        height="400"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect y="139.259" width="400" height="260.741" fill="#D9D9D9" />
        <path
          d="M350.741 359.259H359.948V377.42H350.741V359.259Z"
          fill="#C2B44C"
        />
        <path d="M0 0H400V139.259H0V0Z" fill="#095D40" />
      </svg>

      {/* image masking  */}
      <div className="w-[338.15px] h-[197.778px] bg-[#FFFFFF] absolute top-[64px] left-[31px]"></div>
      <div className="w-[320px] h-[180px] absolute top-[73px] left-[40px] overflow-hidden">
        <img
          className="h-full w-full object-cover"
          src="https://img.freepik.com/free-photo/mumbai-skyline-skyscrapers-construction_469504-21.jpg?ga=GA1.1.317116668.1722370668&semt=ais_hybrid"
          alt=""
        />
      </div>
      {/* logo and brand name  */}
      <div className="flex items-center absolute top-8 left-6 gap-x-2">
        <img src={Logo} className="h-[18px] w-[20px]" alt="" />
        <h1
          style={{ fontFamily: "Bebas Neue", fontWeight: "400" }}
          className="text-[11px]   text-[#FFFFFF] uppercase font-normal "
        >
          your company
        </h1>
      </div>

      {/* shape  */}
      <svg
        className="absolute bottom-[21px] left-[48px]"
        xmlns="http://www.w3.org/2000/svg"
        width="82"
        height="197"
        viewBox="0 0 82 197"
        fill="none"
      >
        <path
          d="M0.518555 0.222656H81.1667V196.488H0.518555V0.222656Z"
          fill="#C2B44C"
        />
      </svg>

      <svg
        className="absolute bottom-[40px] left-[63.5px]"
        width="50"
        height="44"
        viewBox="0 0 115 94"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0.5 1.26562H114.151" stroke="white" stroke-width="2" />
        <path
          d="M0.499999 92.1447L114.151 92.952"
          stroke="white"
          stroke-width="2"
        />
      </svg>

      {/* book now  */}

      <div className="absolute bottom-[48px] flex items-center justify-center left-[74.5px] w-[34px] h-[30px]">
        <h1
          className="uppercase text-[#FFFFFF] text-[10px]"
          style={{ fontFamily: "Poppins", fontWeight: "400" }}
        >
          Book now
        </h1>
      </div>

      {/* content  */}
      <div className="absolute top-[245px] right-12">
        {/* heading  */}
        <div className="w-[200px] h-[50px]  mt-5 ">
          <h1
            style={{ fontFamily: "Poppins", fontWeight: "700" }}
            className=" uppercase leading-[15px] text-[12px] text-[#006900]"
          >
            Beautiful 3 bedroom house for sale in a quiet neighborhood nearby
            city.
          </h1>
        </div>

        {/* sub-heading  */}
        {/* sub-heading  */}
        <div className="w-[202px]   h-[55px] mt-1  ">
          <h1
            className="text-[9px] text-[#000000] leading-[12px]"
            style={{ fontFamily: "Poppins", fontWeight: "400" }}
          >
            Beautiful 3 bedroom house for sale in a quiet neighborhood nearby
            city, featuring modern amenities, spacious backyard, and excellent
            school district.
          </h1>
        </div>

        {/* phone number  */}
        <div className="flex items-center gap-x-[5px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 46 46"
            fill="none"
          >
            <path
              d="M23 0C10.2927 0 0 10.2974 0 23C0 35.7073 10.2927 46 23 46C35.7073 46 46 35.7073 46 23C46 10.2974 35.7073 0 23 0ZM34.9134 31.8599C34.9134 32.635 34.5846 33.3679 34.0114 33.894C33.443 34.4201 32.6679 34.6738 31.8975 34.6034C29.248 34.3544 26.6783 33.6544 24.2778 32.5129C21.943 31.3995 19.8337 29.9103 17.9969 28.0782C16.1648 26.2508 14.6663 24.1321 13.5623 21.7974C12.4208 19.3969 11.7114 16.8366 11.4718 14.1777C11.4624 14.0931 11.4624 14.0133 11.4624 13.9287C11.4624 13.2382 11.7208 12.5758 12.1812 12.0637C12.7073 11.4906 13.4402 11.1618 14.2153 11.1618H17.9124C19.3217 11.1618 20.4867 12.2094 20.6464 13.5999C20.7357 14.4173 20.9001 15.2253 21.1397 16.0098C21.4451 16.9916 21.1773 18.0533 20.4585 18.7674L18.96 20.2706C20.5337 23.1409 22.9248 25.5321 25.7951 27.1058L27.2984 25.6025C28.0125 24.8885 29.0741 24.6207 30.056 24.9261C30.8405 25.1609 31.6485 25.3301 32.4659 25.4193C33.8564 25.579 34.904 26.7535 34.904 28.1534V31.8599H34.9134Z"
              fill="black"
            />
          </svg>
          <h1
            className="text-[10px] text-[#000000]"
            style={{ fontFamily: "Be Vietnam Pro", fontWeight: "700" }}
          >
            +123-456-7890
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Temp5;
