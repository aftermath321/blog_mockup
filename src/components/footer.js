import {
  AiOutlineInstagram,
  AiFillGithub,
  AiFillYoutube,
  AiFillTwitterCircle,
  AiOutlineFacebook,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
      <div className="socials">
        <AiOutlineInstagram size={30} />
        <AiOutlineFacebook size={30} />
        <AiFillGithub size={30} />
        <AiFillTwitterCircle size={30} />
        <AiFillYoutube size={30} />
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
  );
};

export default Footer;