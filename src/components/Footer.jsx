import React from "react";

const Footer = () => {
  return (
    <div className="py-10">
      <div className="flex flex-col sm:flex-row sm:text-left text-center">
        <div className="flex-[0.9]">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">
            <a href="/">Shortly</a>
          </h2>
        </div>
        <div className="flex gap-20 flex-[0.1] mt-14 sm:mt-0 flex-col sm:flex-row">
          <div>
            <h5 className="text-white font-semibold text-lg">Features</h5>
            <div className="text-white/60 mt-4 flex flex-col gap-3">
              <a className="hover:text-[#2ccfce]" href="#">
                Link Shortening
              </a>
              <a className="hover:text-[#2ccfce]" href="#">
                Branded Links
              </a>
              <a className="hover:text-[#2ccfce]" href="#">
                Analytics
              </a>
            </div>
          </div>
          <div>
            <h5 className="text-white font-semibold text-lg">Resources</h5>
            <div className="text-white/60 mt-4 flex flex-col gap-3">
              <a className="hover:text-[#2ccfce]" href="#">
                Blog
              </a>
              <a className="hover:text-[#2ccfce]" href="#">
                Developers
              </a>
              <a className="hover:text-[#2ccfce]" href="#">
                Support
              </a>
            </div>
          </div>
          <div>
            <h5 className="text-white font-semibold text-lg">Company</h5>
            <div className="text-white/60 mt-4 flex flex-col gap-3">
              <a className="hover:text-[#2ccfce]" href="#">
                About
              </a>
              <a className="hover:text-[#2ccfce]" href="#">
                Our Team
              </a>
              <a className="hover:text-[#2ccfce]" href="#">
                Careers
              </a>
              <a className="hover:text-[#2ccfce]" href="#">
                Contact
              </a>
            </div>
          </div>
          <div className="sm:w-[14vw]  flex justify-around">
            <div className=" cursor-pointer">
              <img
                className=" h-10 w-10 sm:h-auto sm:w-auto"
                src="/images/icon-facebook.svg"
                alt="icon"
              />
            </div>
            <div className=" cursor-pointer">
              <img
                className="pointer-cursor h-10 w-10 sm:h-auto sm:w-auto"
                src="/images/icon-twitter.svg"
                alt="icon"
              />
            </div>
            <div className=" cursor-pointer">
              <img
                className=" pointer-cursor h-10 w-10 sm:h-auto sm:w-auto"
                src="/images/icon-pinterest.svg"
                alt="icon"
              />
            </div>
            <div className=" cursor-pointer">
              <img
                className="pointer-cursor h-10 w-10 sm:h-auto sm:w-auto"
                src="/images/icon-instagram.svg"
                alt="icon"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
