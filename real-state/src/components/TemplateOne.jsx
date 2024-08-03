import React from "react";
import temImage from "../../public/temp1.jpg";
const TemplateOne = () => {
  return (
    <div>
      <section className="h-[1080px] w-[1080px] relative ">
        {/* image frame  */}
        <div>
          <svg
            className="absolute top-0 right-0"
            xmlns="http://www.w3.org/2000/svg"
            width="626"
            height="1079"
            viewBox="0 0 626 1079"
            fill="none"
          >
            <path
              d="M626 0H0C113.6 96.841 147.658 234.132 156 303.874C167.5 400.017 170.5 486.696 141 640.127C135.8 679.182 100.5 799.868 83.5 855.329C68.7 898.768 50.6667 965.421 43.5 993.318C31.1 1045.92 26.1667 1074.02 28 1079H626V0Z"
              fill="white"
            />
          </svg>
          <img
            className="absolute w-[700px] top-0 h-[1080px] right-0 "
            src={temImage}
            alt=""
          />
        </div>

        <div className="absolute top-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="633"
            height="1080"
            viewBox="0 0 633 1080"
            fill="none"
          >
            <path
              d="M623.966 304.509C607.772 148.215 511.622 35.0469 465.571 -2H0V1081H494.922C496.946 1027.57 550.757 848.418 577.409 765.52C610.606 662.652 627.002 530.28 631.051 476.952C636.718 413.557 628.689 335.576 623.966 304.509Z"
              fill="#1A2736"
            />
          </svg>
        </div>

        {/* heading and content  */}
        <div className="absolute top-0 left-[70px] ">
          {/* brand name and logo */}
          <div className="flex items-center  gap-[18.51px] pt-[90px] ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="61"
              height="60"
              viewBox="0 0 61 60"
              fill="none"
            >
              <g mask="url(#mask0_111_111)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M30.276 56.6357H20.0938C18.1719 57.7764 16.2292 60.2087 16.2292 60.2087C16.2292 58.6826 17.3958 55.4795 19.1615 53.8857C23.875 52.7451 26.8073 51.3857 29.0469 47.3024C26.4896 48.9378 24.8177 48.9847 23.0521 48.9378C27.9375 47.5524 35.0208 41.2035 37.0625 37.6566C39.3646 33.6514 41.4792 28.9639 43.9531 25.1774C41.8385 26.8597 39.5365 27.2243 37.5365 26.7035C41.4375 25.0212 52.2656 16.0212 53.224 11.2295C53.8542 12.4378 53.4115 15.9378 51.9531 18.7087L59.9427 25.6097C60.4323 26.0316 59.901 27.0055 59.2552 27.0055H57.3385C55.9219 27.0055 54.7656 28.1618 54.7656 29.5785V54.7868C54.7656 55.8024 53.9323 56.6357 52.9115 56.6357H30.276ZM15.0313 56.6357H7.64063C6.61979 56.6357 5.78646 55.8024 5.78646 54.7868V29.5785C5.78646 28.1618 4.63021 27.0055 3.21354 27.0055H1.29688C0.651044 27.0055 0.119792 26.0316 0.609376 25.6097L30.276 -0.00488281L47.2865 14.6826C38.6302 20.4795 35.0156 17.5837 27.7865 26.0524C27.4063 25.2399 28.4531 22.4951 30.151 20.7712C22.375 24.5576 17.9219 33.9639 16.5 37.7139C15.5677 40.167 15.2865 41.5524 15.7604 44.1566C14.9271 42.9691 14.5521 42.1149 14.276 39.7712C11.6927 44.3805 13.6354 48.2816 15.2813 52.5889C15.6875 53.6618 15.3958 55.1982 15.0313 56.6357Z"
                  fill="#F9C700"
                />
              </g>
            </svg>
            <h1 className="w-[70px] h-[48px] text-[24px] font-normal text-white font-bebas">
              Your Company
            </h1>
          </div>

          {/* Title  */}
          <div className="w-[467px] h-[198px] font-bebas font-normal text-[70px] text-[#FFF] leading-[66.5px] mt-[141px]">
            <h1>OUR BEST EXPERIENCE CAR REPAIR SERVICESSS</h1>
          </div>

          {/* sub-title  */}
          <div className="w-[456px] h-[194px] font-Be_Vietnam font-normal text-[36px] leading-[46.8px ] text-[#F9C700] mt-[77px] tracking-[1.8px]">
            <h1>
              Rev Up Your Engine! Experience Top-Notch Car Repair Services. We
              Keep You Rollin
            </h1>
          </div>
        </div>
        {/* contact section  */}
        <div className="w-[788px] h-[197px]  ">
          <svg
            className="absolute left-0 bottom-0"
            xmlns="http://www.w3.org/2000/svg"
            width="788"
            height="197"
            viewBox="0 0 788 197"
            fill="none"
          >
            <path
              d="M788 197C551.177 -6.60163 159.899 -15.36 0 10.3229V197H788Z"
              fill="#F9C700"
            />
          </svg>
          {/* phone icon and number  */}
          <div className="flex items-center gap-x-5 absolute  bottom-10 left-[70px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="69"
              height="69"
              viewBox="0 0 69 69"
              fill="none"
            >
              <path
                d="M68.149 50.6517C68.6521 51.9972 68.9454 53.4434 68.9885 54.9556C69 55.0994 69 55.2431 69 55.3926C69 62.905 62.9079 69 55.3955 69C24.8026 69 0 44.1974 0 13.6045C0 6.09212 6.095 0 13.6074 0C13.7569 0 13.9006 0 14.0444 0.0115C15.5566 0.0546252 17.0085 0.347875 18.354 0.851L23.46 22.9655C23.46 22.977 23.4543 22.9827 23.4428 22.9885L14.076 27.1975L14.0501 27.209C18.3482 40.2989 28.7011 50.6517 41.791 54.9499L41.8025 54.924L46.0173 45.5515L68.149 50.6517Z"
                fill="#1A2736"
              />
            </svg>
            <div className="flex flex-col gap-y-0">
              <h1 className="text-[48px] font-bebas leading-[20px] pt-6">
                +123-456-7890
              </h1>
              <p className="text-[32px] font-bebas font-normal ">
                www.yourwebsite.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TemplateOne;
