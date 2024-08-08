import React from "react";
import Logo from "../../public/brandLogo1.png";

const Temp3 = () => {
  return (
    <div>
      <div className="w-[400px] h-[400px] bg-white relative">
        {/* image masking  */}
        <div className="w-[210px] h-[258px] bg-[#FFDE59] rounded-[50px] absolute right-[17px] top-[39px]"></div>
        <div className="w-[208px] h-[256px] overflow-hidden bg-black absolute top-[40px] right-[18px] rounded-[50px] ">
          <img
            className="w-full h-full object-cover"
            src="https://img.freepik.com/free-photo/analog-landscape-city-with-buildings_23-2149661457.jpg?ga=GA1.1.1242648836.1702358523&semt=ais_hybrid"
            alt=""
          />
        </div>

        {/* shape  */}
        <div>
          <svg
            width="400"
            height="400"
            viewBox="0 0 400 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect y="334" width="200" height="66" fill="#1D6D27" />
            <rect x="200" y="334" width="200" height="66" fill="#062446" />
            <rect width="400" height="187" fill="#062446" />
          </svg>
        </div>

        {/* content  */}
        <div className="absolute top-[27px] left-[30px]">
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
          <div className="w-[127px] h-[85px]  mt-5 ">
            <h1
              style={{ fontFamily: "Poppins", fontWeight: "700" }}
              className=" uppercase leading-[22px] text-[21px] text-[#FFDE59]"
            >
              OUR BEST EXPERIENCE CAR REPAIR SERVICESSS
            </h1>
          </div>

          {/* sub-heading  */}
          <div className="w-[133px]   h-[100px]  mt-[54px] ">
            <h1
              className="text-[14px] text-[#1D6D27]"
              style={{ fontFamily: "Be Vietnam Pro", fontWeight: "400" }}
            >
              Rev Up Your Engine! Experience Top-Notch Car Repair Services. We
              Keep You Rollin
            </h1>
          </div>

          {/* contact information  */}
        </div>

        <div className="absolute bottom-2 left-[28px] ">
          <h1
            className="uppercase text-[#FFDE59]"
            style={{ fontFamily: "Poppins", fontWeight: "600" }}
          >
            Book now
          </h1>
          <div className="flex items-center gap-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 39 39"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.0575 14.9323C12.4377 17.0208 17.9585 27.3646 21.9116 25.0781L25.5835 31.4323C23.9116 32.3958 22.5002 33.0052 20.5627 31.901C15.1929 28.8281 9.27623 18.5885 9.4429 12.4792C9.50019 10.3542 10.7502 9.52604 12.3856 8.57812L16.0575 14.9323Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.5729 14.7598C17.1823 14.9889 16.6771 14.8535 16.4531 14.4629L12.9948 8.4733C12.7708 8.08267 12.9062 7.57746 13.2969 7.35351L15.1146 6.30142C15.5052 6.07746 16.0052 6.21288 16.2292 6.60351L19.6875 12.5931C19.9167 12.9837 19.7812 13.4837 19.3906 13.7129L17.5729 14.7598Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M27.0202 31.125C26.6295 31.3542 26.1243 31.2187 25.9004 30.8281L22.442 24.8385C22.2181 24.4479 22.3535 23.9427 22.7441 23.7187L24.5618 22.6667C24.9525 22.4427 25.4525 22.5781 25.6764 22.9687L29.1348 28.9583C29.3639 29.3489 29.2285 29.8489 28.8379 30.0781L27.0202 31.125Z"
                fill="white"
              />
              <path
                d="M19.3438 0C24.6875 0 29.526 2.16667 33.026 5.66667C36.5208 9.16146 38.6875 14 38.6875 19.3438C38.6875 24.6875 36.5208 29.526 33.0208 33.0208C29.526 36.5208 24.6875 38.6823 19.3438 38.6823C14 38.6823 9.16146 36.5208 5.66667 33.0208C2.16667 29.526 0.00520833 24.6875 0.00520833 19.3438C0.00520833 14 2.16667 9.16146 5.66667 5.66667C9.16667 2.16667 14 0 19.3438 0ZM19.3438 2.30729C14.6458 2.30729 10.3854 4.21354 7.30208 7.29688C4.21875 10.3854 2.30729 14.6458 2.30729 19.3438C2.30729 24.0417 4.21354 28.3021 7.30208 31.3854C10.3854 34.474 14.6458 36.3802 19.3438 36.3802C24.0469 36.3802 28.3021 34.474 31.3906 31.3854C34.474 28.3021 36.3854 24.0417 36.3854 19.3438C36.3854 14.6406 34.474 10.3854 31.3906 7.29688C28.3021 4.21354 24.0469 2.30729 19.3438 2.30729Z"
                fill="white"
              />
            </svg>
            <h1
              className="text-[14px] text-[#FFFFFF]"
              style={{ fontFamily: "Poppins" }}
            >
              +123-456-7890
            </h1>
          </div>
        </div>

        <div className="absolute right-4 bottom-5">
          <h1
            className="text-[13px] text-white"
            style={{ fontFamily: "Poppins", fontWeight: "400" }}
          >
            mask.shakill@gmail.com
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Temp3;
