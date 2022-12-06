import React from "react";
import { FaFacebook, FaTiktok, FaUser,FaHome, FaMobile, FaReadme } from "react-icons/fa";
import { SiAmericanexpress, SiJcb, SiProtondb } from "react-icons/si";
import {
  RiBankCard2Fill,
  RiMastercardFill,
  RiSwitchFill,
} from "react-icons/ri";
import { BsFacebook, BsGithub, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";

const naviconClass = 'className="bi d-block mx-auto m-2"'
const NavURL = [
  {
    id: 1,
    text: "Home",
    url: "",
    icon: <FaHome className={`${naviconClass}`} ></FaHome>,
  },
  {
    id: 2,
    text: "About us",
    url: "about-us",
    icon: <FaUser className={`${naviconClass}`}></FaUser>,
  },
  {
    id: 3,
    text: "Portfolio",
    url: "portfolio",
    icon: <SiProtondb className={`${naviconClass}`}></SiProtondb>,
  },
  {
    id: 4,
    text: "Contact",
    url: "contact",
    icon: <FaMobile className={`${naviconClass}`}></FaMobile>,
  }
  
];
const socialURL = [
  {
    id: 3,
    text: "americanexpress",
    url: "http://rambler.ru",
    icon: <BsFacebook></BsFacebook>,
  },
  {
    id: 10,
    text: "bankcard",
    url: "http://time.com",
    icon: <BsTwitter></BsTwitter>,
  },
  {
    id: 12,
    text: "switch",
    url: "https://joomla.org",
    icon: <BsYoutube></BsYoutube>,
  },
  {
    id: 17,
    text: "mastercard",
    url: "http://wix.com",
    icon: <BsGithub></BsGithub>,
  },
  {
    id: 18,
    text: "jcb",
    url: "https://twitpic.com",
    icon: <BsInstagram></BsInstagram>,
  },
  {
    id: 19,
    text: "jcb",
    url: "https://twitpic.com",
    icon: <FaTiktok></FaTiktok>,
  },
];
export { NavURL, socialURL };
