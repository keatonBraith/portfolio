import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isShowing, setShowing] = useState(false);

  const handleMenu = () => {
    setShowing(!isShowing);
    document.addEventListener("click", closeMenu);
  };

  const handleMouseDown = (e) => {
    handleMenu();
    e.stopPropagation();
  };

  const closeMenu = () => {
    setShowing(false);
    document.removeEventListener("click", closeMenu);
  };

  let visibility = "hide";
  if (isShowing === true) {
    visibility = "show";
  }

  return (
    <div className="nav-main">
      <div className="main-menu">
        <button className="fas fa-bars" onClick={handleMouseDown}></button>
        <div id="flyoutMenu" className={visibility}>
          <ul className="menu">
            <li>
              <Link className="menu-btn" to={"/"}>
                HOME
              </Link>
            </li>
            <li>
              <Link className="menu-btn" to={"/about"}>
                ABOUT
              </Link>
            </li>
            <li>
              <Link className="menu-btn" to={"/contact"}>
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
