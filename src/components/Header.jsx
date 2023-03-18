import React from "react";

const Header = () => {
  return (
    <div className="flex mt-60 sm:mt-10 mb-20 sm:text-left text-center flex-col-reverse sm:flex-row h-[50vh] sm:h-[60vh] gap-8 sm:gap-20 items-center">
      <div className="w-full sm:w-1/2">
        <h1 className="text-[#35323d] text-[3rem] sm:text-[4rem] font-black leading-[60px] sm:leading-[70px]">
          More than just shorter links
        </h1>
        <p className="text-gray-500/60 mt-3 text-xl">
          Build your brand's reognition and get detailed insights on how your
          links are performing.
        </p>
        <div className="mt-6">
          <button
            className="bg-[#2ccfce] font-semibold text-xl text-white px-7 py-3 rounded-full hover:bg-[#2ccfce]/50"
            type="button"
          >
            Get started
          </button>
        </div>
      </div>
      <div>
        <img src="/images/illustration-working.svg" alt="image" />
      </div>
    </div>
  );
};

export default Header;
