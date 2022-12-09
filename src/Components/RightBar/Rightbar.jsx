import React from "react";
import "./rightbar.scss";
import { sidebarList, Friends } from "../Sidebar/sidebarData";

const OnlineFriends = ({ first, img, url, isActive }) => {
  return (
    <li className="rightbarFriend">
      <div className="rightbarProfileImageContainer">
        <img src={img} alt={first} className="rightbarProfileImages" />
        <span className="rightbarFriendsOnline"></span>
      </div>
      <span className="rightbarUsername">{first}</span>
    </li>
  );
};

const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img
            src="assets/images/usericon.webp"
            alt=""
            className="birthDayImage"
          />
          <span className="bithdaytext">
            <b>Kishor Sarkar</b> and <b>5 others friends</b> has birthday
          </span>
        </div>
        <img src="assets/images/usericon.webp" alt="" className="rightBarAdd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Friends.map((item) => (
            <OnlineFriends key={item.id} {...item}></OnlineFriends>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Rightbar;
