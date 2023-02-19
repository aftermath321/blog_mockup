import React from 'react'
import { RxCross2 } from "react-icons/rx";

export const MobileMenu = ({menuHandle, loginHandle}) => {
  return (
    <div className="menuTint">
          <div className="mobileMenu">
            <RxCross2 size={50} onClick={() => menuHandle()} id="cross" />
            <nav>
              <ul>
                <li onClick={()=> {loginHandle(), menuHandle()}}>Login</li>
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

export default MobileMenu;