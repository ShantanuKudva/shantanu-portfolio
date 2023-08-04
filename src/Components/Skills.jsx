import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { motion, useAnimation } from "framer-motion";
import img1 from "../assets/bonfire.gif";
import act1 from "../assets/act1-text.png";
import aboutMe from "../assets/about-me.svg";
import skills1 from "../assets/skills1.svg";
import skills2 from "../assets/skills2.svg";
import { NavLink, Link } from "react-router-dom";
import inventory from "../assets/inventory.png";

function Skills() {
  const openResumeInNewTab = () => {
    window.open(
      "https://drive.google.com/file/d/1hGoSWJQEkSBqgjOHpVUoquwF6j9R4yYR/view?usp=sharing",
      "_blank"
    );
  };
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 1 }}
      >
        <div
          className="w-full h-screen bg-center bg-no-repeat grid overflow-hidden"
          style={{
            backgroundImage: `url(${img1})`,
            backgroundSize: "100% 100%",
          }}
        >
          <motion.div
            className="slide-in"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: [0.22, 1, 0.36, 1], delay: 2 }}
          >
            <div className="flex gap-2 justify-between"></div>
            <div className="grid align-middle justify-center mt-10">
              <img src={inventory} className="w-48" />
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 2 }}
              style={{ alignItems: "flex-start" }}
              className="flex mt-10"
            >
              <div className="grid w-40">
                <Link
                  to="/"
                  className="inline-block font-vt323 bg-gradient-to-br text-xl text-black m-4"
                >
                  <div className="bg-white p-2 border-2 border-black">
                    Go back Home
                  </div>
                </Link>

                <Link
                  to="/about-me"
                  className="inline-block font-vt323 bg-gradient-to-br text-xl text-black m-4"
                >
                  <div className="bg-white p-2 border-2 border-black">
                    About me
                  </div>
                </Link>
              </div>

              <div className=" m-auto grid grid-flow-col gap-2 font-vt323 p-3  border-4 border-dashed text-center  text-white backdrop-blur-sm">
                <img src={skills2} className="h-96" />
                <img src={skills1} className="h-96" />
              </div>

              <div className="grid w-40">
                <Link
                  to="/projects"
                  className="inline-block font-vt323 bg-gradient-to-br text-xl text-black m-4"
                >
                  <div className="bg-white p-2 border-2 border-black">
                    Go to Chapter: <br /> Quests Completed
                  </div>
                </Link>

                <Link
                  onClick={openResumeInNewTab}
                  className="inline-block font-vt323 m-5 bg-gradient-to-br text-xl text-black"
                >
                  <div className="bg-white p-2 border-2 border-black ">
                    Go to -&gt;
                    <br />
                    Resume
                  </div>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}

export default Skills;

// <div className="grid gap-2 vt-323 border-r-4">
// <h1 className="text-2xl">
//   Player: <span className="text-3xl">SHANTANU</span>
// </h1>
// <img src={me} className="w-48 m-auto" />
// <div className="flex justify-around text-xl">
//   <div>xp: 100</div>
//   <div>coins: 0</div>
// </div>
// </div>

// <div className="col-span-2">
// <div className="font-vt323">
//   <h1 className="text-xl">Strengths:</h1>
//   <p>lorem</p>
// </div>

// <div className="font-vt323">
//   <h1 className="text-xl">Weakness:</h1>
//   <p>lorem</p>
// </div>
// </div>
