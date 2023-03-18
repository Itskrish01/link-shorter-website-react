import { AnimatePresence, motion } from "framer-motion";
import { useContext } from "react";
import { Toaster } from "react-hot-toast";
import "./App.css";
import Footer from "./components/Footer";
import FooterBanner from "./components/FooterBanner";
import Header from "./components/Header";
import InputLink from "./components/InputLink";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import ShortenLink from "./components/ShortenLink";
import { LinkContext } from "./LinkContext";

function App() {
  const { shortenLinks } = useContext(LinkContext);
  console.log(shortenLinks);
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="container-items">
        <Navbar />
        <Header />
      </div>
      <div className="bg-[#f0f1f6] pb-24">
        <div className="container-items relative">
          <InputLink />
          <div className="sm:mt-24 mt-36 flex flex-col gap-5">
            <AnimatePresence>
              {shortenLinks.length !== 0 &&
                shortenLinks.map((item) => (
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                  >
                    <ShortenLink
                      realLink={item.realLink}
                      shortenLink={item.shortenLink}
                    />
                  </motion.div>
                ))}
            </AnimatePresence>
          </div>

          <Section />
        </div>
      </div>
      <div id="footer-banner" className="">
        <div>
          <FooterBanner />
        </div>
        <div className="bg-[#232027]">
          <div className="container-items">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
