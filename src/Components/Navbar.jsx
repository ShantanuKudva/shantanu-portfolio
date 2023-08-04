import React from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import s from "../assets/s.lottie.json";

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="nav-items-responsive">
          <Link
            to="/"
            className="text-black text-2xl ml-10 font-bold grid grid-flow-col"
          >
            <Lottie animationData={s} className="w-24" />
          </Link>

          <li className="mx-10 ">
            <NavLink to="/about-me" className="text-black  hover:text-gray-500">
              About Me
            </NavLink>
          </li>
          <li className="mx-10">
            <NavLink to="/projects" className="text-black hover:text-gray-500">
              Projects
            </NavLink>
          </li>
          <li className="mx-10">
            <NavLink to="/resume" className="text-black hover:text-gray-500">
              Resume
            </NavLink>
          </li>
          <li className="mx-10">
            <NavLink to="/skills" className="text-black hover:text-gray-500">
              Skills
            </NavLink>
          </li>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
