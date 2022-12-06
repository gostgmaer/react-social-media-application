import React from 'react'
import { Link } from 'react-router-dom'
import './sidebar.scss'
import { sidebarList,Friends } from './sidebarData'

const SidebarListData = ()=>{

  return <React.Fragment>
        {sidebarList.map((item)=>{
          return <li className='sidebarListItem' key={item.id}>
             {item.icon}{item.text}
          </li>
        })}
  </React.Fragment>
}

const SidebarFriends = ()=>{

  return <React.Fragment>
        {Friends.map((item)=>{
          return <li className='SidebarFriends' key={item.id}>
            <img className='sidebarFriendsImage' src={item.img} alt={item.first} />
              <span className='sidebarFriendName'>{item.first}</span>
          </li>
        })}
  </React.Fragment>
}

const Sidebar = () => {
  return (

    <div className='sidebar'>
        <div className="sidebarwrapper">
          <ul className='sidebarList'>
            <SidebarListData></SidebarListData>
          </ul>
          <button className='sidebarshowMorebtn'>Show More </button>
          <hr className='siebarhrTag' />
          <ul className='siebarFriendList'>
          <SidebarFriends></SidebarFriends>
          </ul>
        </div>
    </div>
  )
}

export default Sidebar