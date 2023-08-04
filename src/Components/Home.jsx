import React from "react";
import img1 from "../assets/landing-page.png";
import S from "../assets/s.lottie.json";
import text from "../assets/text-1.svg";
import text2 from "../assets/text-2.svg";
import num from "../assets/number.svg";
import text3 from "../assets/text-3.svg";
import text4 from "../assets/text-4.svg";
import { NavLink } from "react-router-dom";
import Animate from "./Animate";

import { motion } from "framer-motion";

function Home() {
  const openResumeInNewTab = () => {
    window.open(
      "https://drive.google.com/file/d/1hGoSWJQEkSBqgjOHpVUoquwF6j9R4yYR/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <motion.div
      className=" w-full h-screen bg-center bg-no-repeat fixed"
      style={{ backgroundImage: `url(${img1})`, backgroundSize: "100% 100%" }}
      initial={{ opacity: 0, translateY: "10rem" }}
      animate={{ opacity: 1, translateY: 0 }}
      exit={{ opacity: 0, translateY: "-10rem" }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex justify-between mx-10">
        <img src={num} />
        <div className="grid mt-5">
          <img src={text3} />
          <img src={text4} />
        </div>
      </div>

      <div className="grid justify-center mt-20">
        <img src={text} className="w-80 " />
        <img src={text2} className="" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="grid place-items-center mt-10">
          <div className="p-10 w-80 border-4 border-dashed text-center backdrop-blur-sm text-white">
            <h1 className="font-vt323 text-3xl">Select to view</h1>
            <div className="grid gap-2 mt-10 text-white font-vt323 text-3xl">
              <NavLink
                to="/about-me"
                className=" hover:text-gray-300 inline-block nav-link"
              >
                About Me
              </NavLink>
              <NavLink
                to="/projects"
                className="hover:text-gray-300 inline-block nav-link"
              >
                Quests Completed
              </NavLink>
              <NavLink
                onClick={openResumeInNewTab}
                className="hover:text-gray-300 inline-block nav-link"
              >
                Resume
              </NavLink>

              <NavLink
                to="/skills"
                className="hover:text-gray-300 inline-block nav-link"
              >
                Inventory
              </NavLink>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Home;
