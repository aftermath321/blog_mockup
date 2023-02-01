import { AiOutlineSearch } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import {RxCross2} from "react-icons/rx"
import React, { useState } from "react";

const Header = () => {
  const [menu, setMenu] = useState(false)

  const menuHandle= () => {
    setMenu((prevStatus)=>!prevStatus)
  }

  const showMenu = () => {
    if (menu){
      return (
        <div className="menuTint">
            <div className="mobileMenu">
              <RxCross2 size={50} onClick={menuHandle} id="cross"/>
              <nav>
                <ul>
                  <li>Home</li>
                  <li>About</li>
                  <li>Browse</li>
                  <li>Links</li>
                  <li>Contact</li>
                </ul>
              </nav>
          </div>
        </div>
      )
    }
  }
  
  return (
    <header id="header">

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
            <AiOutlineSearch size={20} id="searchIcon" className="icon"/>
          </form>
          <button id="signup">Sign Up</button>
          <button id="login">Login</button>
        </div>
      </div>

      {/* Mobile */}
      {showMenu()}
      <div className="burger">
        <GiHamburgerMenu size={40} id="burgerIcon" onClick={menuHandle} />
      </div>
      
    </header>
  );
};

export default Header;
