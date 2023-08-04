import React, { useState } from "react";
import Navbar from "./Navbar";

import { Outlet } from "react-router";

export default function Layout() {
  return (
    <>
      <div className="">
        <Outlet />
      </div>
    </>
  );
}
