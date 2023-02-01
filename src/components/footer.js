import {
  AiOutlineInstagram,
  AiFillGithub,
  AiFillYoutube,
  AiFillTwitterCircle,
  AiOutlineFacebook,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer id="footer">
    <div className="footer">
      <div className="socials">
        <AiOutlineInstagram size={30} className="icon"/>
        <AiOutlineFacebook size={30} className="icon"/>
        <AiFillGithub size={30} className="icon"/>
        <AiFillTwitterCircle size={30} className="icon"/>
        <AiFillYoutube size={30} className="icon"/>
      </div>
      <div className="about">
        <h1>About</h1>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </span>
      </div>
      <div className="tags">
        <a>anime</a>
        <a>cusine</a>
        <a>movies</a>
        <a>science</a>
        <a>nature</a>
        <a>photograpy</a>
        <a>space</a>
        <a>kids</a>
        <a>anime</a>
        <a>cusine</a>
        <a>movies</a>
        <a>science</a>
        <a>nature</a>
        <a>photograpy</a>
        <a>space</a>
        <a>kids</a>
      </div>
      <div></div>
      <div className="rights">
        Copyright © 2023 Michal Kielbasa. All rights reserved.
      </div>
    </div>
    </footer>
  );
};

export default Footer;
