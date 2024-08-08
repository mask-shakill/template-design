import React from "react";

const TemplateEight = () => {
  return (
    <div>
      <div className="w-[400px] lg:h-[1080px] lg:w-[1080px] h-[400px] bg-[#DBDBDB] relative ">
        {/* background shape */}
        <section>
          <svg
            className="h-full w-full"
            xmlns="http://www.w3.org/2000/svg"
            width="1080"
            height="618"
            viewBox="0 0 1080 618"
            fill="none"
          >
            <path d="M0 0H1080V369L536 618L0 366.5V0Z" fill="#002E6B" />
          </svg>

          <div className="h-[28px] lg:h-[36px] w-full bg-[#002E6B] absolute bottom-0"></div>
        </section>

        {/* image shape with image  */}
        <section className="w-full h-full absolute top-[53px] lg:top-[128px] flex justify-center">
          <div className="lg:w-[946px] lg:h-[529px] w-[80%] h-[46%] bg-[#FFF] overflow-hidden">
            <img
              className="h-full w-full object-cover"
              src="https://img.freepik.com/free-photo/beautiful-tropical-beach-front-hotel-resort-with-swimming-pool-paradise-destination-vacations-ge_1258-150769.jpg?t=st=1722929094~exp=1722932694~hmac=6dcfdd3a93c35a277642106eafb8046a32effba5559b25c521869235207767c2&w=740 "
              alt=""
            />
          </div>
        </section>

        {/* shape  */}
        <section>
          <svg
            className="absolute lg:top-[143px] lg:left-[24px] left-[10px] top-[60px] w-[335px] h-[4px] lg:w-[970px] lg:h-[6px] "
            xmlns="http://www.w3.org/2000/svg"
            width="970"
            height="6"
            fill="none"
          >
            <path
              d="M3.23438 2.77539H967.448"
              stroke="#FFAA2A"
              stroke-width="5"
              stroke-linecap="round"
            />
          </svg>

          <svg
            className="absolute h-[250px] w-[4px] lg:h-[657px] lg:w-[6px] lg:top-[27px] lg:left-[44px] top-[20px] left-[20px]"
            xmlns="http://www.w3.org/2000/svg"
            width="6"
            height="657"
            fill="none"
          >
            <path
              d="M2.84912 654.441V2.76953"
              stroke="#FFAA2A"
              stroke-width="5"
              stroke-linecap="round"
            />
          </svg>

          {/* book now  */}
          <div className="absolute left-[60px] bottom-[100px] lg:left-[96px] lg:bottom-[175px] border-4">
            <svg
              className="lg:w-[356px] lg:h-[356px] w-[156px] h-[156px] "
              xmlns="http://www.w3.org/2000/svg"
              width="356"
              height="349"
              viewBox="0 0 356 349"
              fill="none"
            >
              <path d="M0 0H356V286.41L177.5 349L0 286.911V0Z" fill="#002E6B" />
            </svg>
            <div className="">
              <h1 className="">book now</h1>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TemplateEight;
