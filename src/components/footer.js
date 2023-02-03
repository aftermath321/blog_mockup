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
      <content>
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
          My name is Michal Kielbasa and I am a Web Developer and a traveller. 
          Where to find me? Probably in front of my laptop, deep in a history book
           or trekking across Asia!   
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
      </content>
    </div>
    </footer>
  );
};

export default Footer;
