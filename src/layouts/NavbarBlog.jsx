import { useState } from "react";
import { close, logo, menu } from "../assets";
import styles from "../style";
import { Link } from "react-router-dom";

export const NavbarBlog = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div
      className={`${styles.paddingX} ${styles.flexCenter} fixed z-10 mb-24 bgG w-full`}
    >
      <div className={`${styles.boxWidth}`}>
        <nav className="mx-2 px-2 mb-4 w-full flex py-6 justify-center items-center navbar">
          <img src={logo} className="w-[44px] h-[42px]" alt="intmaxLogo"></img>

          <ul className="list-none sm:flex hidden justify-end items-center flex-1 ">
            <Link
              className="font-poppins font-normal cursor-pointer text-[16px] text-white ml-10 p-10"
              to="/home"
            >
              Home
            </Link>
            <Link
              className="font-poppins font-normal cursor-pointer text-[16px] text-white ml-10 "
              to="/blog"
            >
              Blog
            </Link>
          </ul>

          <div className="sm:hidden flex flex-1 justify-end items-center">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain"
              onClick={() => setToggle((prev) => !prev)}
            ></img>

            <div
              className={`${
                toggle ? "flex" : "hidden"
              } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
            >
              <ul className="list-none flex flex-col justify-end items-center flex-1">
                <Link
                  className="font-poppins font-normal cursor-pointer text-[16px] text-white ml-10 "
                  to="/home"
                >
                  Home
                </Link>
                
                <Link
                  className="font-poppins font-normal cursor-pointer text-[16px] text-white m-4"
                  to="/blog"
                >
                  Blog
                </Link>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};
