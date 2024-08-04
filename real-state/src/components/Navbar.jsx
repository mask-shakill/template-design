import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-gray-800 p-4 text-white w-full px-[180px]">
      <div className="text-[40px] font-popins font-bold">Ads Pillar</div>

      <div className="flex space-x-10 font-serif text-[30px] font-semibold">
        <a href="#" className="hover:text-gray-400">
          Real-State
        </a>
        {/* <a href="#" className="hover:text-gray-400">
          Social Media
        </a> */}
        <a
          href="https://shaharirar-kobir-shakil.vercel.app/"
          target="_blank"
          className="hover:text-gray-400"
        >
          {`Shakil (Contact)`}{" "}
        </a>
      </div>
    </div>
  );
};

export default Navbar;
