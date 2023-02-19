import React from "react";
import { useState } from "react";
import {RxCross2} from 'react-icons/rx'
import {SiGmail} from 'react-icons/si'
import {AiOutlineFacebook, AiFillGithub} from 'react-icons/ai'

const LoginScreen = ({loginHandle}) => {

    return (
      <div className="menuTint">
        <RxCross2 size={50} onClick={() => loginHandle()} id="cross" />
        <div className="loginMenu">
          <h2>Login</h2>
          <form>
            <input placeholder="Login"></input>
            <input placeholder="Password"></input>
            
            <button onClick={(e) => e.preventDefault}>Login</button>
          </form>
          <p>
            Don't have an account yet? <a>Sign up!</a>
          </p>
          <p>Log in with:</p>
          <div className="loginIcons">
            <AiOutlineFacebook size={50} className="icon" />
            <AiFillGithub size={50} className="icon" />
            <SiGmail size={50} className="icon"/>
          </div>
        </div>
      </div>
    );
  
};

export default LoginScreen;
