import React from "react";
import { CgCamera } from "react-icons/cg";
import { FaAddressCard, FaMicrosoft } from "react-icons/fa";
import { BiRun } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import "./Header.css";
const Header = () => {
  return (
    <header children="header">
      <div className="logo">
        <h2>HF</h2>
      </div>
      <nav>
        <ul>
          <li>
            <CgCamera />
            <a>LIVE</a>
          </li>
          <li>
            <FaAddressCard />
            <a>MEMBERSHIPS</a>
          </li>
          <li>
            <BiRun />
            <a>PLANS</a>
          </li>
          <li>
            <FaMicrosoft />
            <a>MORE</a>
          </li>
        </ul>
      </nav>
      <div className="auth">
        <BsFillPersonFill />
        <a href="">login</a>
      </div>
    </header>
  );
};

export default Header;
