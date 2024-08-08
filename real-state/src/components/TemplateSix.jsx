// src/TemplateSix.jsx
import React from "react";
import html2canvas from "html2canvas";
import Img from "../../public/temp3.png";

const TemplateSix = () => {
  const captureScreenshot = () => {
    const element = document.getElementById("capture");

    // Ensure the element is found before attempting to capture
    if (element) {
      // Set the scale factor to achieve 2K width (2048px)
      const scale = 2048 / element.offsetWidth;

      html2canvas(element, { scale })
        .then((canvas) => {
          const dataUrl = canvas.toDataURL("image/png");
          const link = document.createElement("a");
          link.href = dataUrl;
          link.download = "screenshot.png";
          link.click();
        })
        .catch((err) => {
          console.error("Error capturing screenshot:", err);
        });
    } else {
      console.error("Element with id 'capture' not found.");
    }
  };

  return (
    <div className="relative bg-[#143A6D] p-6 sm:p-4">
      <div id="capture" className="max-w-[1080px] mx-auto">
        {/* Heading Title */}
        <div className="w-full max-w-[728px] mx-auto pt-[40px]">
          <h1 className="font-bold text-[#FFF] text-[58px] uppercase leading-[63px] tracking-[2.9px] font-popins text-center">
            Transform Your Future with the Digital World Today
          </h1>
        </div>

        {/* Image Masking */}
        <section className="mt-[22px] mx-auto">
          <div className="w-full max-w-[860px] h-[484px] rounded-[40px] bg-[#D9D9D9] overflow-hidden mx-auto">
            <img
              className="w-full h-full object-cover"
              src={Img}
              alt="Real Estate"
            />
          </div>
        </section>

        {/* Content */}
        <section className="w-full bg-[#FFFFFF] mt-[22px]">
          <div className="w-full max-w-[860px] mx-auto py-[22px]">
            <h1 className="font-popins text-[32px] font-normal text-center">
              In the digital world, every challenge is an opportunity and every
              idea can become reality.
            </h1>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-x-[43px] mx-[37px] mt-[4px]">
            {/* Contact Information */}
            <div className="flex items-center gap-x-[27px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="46"
                height="63"
                viewBox="0 0 46 63"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M26.4189 22.2188C26.5109 22.213 26.6087 22.2188 26.695 22.2363C26.8042 22.2479 26.9135 22.277 27.0113 22.3177C29.0412 23.0741 30.7549 24.61 31.7958 26.6462C32.8424 28.6824 33.1069 30.9804 32.5606 33.1155C32.3306 33.9708 31.537 34.6107 30.7089 34.3082C30.3121 34.1627 29.8923 33.6566 29.7026 33.2726C29.5128 32.8886 29.4495 32.4174 29.5645 32.0043C29.9096 30.707 29.6566 29.1711 29.1045 28.0599C28.5639 26.9487 27.5346 25.8084 26.2867 25.3488C25.8899 25.2034 25.4643 24.9299 25.2458 24.5867C25.0273 24.2434 24.8663 23.6907 24.9755 23.2777C25.1538 22.6203 25.7691 22.2305 26.4189 22.2188ZM28.9665 15.9007C29.07 15.9182 29.1792 15.9415 29.2828 15.9822C32.9057 17.3086 35.8903 20.0023 37.7305 23.5744C39.5592 27.1465 40.002 31.1782 39.0129 34.9191C38.8979 35.367 38.5643 35.751 38.2135 35.943C37.8512 36.1408 37.3107 36.2397 36.8736 36.0826C36.4481 35.9313 36.0858 35.5008 35.896 35.111C35.7177 34.7212 35.6257 34.186 35.7465 33.7439C36.5228 30.899 35.8328 27.4548 34.7804 25.1219C33.7395 22.7832 32.1926 20.7295 29.4495 19.7347C29.0125 19.5834 27.7473 18.9143 27.3448 18.4547C26.9422 17.9893 26.9365 17.4075 27.0515 16.9596C27.1723 16.5174 27.6036 16.2673 27.9946 16.0578C28.1499 15.9822 28.3051 15.9298 28.4662 15.9007C28.6272 15.8775 28.794 15.8775 28.9665 15.9007ZM30.5479 9.44883C30.6572 9.44883 30.7607 9.45465 30.8699 9.4721C30.985 9.49537 31.1 9.52446 31.215 9.571C36.3791 11.5607 41.0141 16.2207 43.3776 20.7935C45.7354 25.3604 46.7475 31.5738 45.3903 36.9902C45.1546 37.9443 44.1597 38.5435 43.3776 38.433C42.9348 38.2643 42.5035 37.8978 42.3367 37.4672C42.1642 37.0425 42.2562 36.3153 42.3713 35.8557C43.4926 31.3586 42.331 26.1342 40.4333 22.341C38.5356 18.542 35.1887 14.8768 30.9792 13.0966C30.5479 12.9104 29.6623 12.4973 29.3173 12.0785C28.9722 11.6596 28.794 11.0313 28.909 10.5775C29.0872 9.84443 29.8118 9.43719 30.5479 9.44883ZM12.3873 0.000758159C14.1125 -0.0283318 15.832 0.78034 16.8958 2.31623L17.2351 2.81074L18.2127 4.77715C18.8453 6.18505 19.2421 7.51733 19.5009 8.82051L19.5757 9.11721L19.6274 9.39647L20.0875 11.7119L20.1277 11.8865L20.191 12.2472C20.3635 13.2246 20.2772 14.231 19.9264 15.1502C19.6562 15.8891 19.2249 16.5698 18.6383 17.1399L18.2127 17.553L17.8275 17.873L13.3822 21.0029C12.4793 21.6429 11.9848 22.1025 12.7036 23.7722C12.7036 23.7722 12.9451 24.3191 12.9566 24.3249C13.3592 25.3488 13.2902 25.1394 13.5202 25.7386C14.6071 28.3275 15.6825 30.8408 17.1144 33.4413C19.5929 37.9792 22.4165 42.0167 25.3608 45.3736L25.5218 45.5539L25.6138 45.5598C25.9359 45.5423 26.2637 45.4143 26.6375 45.2514L31.6233 43.1105L32.0948 42.9534L32.6699 42.808C33.4577 42.6101 34.2571 42.5985 35.0162 42.7556C35.9708 42.9534 36.8679 43.4072 37.5867 44.0762L37.8627 44.3264L37.9835 44.4544L39.6742 46.0717L39.8812 46.2637L40.094 46.4906C41.0486 47.404 41.9515 48.457 42.791 49.7427L43.9239 51.6219L44.154 52.1804C44.867 53.9141 44.637 55.8107 43.6939 57.2768C43.2626 57.9342 42.699 58.5043 41.9975 58.9348C41.7674 59.0745 41.5259 59.2024 41.2671 59.313L39.0186 60.2671L39.0014 60.366L38.9669 60.2904L33.6245 62.5651L33.4807 62.6349L33.3485 62.6757L33.2105 62.7397C33.2105 62.7338 33.2105 62.7338 33.2105 62.728L32.9804 62.8095C32.1006 63.0654 31.1632 63.0596 30.2719 62.8153L30.0648 62.7397L30.0303 62.7513L29.5473 62.5884C22.6638 59.9762 14.5496 51.9128 8.47689 40.8125L8.35613 40.5856L8.37913 40.5739L8.29287 40.4227C8.00534 39.934 7.72355 39.4336 7.45327 38.9275C1.38058 27.833 -1.0577 16.5872 0.420222 9.29756L0.535235 8.79142L0.569739 8.77396L0.615744 8.55871C0.891776 7.66277 1.37483 6.85992 2.05341 6.23741L2.25468 6.08615C2.24318 6.08033 2.24318 6.08034 2.24318 6.07452L2.36969 5.98725L2.47321 5.9058L2.60547 5.81853L7.35551 2.44422L7.30376 2.38023L7.39577 2.40932L9.39124 0.98978C9.62127 0.8327 9.85705 0.687255 10.0986 0.565082C10.8289 0.198562 11.611 0.0182104 12.3873 0.000758159Z"
                  fill="black"
                />
              </svg>
              <div>
                <h1 className="font-popins text-[22px] font-normal">
                  More Information Call Us
                </h1>
                <h1 className="text-[#143A6D] font-popins text-[26px] font-semibold">
                  123-456-7890
                </h1>
              </div>
            </div>

            {/* Booking Button */}
            <button
              className="bg-[#02224D] font-popins text-[32px] font-normal w-[232px] h-[68px] rounded-full text-white mx-auto mt-4 md:mt-0"
              onClick={captureScreenshot}
            >
              Book Now
            </button>

            {/* Website Info */}
            <div className="flex items-center gap-x-[19px]">
              <div>
                <p className="font-normal text-[22px]">
                  www.reallygreatsite.com
                </p>
                <h1 className="uppercase font-semibold text-[26px] font-popins text-[#143A6D]">
                  VISIT OUR WEBSITE
                </h1>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="67"
                height="67"
                viewBox="0 0 67 67"
                fill="none"
              >
                <path
                  d="M35.8963 2.29688C54.7556 20.8906 54.7556 45.8542 35.8963 64.4427M9.05771 53.1042C23.5629 42.7552 43.0265 42.7552 57.5317 53.1042M31.2348 2C12.2452 20.7188 12.2452 45.8542 31.2348 64.5781M33.2973 2.03125V64.625M64.5942 33.3281H2.00042M9.05771 14.4948C23.5629 24.8438 43.0265 24.8438 57.5317 14.4948M33.1359 2.03125C15.8494 2.11979 1.91188 16.2031 2.00042 33.4844C2.08896 50.7708 16.1723 64.7136 33.4588 64.625C50.74 64.5365 64.6827 50.4531 64.5942 33.1667C64.5057 16.0052 50.615 2.11979 33.4588 2.03125H33.1359Z"
                  stroke="black"
                  strokeWidth="3.21038"
                />
              </svg>
            </div>
          </div>
        </section>

        {/* Shape Left and Right */}
        <svg
          className="absolute top-[78px] right-[55px] hidden md:block"
          xmlns="http://www.w3.org/2000/svg"
          width="94"
          height="768"
          viewBox="0 0 94 768"
          fill="none"
        >
          <path d="M0 1H93V767.5" stroke="white" strokeWidth="2" />
        </svg>

        <svg
          className="absolute top-[78px] left-[55px] hidden md:block"
          xmlns="http://www.w3.org/2000/svg"
          width="96"
          height="766"
          viewBox="0 0 96 766"
          fill="none"
        >
          <path d="M96 1H1V765.5" stroke="white" strokeWidth="2" />
        </svg>
      </div>
    </div>
  );
};

export default TemplateSix;
