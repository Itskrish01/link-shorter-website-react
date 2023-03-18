import React from "react";

const FooterBanner = () => {
  return (
    <div className="py-10 text-center">
      <h2 className="text-white text-[2rem] sm:text-[2rem] font-black leading-[60px] sm:leading-[70px]">
        Boosts your links today
      </h2>
      <button
        className="bg-[#2ccfce] font-semibold text-xl text-white px-7 py-3 rounded-full hover:bg-[#2ccfce]/50"
        type="button"
      >
        Get started
      </button>
    </div>
  );
};

export default FooterBanner;
