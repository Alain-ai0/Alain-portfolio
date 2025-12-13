import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles"; // Custom style definitions
import { navLinks } from "../constants"; // Navigation links data (array of objects)
import { logo, menu, close } from "../assets"; // Logo and menu icons

// Navbar component: handles both desktop and mobile navigation
const Navbar = () => {
  // State to track the nav link is currently active
  const [active, setActive] = useState("");
  // State to toggle mobile menu open/close
  const [toggle, setToggle] = useState(false);

  return (
    // Main navigation bar container
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo section (clicking resets active link and scrolls to top) */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0); // Scroll to top when logo is clicked
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Alain &nbsp;
            <span className="sm:block hidden"> | Ikuzwe</span>
          </p>
        </Link>

        {/* Desktop navigation menu (visible on sm+ screens) */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px]
              font-medium cursor-pointer`}
              onClick={() => setActive(link.title)} // Set active link on click
            >
              <a herf={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile navigation menu toggle (hamburger icon) */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu} // Switch between menu and close icons
            alt="menu"
            className="w-[28px] h-[28px]
            object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)} //Toggle mobile menu
          />

          {/* Mobile navigation menu (visible when toggle =true) */}
          <div
            className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle); // Close menu on selecting link
                    setActive(link.title); // Set active link
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
