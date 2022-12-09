import moment from "moment/moment";
import React from "react";
import { MdFavorite, MdMoreVert, MdThumbUp } from "react-icons/md";
import "./post.scss";
const Post = ({id,first_name,last_name,description,date,image,user,comments,likes}) => {
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
            <span className="likeIcon" style={{color:"red"}}><MdFavorite></MdFavorite></span>
            <span className="likeIcon" style={{color:"grey"}}><MdThumbUp></MdThumbUp></span>
            <span className="POstlikeCounter">{likes} People Liked</span>
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
