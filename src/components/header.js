import { AiOutlineSearch } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
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
      <div className="mobileMenu">
        <GiHamburgerMenu size={40} id="burgerIcon" />
      </div>
    </header>
  );
};

export default Header;
