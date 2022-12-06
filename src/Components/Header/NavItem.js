import React from "react";
import { NavLink,Link } from "react-router-dom";

const NavItem = ({ id, text, url, icon }) => {
  return (
    // <li className="NavItem">
    //   <NavLink className="nav-link px-2 list-group-item-action text-black" to={url} title={text}>
    //     {text}
    //   </NavLink>
    // </li>


    <li className=" nav-item">
    <NavLink
      to={url}
      className="nav-link mb-0 text-white d-flex justify-content-center align-items-center h2"
    >
      {icon} <span className=" me-2 ms-1">{text}</span>
      
    </NavLink>
  </li>
  );
};

export default NavItem;
