import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "./Button";
import Nav from "./Nav";
import useUser from "../../hooks/useUser";
import { useAuthContext } from "../../context/AuthContext";

const menu = {
  open: {
    width: "300px",
    height: "460px",
    borderRadius: "25px",
    top: "-25px",
    right: "-200px",
    transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    width: "0px",
    height: "0px",
    top: "0px",
    right: "0px",
    borderRadius: "25px",
    transition: {
      duration: 0.75,
      delay: 0.35,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export default function NavMenu() {
  const [isActive, setIsActive] = useState(false);
  const { logOutQuery } = useUser();
  const { ...contextData } = useAuthContext();
  const { user } = contextData;
  const userData = user ?? null;

  const logout = () => {
    logOutQuery.mutate();
  };

  return (
    <>
      <Link
        className="fixed top-[10px] left-[10px] md:w-28 w-24 z-50 md:right-[20px] md:top-[20px] m-[10px]"
        to="/"
      >
        <img
          className="object-cover object-center"
          src="/logo-04.png"
          alt="logo"
        />
      </Link>
      {userData && (
        <>
          <button
            type="button"
            onClick={logout}
            className="text-sm flex justify-center bg-red-600 text-gray-100 p-2  rounded-full tracking-wide shadow-lg cursor-pointer transition ease-in duration-300 fixed top-[10px] left-[10rem] md:w-20 w-18 z-50 md:right-[20px] md:top-[20px] m-[10px]"
          >
            Logout
          </button>
          <Link
            to="/admin_dashboard"
            className="whitespace-nowrap text-sm flex justify-center bg-red-600 text-gray-100 p-2  rounded-full tracking-wide shadow-lg cursor-pointer transition ease-in duration-300 fixed top-[10px] left-[15rem] md:left-[17rem] md:w-24 w-24 z-50 md:right-[20px] md:top-[20px] m-[10px]"
          >
            Creat Album
          </Link>
        </>
      )}

      <div className="fixed md:right-[10px] md:top-[20px] right-[8px] top-[8px] z-50 md:m-[10px]">
        <motion.div
          className="w-[480px] bg-white"
          variants={menu}
          animate={isActive ? "open" : "closed"}
          initial="closed"
        >
          <AnimatePresence>
            {isActive && (
              <Nav
                toggleMenu={() => {
                  setIsActive(!isActive);
                }}
              />
            )}
          </AnimatePresence>
        </motion.div>
        <Button
          isActive={isActive}
          toggleMenu={() => {
            setIsActive(!isActive);
          }}
        />
      </div>
    </>
  );
}
