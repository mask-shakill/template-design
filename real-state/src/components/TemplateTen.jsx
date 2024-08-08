import React, { useState } from "react";
import logoImg from "../../public/log.png";
import { Phone } from "lucide-react";

const TemplateTen = () => {
  const [companyName, setCompanyName] = useState("");
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  const [bookingText, setBookingText] = useState("");

  const handleCompanyNameChange = (e) => setCompanyName(e.target.value);
  const handleHeadingChange = (e) => setHeading(e.target.value);
  const handleSubHeadingChange = (e) => setSubHeading(e.target.value);
  const handleBookingTextChange = (e) => setBookingText(e.target.value);

  const getCompanyNameSizeClass = () => {
    if (companyName.length > 22) return "text-[11px]";
    if (companyName.length > 18) return "text-[13px]";
    if (companyName.length > 13) return "text-[14px]";
    if (companyName.length > 8) return "text-sm";
    if (companyName.length > 5) return "text-[22px]";
    return "text-sm";
  };

  const getHeadingSizeClass = () => {
    if (heading.length > 48) return "text-xs";
    if (heading.length > 36) return "text-sm";
    if (heading.length > 24) return "text-base";
    if (heading.length > 12) return "text-sm";
    return "text-lg ";
  };

  const getSubHeadingSizeClass = () => {
    if (subHeading.length > 80) return "text-xs";
    if (subHeading.length > 60) return "text-sm";
    if (subHeading.length > 40) return "text-base";
    if (subHeading.length > 20) return "text-lg";
    return "text-[14px] ";
  };

  const getBookingTextSizeClass = () => {
    if (bookingText.length > 12) return "text-[14px] py-[10px]";
    if (bookingText.length > 8) return "text-[15px] py-[9px]";
    if (bookingText.length > 4) return "text-base";
    return "text-lg";
  };

  return (
    <div>
      {/* Input fields */}
      <input
        type="text"
        placeholder="Company Name"
        maxLength="28"
        value={companyName}
        onChange={handleCompanyNameChange}
        className="font-poppins"
      />
      <input
        type="text"
        placeholder="Heading"
        maxLength="60"
        value={heading}
        onChange={handleHeadingChange}
        className="font-poppins"
      />
      <input
        type="text"
        placeholder="Sub Heading"
        maxLength="100"
        value={subHeading}
        onChange={handleSubHeadingChange}
        className="font-poppins"
      />
      <input
        type="text"
        placeholder="Booking Text"
        maxLength="16"
        value={bookingText}
        onChange={handleBookingTextChange}
        className="font-poppins"
      />

      <div className="h-[400px] w-[400px] relative">
        <div className="w-[269px] h-full bg-blue-500 absolute top-0 right-0 overflow-hidden">
          <img
            className="object-cover"
            src="https://img.freepik.com/free-photo/cute-tourist-taking-photos_23-2147641172.jpg?ga=GA1.1.1242648836.1702358523&semt=ais_hybrid"
            alt=""
          />
        </div>
        <svg
          className="absolute"
          width="374"
          height="400"
          viewBox="0 0 374 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M204.319 89.6296C200.082 31.1111 156.94 7.40741 144.421 0H-6V400H374C360.969 382.496 337.85 364.991 330.391 359.344L330.28 359.259C314.872 347.593 291.479 335.211 281.359 329.63C258.825 317.201 246.544 305.19 241.684 300.556C218.379 278.333 209.267 255.287 206.053 246.296C195.46 216.667 198.156 188.148 200.275 169.259C205.287 124.567 205.097 100.37 204.319 89.6296Z"
            fill="#967236"
          />
          <path
            d="M191.887 90.1382C186.803 31.3364 154.293 5.22273 137.473 0H-6V400H354C343.607 383.336 324.314 365.591 315.967 358.525C305.423 348.793 286.594 335.55 276.615 330.138C250.444 315.945 238.265 306.273 232.933 302.304C205.444 281.843 195.043 257.696 191.51 248.848C179.912 219.797 183.289 180.215 186.427 164.055C194.561 123.65 192.588 98.2488 191.887 90.1382Z"
            fill="#C6AA77"
          />
          <path
            d="M180.893 90.1383C176.092 31.3364 145.388 5.22273 129.502 0H-6V400H334C324.184 383.336 305.963 365.591 298.079 358.525C288.121 348.793 270.339 335.55 260.914 330.138C236.197 315.945 224.695 306.273 219.659 302.304C193.697 281.843 183.874 257.696 180.538 248.848C169.584 219.797 172.773 180.215 175.736 164.055C183.418 123.65 181.556 98.2489 180.893 90.1383Z"
            fill="#121212"
          />
        </svg>

        {/* Content */}
        <div className="left-4 absolute top-4 ">
          <div className="flex items-center  gap-x-2">
            <img className="w-10 h-8 " src={logoImg} alt="Company Logo" />
            <div
              className={`w-20 h-12 break-words   ${getCompanyNameSizeClass()}`}
            >
              <p className="font-poppins text-white uppercase font-semibold">
                {companyName || "Your company"}
              </p>
            </div>
          </div>

          {/* Heading */}
          <div
            className={`w-36 h-20 mb-3  break-words mt-3 ${getHeadingSizeClass()} whitespace-pre-wrap`}
          >
            <p className="font-poppins font-medium text-white">
              {heading || "Transform Your Future World Today"}
            </p>
          </div>

          {/* Sub Heading */}
          <div
            className={`w-36 h-32 mt-3 font-Be_Vietnam font-normal break-words  ${getSubHeadingSizeClass()} whitespace-pre-wrap`}
          >
            <p className="text-white">
              {subHeading ||
                "In the digital world, every challenge is an opportunity and every idea can become reality. to take care and the"}
            </p>
          </div>

          {/* Booking Button */}
          <button
            className={`bg-[#C6AA77] uppercase px-5 mb-3 py-1 rounded-full font-bold mt-5 ${getBookingTextSizeClass()}`}
          >
            {bookingText || "book now"}
          </button>

          {/* Information */}
          <div className="flex items-center gap-2 ">
            <Phone className="text-[#C6AA77]" />
            <p className="text-[20px] text-white font-normal">+123-456-7890</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateTen;
