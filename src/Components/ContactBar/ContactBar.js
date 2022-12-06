import React from 'react'
import './contactBar.scss'
import { FaFacebook, FaGithub, FaInstagram, FaPinterest, FaTwitch, FaTwitter } from "react-icons/fa";



const ContactBar = () => {
  return (
    <div className='ContactBar'>
        <div className='wrapper'>
            <span>be touch with us</span>
            <div className='mail'>
                <input type="text" placeholder='Enter Your Email.....' />
                <button>Join us</button>
            </div>
            <div className='icons'>
                <FaFacebook/>
                <FaTwitter></FaTwitter>
                <FaGithub></FaGithub>
                <FaInstagram></FaInstagram>
                <FaPinterest></FaPinterest>
                <FaTwitch></FaTwitch>
            </div>
        </div>
    </div>
  )
}

export default ContactBar