import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";

function Navbar() {
 
  const [state, setState] = useState(true);
  const [menu, setmenu] = useState(true)

  function handleClick(){
    setState(!state)
    setmenu(!menu)
  }




  return (
    <div>
      <nav className="NavItems">
        <h1 className="Navbar-logo">Sky Travels</h1>
        <div className="menu-icon" onClick={handleClick}>
          <i className={state ? "fas fa-bars" : "fas fa-times"}></i>
        </div>
        <ul className={menu ? "Nav-menu" : "Nav-menu active"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.url} className={item.cName}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            );
          })}
          <button>Sign Up</button>
        </ul>
      </nav>
    </div>
  );
}
export default Navbar;
