import React from 'react'
import './online.css';

const Online = ({user}) => {
    return (
        <li className="rightbarFriend">
                       <div className="rightbarProfileImgContainer">
                           <img 
                           className="rightbarprofileImg"
                           src={user.profilePicture}
                           alt=""
                           />
                           <span className="rightbarOnline"></span>
                       </div>
                       <span className="rightbarUserName">{user.username}</span>
                   </li>
    )
}

export default Online
