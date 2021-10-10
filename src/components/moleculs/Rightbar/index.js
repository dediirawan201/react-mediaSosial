import React from 'react'
import { Online } from '../..';
import { Users } from '../../../dummyData';
import './rightbar.css';
const Rightbar = () => {
    return (
        <div className="rightbar">
           <div className="rightbarWrapper">
               <div className="birthdayContainer">
                   <img className="birthdayImg" src="assets/gift.png" alt="" />
                   <span className="birthdayText">
                       <b>Pola Faster</b> and <b>3 other friends</b> have a birthday today.
                   </span>
               </div>
               <img className="rightbarAd" src="assets/ad.png" alt="" />
               <h4 className="rightbarTitle">Outline Friends</h4>
               <ul className="rightbarFriendList">
                  {Users.map((u) => (
                      <Online key={u.id} user={u}/>
                  ))}
               </ul>
           </div>
        </div>
    )
}

export default Rightbar
