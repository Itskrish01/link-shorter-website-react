import React from "react";

const Header = () => {
  return (
    <div class="flex flex-col-reverse sm:flex-row mt-60 sm:mt-10 mb-20 sm:text-left text-center md:flex-col-reverse lg:flex-row h-[50vh] sm:h-[60vh] gap-8 sm:gap-20 items-center">
      <div class="w-full sm:w-1/2">
        <h1 class="text-[#35323d] text-[3rem] sm:text-[4rem] font-black leading-[60px] sm:leading-[70px]">
          More than just shorter links
        </h1>
        <p class="text-gray-500/60 mt-3 text-xl">
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <div class="mt-6">
          <button
            class="bg-[#2ccfce] font-semibold text-xl text-white px-7 py-3 rounded-full hover:bg-[#2ccfce]/50"
            type="button"
          >
            Get started
          </button>
        </div>
      </div>
      <div class="w-full sm:mt-0 top-5 sm:w-1/2 relative -z-10 flex justify-center">
        <img
          class=""
          src="/images/illustration-working.svg"
          alt="image"
        />
      </div>
    </div>
  );
};

export default Header;
