import React from "react";

const Navbar = () => {
  return (
    <div className="bg-black font-russo">
      <nav className="flex justify-between m-auto font-russo">
        <div className="logo size-25 m-5">
          <img src="./src/assets/logo-react.webp" alt="" />
        </div>
        <ul className="flex justify-center items-center text-white gap-15">
          <li className="">
            <a href="#">Menu</a>
          </li>
          <li className="">
            <a href="#">Location</a>
          </li>
          <li className="">
            <a href="#">About</a>
          </li>
          <li className="">
            <a href="#">Contact</a>
          </li>
        </ul>
        <div className="btn flex items-center mr-8">
          <button className="px-6 py-3 bg-red-500 text-white rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/50 focus:outline-none focus:ring-4 focus:ring-red-300 ">
            Login
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
