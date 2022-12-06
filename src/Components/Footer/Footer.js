import React from "react";
import { RiMastercardLine } from "react-icons/ri";
import { SiExpress, SiMetro, SiVisa } from "react-icons/si";
import "./Footer.scss";
const Footer = () => {
  const date = new Date();
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h3>Categories</h3>
          <span>Man</span>
          <span>Women</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h3>Categories</h3>
          <span>Man</span>
          <span>Women</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h3>About</h3>
          <span>
            . the main written part of a book, newspaper, etc. (not the
            pictures, notes, index, etc.) किसी पुस्‍तक, अख़बार का मुख्‍य लिखित
            भाग (जिसमें चित्र, टिप्‍पणियाँ, अनुक्रमणिका आदि शामिल नहीं); मूल पाठ
            2. the written form of a speech, interview, etc. किसी भाषण,
            साक्षात्‍कार आदि का लिखित रूप
          </span>
        </div>
        <div className="item">
          <h3>Contact</h3>
          <span>
            . the main written part of a book, newspaper, etc. (not the
            pictures, notes, index, etc.) किसी पुस्‍तक, अख़बार का मुख्‍य लिखित
            भाग (जिसमें चित्र, टिप्‍पणियाँ, अनुक्रमणिका आदि शामिल नहीं); मूल पाठ
            2. the written form of a speech, interview, etc. किसी भाषण,
            साक्षात्‍कार आदि का लिखित रूप
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">GOST STORE</span>
          <span className="copyright">
            @ Copyright {date.getFullYear()}.all Right Reserved
          </span>
        </div>
        <div className="right">
          <div>
            {" "}
            <RiMastercardLine className="icons"></RiMastercardLine>{" "}
            <SiVisa className="icons"></SiVisa>{" "}
            <SiMetro className="icons"></SiMetro>
            <SiExpress className="icons"></SiExpress>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
