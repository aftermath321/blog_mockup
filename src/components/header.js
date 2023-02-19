import { AiOutlineSearch } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import React, { useState } from "react";
import MobileMenu from "./mobileMenu";
import LoginScreen from "./loginScreen";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [login, setLogin] = useState(false);

  const menuHandle = () => {
    setMenu((prevStatus) => !prevStatus);
  };
  const loginHandle = () => {
    setLogin((prevStatus) => !prevStatus);
  };

  const showMenu = () => {
    if (menu) {
      return (
        <MobileMenu menuHandle={menuHandle} loginHandle={loginHandle} />
      );
    }
  };

  const showLogin = () => {
    if (login) {
      return <LoginScreen loginHandle={loginHandle}/>;
    }
  };

  return (
    <header id="header">
      {showMenu()}
      {showLogin()}

      {/* Medium and large screens */}
      <div className="topMenu">
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Browse</li>
            <li>Links</li>
            <li>Contact</li>
          </ul>
        </nav>
        <div className="sideMenu">
          <form>
            <input type="text" placeholder="Search..." />
            <AiOutlineSearch size={20} id="searchIcon" className="icon" />
          </form>
          <button id="signup">Sign Up</button>
          <button id="login" onClick={loginHandle}>
            Login
          </button>
        </div>
      </div>

      {/* Mobile */}
      <div className="burger">
        <GiHamburgerMenu size={40} id="burgerIcon" onClick={menuHandle} />
      </div>
    </header>
  );
};

export default Header;
