import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { motion, useAnimation } from "framer-motion";
import img1 from "../assets/og11.png";
import runner from "../assets/running.gif";
import act1 from "../assets/act1-text.png";
import aboutMe from "../assets/about-me.svg";
import card1 from "../assets/shantanu-card.svg";
import card2 from "../assets/shantanu-card-2.svg";

import { NavLink, Link } from "react-router-dom";

function AboutMe() {
  const openResumeInNewTab = () => {
    window.open(
      "https://drive.google.com/file/d/1hGoSWJQEkSBqgjOHpVUoquwF6j9R4yYR/view?usp=sharing",
      "_blank"
    );
  };

  const controls = useAnimation();
  const [reachedEnd, setReachedEnd] = useState(false);
  const [delayComplete, setDelayComplete] = useState(false);

  useEffect(() => {
    // Add a 2-second delay before starting the animation
    const delayTimeout = setTimeout(() => {
      setDelayComplete(true);
    }, 500);

    return () => clearTimeout(delayTimeout); // Cleanup the timeout on unmount
  }, []);

  useEffect(() => {
    if (delayComplete) {
      const maxPosX = window.innerWidth - 48; // Assuming the width of the runner image is 48px

      const handleAnimationComplete = () => {
        setReachedEnd(true);
      };

      controls
        .start({ x: maxPosX, transition: { duration: 5, ease: "linear" } })
        .then(handleAnimationComplete);
    }
  }, [controls, delayComplete]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <div
          className="w-full h-screen bg-center bg-no-repeat grid overflow-hidden"
          style={{
            backgroundImage: `url(${img1})`,
            backgroundSize: "100% 100%",
          }}
        >
          <motion.div animate={controls}>
            <img src={runner} className="absolute bottom-[-0.8rem] w-48 mt" />
          </motion.div>
          {reachedEnd && (
            <motion.div
              className="slide-in"
              initial={{ translateY: "15rem", opacity: 0 }}
              animate={{ translateY: 0, opacity: 1 }}
              exit={{ translateY: 0, opacity: 0 }}
              transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex gap-2 justify-between mt-[-2rem]">
                <Link
                  onClick={openResumeInNewTab}
                  className="inline-block font-vt323 m-5 bg-gradient-to-br text-xl text-black"
                >
                  <div className="bg-white p-2 border-2 border-black ">
                    Resume
                  </div>
                </Link>

                <Link
                  to="/skills"
                  className="inline-block font-vt323 m-5 bg-gradient-to-br text-xl text-black"
                >
                  <div className="bg-white p-2 border-2 border-black ">
                    Inventory
                  </div>
                </Link>
              </div>
              <div className="grid align-middle justify-center mt-[-3rem]">
                <img src={act1} className="w-32" />
                <motion.div
                  className="slide-in"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 2 }}
                >
                  <img src={aboutMe} className="" />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 1 }}
                style={{ alignItems: "flex-start" }}
                className="flex "
              >
                <Link
                  to="/"
                  className="inline-block font-vt323 bg-gradient-to-br text-xl text-black m-4"
                >
                  <div className="bg-white p-2 border-2 border-black">
                    Go back Home
                  </div>
                </Link>
                <div className=" m-auto grid grid-flow-col gap-2 font-vt323 p-3  border-4 border-dashed text-center  text-white backdrop-blur-sm">
                  <img src={card1} className="h-96" />
                  <img src={card2} className="h-96" />
                </div>

                <Link
                  to="/projects"
                  className="inline-block font-vt323 bg-gradient-to-br text-xl text-black m-4"
                >
                  <div className="bg-white p-2 border-2 border-black w-48">
                    Next Chapter: Quests Completed
                  </div>
                </Link>
              </motion.div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </>
  );
}

export default AboutMe;

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
