import { hasUnreliableEmptyValue } from "@testing-library/user-event/dist/utils";
import React, { useEffect, useState } from "react";
import "./Nav.css";

function Navbar() {
  const [show, setShow] = useState(false);
  const controlNav = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNav);
    return () => {
      window.removeEventListener("scroll", controlNav);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"} `}>
      <img
        className="nav__logo"
        src="https://www.pinclipart.com/picdir/big/2-23236_transparent-netflix-logo-2018-clipart.png"
        alt="Logo"
      />

      <img
        className="nav__avatar"
        src="https://vectorified.com/images/google-profile-icon-3.png"
        alt=""
      />
    </div>
  );
}

export default Navbar;
//
