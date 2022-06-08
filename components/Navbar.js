import React from "react";
export const Navbar = () => {
  return (
    <div className="flex flex-row items-center  justify-between px-20 py-10">
      <div className="flex flex-row items-center">
        <h1 className="font-bold italic text-2xl text-white mr-10">BLU Payments</h1>
        <ul className="flex flex-row space-x-10">
          <li>
            <a
              href="https://www.linkedin.com/company/67710948/"
              className="text-gray-400 text-sm tracking-wide font-light"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://www.blucoin.financial/"
              className="text-gray-400 text-sm tracking-wide font-light"
            >
              Product
            </a>
          </li>
          <li>
            <a
              href="https://www.hummingpaymenttechnologies.com/team"
              className="text-gray-400 text-sm tracking-wide font-light"
            >
              Our Team
            </a>
          </li>
          <li>
            <a
              href="https://www.blucoin.financial/#/white-paper"
              className="text-gray-400 text-sm tracking-wide font-light"
            >
              How it works
            </a>
          </li>
        </ul>
      </div>
      <div className="flex flex-row space-x-10 items-center">
        <a href="https://www.blucoin.financial/#/contact-us" className="text-gray-400 text-sm tracking-wide font-light">
          Contact Us
        </a>
        <button className="bg-[#272A30] text-gray-300 px-8 text-sm py-2 rounded-md shadow-xl drop-shadow-2xl">
          Sign in
        </button>
      </div>
    </div>
  );
};
