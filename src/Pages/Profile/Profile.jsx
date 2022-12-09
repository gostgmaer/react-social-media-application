import React from 'react'
import Header from '../../Components/Header/Header'
import Rightbar from '../../Components/RightBar/Rightbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Feed from "../../Components/Feed/Feed";
import './profile.scss'

const Profile = () => {
  return (
    <div className='Profile'>
      <Header></Header>
      <div className="profilePageContainer">
     
     <Sidebar></Sidebar>
     <div className="profileRight">
      <div className="profileRightTop">
        <img src="/assets/images/usericon.webp" alt="" />
      </div>
      <div className="profileRightBottom">
      <Feed></Feed>
      <Rightbar></Rightbar>
      </div>
     
     </div>
     </div>
      
    </div>
  )
}

export default Profile