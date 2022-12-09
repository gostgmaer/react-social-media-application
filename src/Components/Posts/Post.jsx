import moment from "moment/moment";
import React, { useState } from "react";
import { MdFavorite, MdMoreVert, MdThumbUp } from "react-icons/md";
import "./post.scss";
const Post = ({id,first_name,last_name,description,date,image,user,comments,likes}) => {


const [like, setLike] = useState(likes);
const [isLike, setIsLike] = useState(false);


const likehandler = ()=>{
  setLike(isLike ? like-1 :like+1)
  setIsLike(!isLike)
}

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
            <div className="postTopLeft">
            
            <img className='postTopLeftProfileImage' src={user} alt="" />
            <span className="postUserName">{first_name} {last_name}</span>
            <span className="postDate">{moment(date).fromNow()}</span>
            </div>
            <div className="postTopRight">
                <MdMoreVert></MdMoreVert>
            </div>
        </div>
        <div className="postCenter">
        <img src={image} alt="" className="postsImage" />
            <span className="postText">{description}</span>
           
        </div>
        <div className="postBottom">
            <div className="postBottomLeft">
            <span className="likeIcon" onClick={likehandler} style={{color:"red"}}><MdFavorite></MdFavorite></span>
            <span className="likeIcon" onClick={likehandler} style={{color:"grey"}}><MdThumbUp></MdThumbUp></span>
            <span className="POstlikeCounter">{like} People Liked</span>
            </div>
            <div className="postBottomRight">
            <span className="postCommenttext">{comments} Comments</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
