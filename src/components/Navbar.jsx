import React from "react";
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const linkClass = ({ isActive }) =>
    `text-decoration-none fs-5 ${
      isActive ? "text-danger fw-bold" : "text-black"
    }`;

  return (
    <>
      <div className=" d-flex flex-row  align-items-center  justify-content-between px-3 py-2 gap-2">
        <img
          src="images/NIKELOGO.jpeg"
          alt="Nike Logo"
          style={{ height: "35px", width: "80px" }}
        />

        <button className="px-3 py-1 border-0 rounded bg-danger text-white">
          Log In
        </button>
      </div>
      <div
        className="menuBtn d-flex border-bottom border-2 py-2 border-black flex-column align-items-center"
        onClick={() => setOpenNav(!openNav)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide d-md-none lucide-menu-icon lucide-menu"
        >
          <path d="M4 5h16" />
          <path d="M4 12h16" />
          <path d="M4 19h16" />
        </svg>
        <div className={`d-md-block ${openNav ? "d-block" : "d-none"}`}>
          <div className="d-flex gap-3 ">
            <NavLink to="/" className={linkClass}>
              Menu
            </NavLink>
            <NavLink to="/about" className={linkClass}>
              About
            </NavLink>
            <NavLink to="/location" className={linkClass}>
              Location
            </NavLink>
            <NavLink to="/contact" className={linkClass}>
              Contact
            </NavLink>
          </div>
        </div>
      </div>

      <Outlet />
    </>
  );
};

export default Navbar;
