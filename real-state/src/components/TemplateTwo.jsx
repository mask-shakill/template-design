import React from "react";
import tempImage from "../../public/temp2.jpg";
const TemplateTwo = () => {
  return (
    <div>
      <section className="w-[1080px] h-[1080px] relative ">
        {/* image shape  */}
        <div>
          <svg
            className="absolute top-0"
            width="1061"
            height="565"
            viewBox="0 0 1061 565"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="-19" width="1080" height="565" fill="red" />
          </svg>

          <img
            src={tempImage}
            className="absolute h-[666px] w-[1080px]"
            alt=""
          />
        </div>

        {/* bottom background  */}
        <div className="absolute h-[514px] w-[1080px] bottom-0 bg-[#023172]">
          {/* contact and book now  */}
          <div className="absolute left-0 bottom-0">
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="393"
                height="151"
                viewBox="0 0 393 151"
                fill="none"
              >
                <path d="M392.5 151L337 0H0V151H392.5Z" fill="white" />
              </svg>
              {/* book now  */}
              <div className="w-[155px] h-[98px] absolute top-[31px] left-[85px]">
                <h1 className="text-[52px] font-popins text-[#03285B] font-extrabold  leading-[49px]">
                  BOOK NOW
                </h1>
              </div>

              {/* contact information  */}
              <div className="absolute bottom-9  left-[540px]">
                <div className="flex items-center  gap-7">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="51"
                    height="51"
                    viewBox="0 0 51 51"
                    fill="none"
                  >
                    <path
                      d="M25.5 0C11.4115 0 0 11.4167 0 25.5C0 39.5885 11.4115 51 25.5 51C39.5885 51 51 39.5885 51 25.5C51 11.4167 39.5885 0 25.5 0ZM38.7083 35.3229C38.7083 36.1823 38.3438 36.9948 37.7083 37.5781C37.0781 38.1615 36.2188 38.4427 35.3646 38.3646C32.4271 38.0885 29.5781 37.3125 26.9167 36.0469C24.3281 34.8125 21.9896 33.1615 19.9531 31.1302C17.9219 29.1042 16.2604 26.7552 15.0365 24.1667C13.7708 21.5052 12.9844 18.6667 12.7188 15.7188C12.7083 15.625 12.7083 15.5365 12.7083 15.4427C12.7083 14.6771 12.9948 13.9427 13.5052 13.375C14.0885 12.7396 14.901 12.375 15.7604 12.375H19.8594C21.4219 12.375 22.7135 13.5365 22.8906 15.0781C22.9896 15.9844 23.1719 16.8802 23.4375 17.75C23.776 18.8385 23.4792 20.0156 22.6823 20.8073L21.0208 22.474C22.7656 25.6563 25.4167 28.3073 28.599 30.0521L30.2656 28.3854C31.0573 27.5938 32.2344 27.2969 33.3229 27.6354C34.1927 27.8958 35.0885 28.0833 35.9948 28.1823C37.5365 28.3594 38.6979 29.6615 38.6979 31.2135V35.3229H38.7083Z"
                      fill="white"
                    />
                  </svg>
                  <h1 className="leading-[45px] font-normal font-Be_Vietnam text-[40px] text-[#FFF]">
                    +123-456-7890
                  </h1>
                </div>
                <h1 className="text-[40px] leading-[38px] font-Be_Vietnam text-[#FFF]">
                  www.yourwebsite.com
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* title section  */}
        <div className="left-0 relative top-[374px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="829"
            height="330"
            viewBox="0 0 829 330"
            fill="none"
          >
            <path d="M829 330L716 0H0V330H829Z" fill="#004AAD" />
          </svg>
          <div className="w-[662px] h-[225px] absolute top-[53px] left-[85px]">
            <h1 className="text-[68px] from-normal font-semibold text-[#FFF] font-popins leading-[74.8px]">
              OUR BEST EXPERIENCE CAR REPAIR SERVICESSS
            </h1>
          </div>
        </div>

        {/* sub-title  */}
        <div className="h-[231px] w-[1080px] bg-[#03285B] absolute bottom-[151px]">
          <div className="w-[849px]  h-[98px] absolute top-[53px] left-[85px]">
            <h1 className="leading-[40px] font-normal font-Be_Vietnam text-[40px] text-[#FFFFFF]">
              Rev Up Your Engine! Experience Top-Notch Car Repair Services. We
              Keep You Rollin
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TemplateTwo;
