import React from "react";
import Feed from "../../Components/Feed/Feed";
import Header from "../../Components/Header/Header";
import Rightbar from "../../Components/RightBar/Rightbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import './home.scss'

const Home = () => {
  return (
    <div className="applicationHome">
      <Header></Header>
      <div className="homeContainer"><Sidebar></Sidebar>
      <Feed></Feed>
      <Rightbar></Rightbar></div>
    </div>
  );
};

export default Home;
