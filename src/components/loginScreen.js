import React from "react";
import {RxCross2} from 'react-icons/rx'
import {SiGmail} from 'react-icons/si'
import {AiOutlineFacebook, AiFillGithub} from 'react-icons/ai'
import  Link from 'next/link'

const LoginScreen = ({loginHandle}) => {

    return (
      <div className="menuTint">
        <RxCross2 size={50} onClick={() => loginHandle()} class="cross" />
        <div className="loginMenu">
          <h2>Log in to Blog</h2>
          <form>
            <input placeholder="Login"></input>
            <input placeholder="Password" type="password"></input>

            <button type="submit" onClick={(e) => e.preventDefault()}>
              Login
            </button>
          </form>
          <p>
            Don&apos;t have an account yet? <Link href="/">Sign up!</Link>
          </p>
          <p>Log in with:</p>
          <div className="loginIcons">
            <AiOutlineFacebook size={50} className="icon" />
            <AiFillGithub size={50} className="icon" />
            <SiGmail size={50} className="icon" />
          </div>
        </div>
      </div>
    );
  
};

export default LoginScreen;
