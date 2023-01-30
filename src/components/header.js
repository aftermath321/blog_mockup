import {
  AiOutlineSearch,
} from "react-icons/ai";

const Header = () => {
    return(
        <header id="header">
  <div className="topMenu" >
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
        <AiOutlineSearch size={20} id="searchIcon" />
      </form>
      <button id="signup">Sign Up</button>
      <button id="login">Login</button>
    </div>
  </div>
  </header>)
}

export default Header;