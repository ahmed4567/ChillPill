import React, { useEffect, useState } from "react";
import "./nav.css";
import Logo from "./chill-pill-favicon-color.png";

function Nav() {
  const [show, handelShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handelShow(true);
      } else handelShow(false);
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);
  return (
    <div className={`navBar ${show && "nav__blak"}`}>
      <img className="nav__logo" src={Logo} alt="logo" />
      <h1 className="compName">Chill Pill</h1>
      <img className="nav__avatar" src={Logo} alt="logo" />
    </div>
  );
}

export default Nav;
