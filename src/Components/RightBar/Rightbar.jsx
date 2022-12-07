import React from "react";
import "./rightbar.scss";

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
          <li className="rightbarFriend">
            <div className="rightbarProfileImageContainer">
              <img
                src="assets/images/usericon.webp"
                alt=""
                className="rightbarProfileImages"
              />
              <span className="rightbarFriendsOnline"></span>
            </div>
            <span className="rightbarUsername">John doe</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImageContainer">
              <img
                src="assets/images/usericon.webp"
                alt=""
                className="rightbarProfileImages"
              />
              <span className="rightbarFriendsOnline"></span>
            </div>
            <span className="rightbarUsername">John doe</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImageContainer">
              <img
                src="assets/images/usericon.webp"
                alt=""
                className="rightbarProfileImages"
              />
              <span className="rightbarFriendsOnline"></span>
            </div>
            <span className="rightbarUsername">John doe</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImageContainer">
              <img
                src="assets/images/usericon.webp"
                alt=""
                className="rightbarProfileImages"
              />
              <span className="rightbarFriendsOnline"></span>
            </div>
            <span className="rightbarUsername">John doe</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImageContainer">
              <img
                src="assets/images/usericon.webp"
                alt=""
                className="rightbarProfileImages"
              />
              <span className="rightbarFriendsOnline"></span>
            </div>
            <span className="rightbarUsername">John doe</span>
          </li><li className="rightbarFriend">
            <div className="rightbarProfileImageContainer">
              <img
                src="assets/images/usericon.webp"
                alt=""
                className="rightbarProfileImages"
              />
              <span className="rightbarFriendsOnline"></span>
            </div>
            <span className="rightbarUsername">John doe</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImageContainer">
              <img
                src="assets/images/usericon.webp"
                alt=""
                className="rightbarProfileImages"
              />
              <span className="rightbarFriendsOnline"></span>
            </div>
            <span className="rightbarUsername">John doe</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImageContainer">
              <img
                src="assets/images/usericon.webp"
                alt=""
                className="rightbarProfileImages"
              />
              <span className="rightbarFriendsOnline"></span>
            </div>
            <span className="rightbarUsername">John doe</span>
          </li>
          
        </ul>
      </div>
    </div>
  );
};

export default Rightbar;
