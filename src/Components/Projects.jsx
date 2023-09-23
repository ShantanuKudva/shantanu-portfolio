import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import img1 from "../assets/bg2.gif";
import breathe from "../assets/breathe.gif";
import act2 from "../assets/act2.png";
import questsCompleted from "../assets/questsCompleted.png";
import p1 from "../assets/p1.svg";

function Projects() {
  const openResumeInNewTab = () => {
    window.open(
      "https://drive.google.com/file/d/1IiXy5QCdvu-1YkB2mL1cw1wMN2XiODRf/view?usp=sharing",
      "_blank"
    );
  };
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <div
          className="w-full h-screen bg-center bg-no-repeat grid relative  "
          style={{
            backgroundImage: `url(${img1})`,
            backgroundSize: "100% 100%",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="grid align-middle justify-center mt-10">
            <motion.div
              className="slide-in"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 2 }}
            >
              <img src={act2} className="w-32" />
              <img src={questsCompleted} className="w-96" />
            </motion.div>
          </div>

          {/* flex gap-2 justify-between mt-[-15rem] */}

          <div className="flex justify-between  ">
            <div className="grid h-40">
              <Link
                to="/about-me"
                className="inline-block font-vt323 m-5 bg-gradient-to-br text-xl text-black w-40"
              >
                <div className="bg-white p-2 border-2 border-black ">
                  About me
                </div>
              </Link>

              <Link
                to="/"
                className="inline-block font-vt323 m-5 bg-gradient-to-br text-xl text-black w-40"
              >
                <div className="bg-white p-2 border-2 border-black ">Home</div>
              </Link>
            </div>

            {/* //main content */}

            <motion.div
              className="slide-in grid backdrop-blur-xl border-4 border-dashed border-black mb-4 font-vt323 relative p-5 overflow-y-scroll h-[30rem] w-[60%] gap-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 2.5 }}
            >
              <div className="mx-5 ">
                <div
                  className="flex justify-start gap-5"
                  style={{ alignItems: "center" }}
                >
                  <h1 className=" text-5xl">Gymsurf</h1>
                  <a
                    href="https://gym-surf.vercel.app/"
                    target="_blank"
                    className="font-vt323 text-3xl underline"
                  >
                    Link
                  </a>
                </div>

                <p className="text-xl">
                  As someone passionate about fitness, I created GymSurf to
                  provide beginners like myself with a user-friendly and
                  comprehensive fitness solution. With GymSurf, you can access a
                  diverse library of workout programs tailored specifically for
                  beginners. The app offers step-by-step guidance, ensuring you
                  perform exercises correctly and minimize the risk of injury.
                  You'll find detailed workout instructions, GIF demonstrations
                  and also list of fitness YouTubers recommended by me
                </p>
              </div>

              <div className="mx-5 ">
                <div
                  className="flex justify-start gap-5"
                  style={{ alignItems: "center" }}
                >
                  <h1 className=" text-5xl">Heart Disease Prediction WebApp</h1>
                  <a
                    href="https://shantanukudva-heart-disease-heart-disease-prediction-app-45d08q.streamlit.app/"
                    target="_blank"
                    className="font-vt323 text-3xl underline"
                  >
                    Link
                  </a>
                </div>

                <p className="text-xl">
                  A simple AI model to predict the health of your heart by
                  taking into consideration some of the ECG parameters.
                  Deployment of the project is done with the help of Streamlit
                  and Anaconda
                </p>
              </div>

              <div className="mx-5 ">
                <div
                  className="flex justify-start gap-2"
                  style={{ alignItems: "center" }}
                >
                  <h1 className=" text-5xl">Expense Tracker App</h1>
                  <a
                    href="https://expense-tracker-shantanu.netlify.app/"
                    target="_blank"
                    className="font-vt323 text-3xl underline"
                  >
                    Link
                  </a>
                </div>

                <p className="text-xl">
                  A basic Expense Tracking App without the usage of any Backend,
                  just to try out the usage of hooks and state management
                </p>
              </div>

              <div className="mx-5 ">
                <div
                  className="flex justify-start gap-2"
                  style={{ alignItems: "center" }}
                >
                  <h1 className=" text-5xl">Password Generator</h1>
                  <a
                    href="https://password-shantanu.pages.dev/"
                    target="_blank"
                    className="font-vt323 text-3xl underline"
                  >
                    Link
                  </a>
                </div>

                <p className="text-xl">
                  A random Password generating website with lots of
                  customizations with the password
                </p>
              </div>

              <div className="mx-5 ">
                <div
                  className="flex justify-start gap-2"
                  style={{ alignItems: "center" }}
                >
                  <h1 className=" text-5xl">
                    For more projects, go to my{" "}
                    <a
                      href="https://github.com/ShantanuKudva/ShantanuKudva"
                      target="_blank"
                      className="font-vt323 text-3xl underline"
                    >
                      Github
                    </a>{" "}
                    profile
                  </h1>
                </div>
              </div>
            </motion.div>

            <div className="grid h-40">
              <Link
                to="/skills"
                className="inline-block font-vt323 m-5 bg-gradient-to-br text-xl text-black"
              >
                <div className="bg-white p-2 border-2 border-black ">
                  Inventory
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
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Projects;
