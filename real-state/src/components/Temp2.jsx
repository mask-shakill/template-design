import React from "react";

const Temp2 = () => {
  return (
    <div>
      <div className="w-[400px] h-[400px] bg-white relative">
        {/* image masking */}
        <div className="h-[210px] w-full bg-white overflow-hidden absolute ">
          <img
            className="w-full h-full object-cover"
            src="https://img.freepik.com/free-photo/set-designer-work-indoors_23-2149836942.jpg?ga=GA1.1.1242648836.1702358523&semt=ais_hybrid"
            alt=""
          />
        </div>

        {/* shape  */}
        <div className="absolute top-[139px]">
          <svg
            width="400"
            height="261"
            viewBox="0 0 400 261"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect y="70" width="400" height="190" fill="#023172" />
            <path d="M145 261L124.497 205H0V261H145Z" fill="white" />
            <rect y="119" width="400" height="86" fill="#03285B" />
            <path d="M307 122L265.153 0H0V122H307Z" fill="#004AAD" />
          </svg>
        </div>
        {/* content  */}
        <div className="absolute top-[160px] h-[96px] left-[37px]">
          {/* heading  */}
          <div className="w-[220px] h-[76px]  ">
            <h1
              style={{ fontFamily: "Poppins", fontWeight: "700" }}
              className=" uppercase leading-[22px] text-[20px] text-[#FFFFFF]"
            >
              Modern 3-bed home with pool and garden in prime location
            </h1>
          </div>

          {/* sub-heading  */}
          <div className="w-[343px]  h-[44px]  mt-[44px] ">
            <h1
              className="text-[12px] text-[#FFFFFF]"
              style={{ fontFamily: "Be Vietnam Pro", fontWeight: "400" }}
            >
              Elevate your lifestyle: 5-bedroom home, smart features, and
              eco-friendly design in a serene community.
            </h1>
          </div>

          {/* contact information  */}
          <div className="flex mt-[28px] items-center ">
            <div className="w-[64px] h-[41px] flex items-center justify-center ">
              <h1
                className="text-[#03285B] leading-[18px]"
                style={{ fontFamily: "Poppins", fontWeight: "800" }}
              >
                Book now
              </h1>
            </div>

            {/* number and email  */}
            <div className="ml-[90px] flex items-center gap-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 51 51"
                fill="none"
              >
                <path
                  d="M25.5 0C11.4115 0 0 11.4167 0 25.5C0 39.5885 11.4115 51 25.5 51C39.5885 51 51 39.5885 51 25.5C51 11.4167 39.5885 0 25.5 0ZM38.7083 35.3229C38.7083 36.1823 38.3438 36.9948 37.7083 37.5781C37.0781 38.1615 36.2188 38.4427 35.3646 38.3646C32.4271 38.0885 29.5781 37.3125 26.9167 36.0469C24.3281 34.8125 21.9896 33.1615 19.9531 31.1302C17.9219 29.1042 16.2604 26.7552 15.0365 24.1667C13.7708 21.5052 12.9844 18.6667 12.7188 15.7188C12.7083 15.625 12.7083 15.5365 12.7083 15.4427C12.7083 14.6771 12.9948 13.9427 13.5052 13.375C14.0885 12.7396 14.901 12.375 15.7604 12.375H19.8594C21.4219 12.375 22.7135 13.5365 22.8906 15.0781C22.9896 15.9844 23.1719 16.8802 23.4375 17.75C23.776 18.8385 23.4792 20.0156 22.6823 20.8073L21.0208 22.474C22.7656 25.6563 25.4167 28.3073 28.599 30.0521L30.2656 28.3854C31.0573 27.5938 32.2344 27.2969 33.3229 27.6354C34.1927 27.8958 35.0885 28.0833 35.9948 28.1823C37.5365 28.3594 38.6979 29.6615 38.6979 31.2135V35.3229H38.7083Z"
                  fill="white"
                />
              </svg>
              <h1
                className="text-[17px] text-[#FFFFFF]"
                style={{ fontFamily: "Be Vietnam Pro" }}
              >
                +123-456-7890
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Temp2;
