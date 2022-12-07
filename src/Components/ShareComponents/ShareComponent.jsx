import React from 'react'
import './share.scss'


import { MdEmojiEmotions, MdLabel, MdPermMedia, MdRoom } from "react-icons/md";
const ShareComponent = () => {
  return (
    <div className='ShareComponent'>
        <div className='shareWrapper'>
            <div className='shareTop'>
                    <img className='shareprofileimage' src="assets/images/usericon.webp" alt="" />
                    <input type="text" className='sharenput' placeholder="what's in your mind ?....." />
            </div>
            <hr className='shareHr'/>
            <div className='shareBottom'>
                <div className="shareOptions">
                    <div className="shareOption">
                        <MdPermMedia style={{color:'tomato'}} className='shareIcon'></MdPermMedia>
                        <span className='shareOptionText'> Photo/video</span>
                    </div>
                    <div className="shareOption">
                        <MdRoom style={{color:'green'}} className='shareIcon'></MdRoom>
                        <span className='shareOptionText'> Location</span>
                    </div>
                    <div className="shareOption">
                        <MdLabel style={{color:'blue'}} className='shareIcon'></MdLabel>
                        <span className='shareOptionText'> Tag</span>
                    </div>
                    <div className="shareOption">
                        <MdEmojiEmotions style={{color:'gold'}} className='shareIcon'></MdEmojiEmotions>
                        <span className='shareOptionText'> Feelings</span>
                    </div>
                </div>
            <button className='shareButton'>Share</button>
            
            
            </div>

        </div>
    </div>
  )
}

export default ShareComponent