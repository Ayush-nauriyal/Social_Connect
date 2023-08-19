import React, { useMemo, useState } from "react";
import "./index.scss";
import logo from "../../../assets/logo.png";
import {
  AiOutlineHome,
  AiOutlineUserSwitch,
  AiOutlineSearch,
  AiOutlineMessage,
  AiOutlineBell
} from "react-icons/ai";
import ProfilePopup from "../ProfilePopup";

import { BsBriefcase } from "react-icons/bs";
import user from "../../../assets/user.png";

function Topbar() {
  const [popupVisible, setPopupVisible] = useState(false);
  const displayPopup = () => {
    setPopupVisible(!popupVisible);
  };

  return (
    <>
      <div className="topbar-main">
        
        <img className="logo" src={logo} alt="Logo" />

        <AiOutlineHome size={30} className="react-icons" />
        
        <AiOutlineUserSwitch size={30} className="react-icons" />
        
        <BsBriefcase size={30} className="react-icons" />
        
        <AiOutlineSearch size={30} className="react-icons" />
        
        <AiOutlineMessage size={30} className="react-icons" />
        
        <AiOutlineBell size={30} className="react-icons" />
        
        <div>
        
          <img className="logo" src={user} alt="Logo" onClick=
          {displayPopup} />
        
        </div>
        {popupVisible ? (
          <div className="popup-position">
            <ProfilePopup />
          </div>
        ) : (
          <></>
        )}
      
      </div>
    
    </>
  );
}

export default Topbar;
