import React, { useState } from "react";
import {
  FaCartPlus,
  FaDashcube,
  FaHome,
  FaProductHunt,
  FaReact,
  FaUserAlt,
  FaUser,
  FaUsers,
  FaUserCircle,
  FaArrowDown,
  FaSearch,
  FaViber,
} from "react-icons/fa";
import { GiUsaFlag } from "react-icons/gi";
import {
  MdFavorite,
  MdOutlineArrowDropDown,
  MdMessage,
  MdNotifications,
} from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { NavURL } from "./Data";
import NavItem from "./NavItem";
import "./headers.scss";
import UserIconData from "./UserIconData";
import { BsArrow90DegDown, BsArrowBarUp, BsCart } from "react-icons/bs";

const Header = () => {
  return (
    <header className="navbar">
      <div className="wrapper">
        <div className="left">
          <Link className="link logoClass" to={``}>
            Gostsocial
          </Link>
        </div>
        <div className="center"></div>
        <div className="right">
          <div className="seacr-form">
            <div className="item">
              {" "}
              <input
                type="search"
                className="form-control"
                name=""
                id=""
                aria-describedby="helpId"
                placeholder="Search..."
              />
            </div>
          </div>
          <div className="navigation-Page">
            <div className="item">
              <Link className="link" to={``}>
                Homepage
              </Link>
            </div>
            <div className="item">
              <Link className="link" to={`/about`}>
                Timeline
              </Link>
            </div>
          </div>
          <div className="icons">
          <div className="notification-icon">
            <Link to={`/contact`}>
              <FaUser className="icon-class"></FaUser>
            </Link>
            <span>10</span>
          </div>
          <div className="notification-icon">
          <Link to={`profile`}>
              <MdMessage className="icon-class"></MdMessage>
            </Link>
            <span>110</span>
          </div>
          <div className="notification-icon">
          <Link to={`wishlist`}>
              <MdNotifications className="icon-class"></MdNotifications>
            </Link>
            <span>88</span>
          </div>
          </div>
          <div className="item">
            <Link className="link" to={`/about`}>
              <img
                className="header-Image"
                src="/assets/images/usericon.webp"
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
