import React, { useState } from "react";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { MdChevronRight } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div id="navbar" className="flex justify-between">
      <div className="flex gap-8 justify-between items-center w-full">
        <h2 className="text-3xl sm:text-4xl mr-4 font-semibold text-[#35323d]">
          <a href="/">Shortly</a>
        </h2>

        <div className="hidden sm:flex items-center justify-between w-full">
          <div className="flex items-center gap-6">
            <a
              className="text-[16px] hover:text-[#35323d] font-medium text-gray-500"
              href="#"
            >
              Features
            </a>
            <a
              className="text-[16px] hover:text-[#35323d] font-medium text-gray-500"
              href="#"
            >
              Pricing
            </a>
            <a
              className="text-[16px] hover:text-[#35323d] font-medium text-gray-500"
              href="#"
            >
              Resources
            </a>
          </div>
          <div className="flex gap-10 items-center">
            <div>
              <a
                className="text-[16px] hover:text-[#35323d] font-medium text-gray-500"
                href="#"
              >
                Log in
              </a>
            </div>
            <div>
              <button
                className="bg-[#2ccfce] font-semibold text-white px-5 py-2 rounded-full hover:bg-[#2ccfce]/50"
                type="button"
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-2xl border border-black/50 px-3 py-1 rounded sm:hidden block"
        >
          <RxHamburgerMenu />
        </div>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              className="absolute w-full left-0 top-0 mt-5 px-5"
            >
              <div className="flex flex-col rounded-lg shadow-lg  bg-gray-200 text-black justify-between sm:hidden">
                <div className="flex flex-col">
                  <div className="px-4 text-xl text-gray-500 items-center flex justify-between py-4">
                    <h2 className="text-3xl sm:text-4xl mr-4 font-semibold text-[#35323d]">
                      <a href="/">Shortly</a>
                    </h2>
                    <div
                      onClick={() => setOpen(false)}
                      className="focus:text-black hover:text-black/70"
                    >
                      <RxCross2 />
                    </div>
                  </div>
                  <div className="px-4 text-[#3f4b66] border-dashed border-b-[1px] border-black/20 flex justify-between py-5 bg-gray-300/20 ">
                    <a className="text-sm font-semibold px-4" href="">
                      Features
                    </a>
                    <MdChevronRight />
                  </div>
                  <div className="px-4 text-[#3f4b66] border-dashed border-b-[1px] border-black/20 flex justify-between py-5 bg-gray-300/20 ">
                    <a className="text-sm font-semibold px-4" href="">
                      Pricing
                    </a>
                    <MdChevronRight />
                  </div>
                  <div className="px-4 text-[#3f4b66] border-dashed border-b-[1px] border-black/20 flex justify-between py-5 bg-gray-300/20 ">
                    <a className="text-sm font-semibold px-4" href="">
                      Resources
                    </a>
                    <MdChevronRight />
                  </div>
                </div>
                <div className="flex flex-col px-2 text-center justify-center w-full py-2">
                  <button class="px-4 py-2 w-full rounded-full space-x-2 bg-primary border-white/30  text-black/60 hover:bg-white/20 focus:bg-white/20 active:bg-white/25">
                    <p className="pb-0.5 font-semibold">Log in</p>
                  </button>
                  <button
                    className="bg-[#2ccfce] w-full font-semibold text-white px-5 py-2 rounded hover:bg-[#2ccfce]/50"
                    type="button"
                  >
                    Sign up
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Navbar;
