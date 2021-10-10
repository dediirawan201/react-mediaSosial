import React from 'react'
import './profile.css';
import { Feed, Rightbar, Sidebar, Topbar } from '../../components';

const Profile = () => {
    return (
        <>
        <Topbar/>
        <div className="profile">
            <Sidebar/>
            <div className="profileRight">
                <div className="profileRightTop">
                    <div className="profileCover">
                    <img className="profileCoverImg" src="assets/post/3.jpeg" alt="" />
                    <img className="profileUserImg" src="assets/person/7.jpeg" alt="" />
                    </div>
                    <div className="profileInfo">
                        <div className="profileInfoName">Dedi Irawan</div>
                        <div className="profileInfoDesc">Hello teman saya!!!</div>
                    </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed/>
                        <Rightbar profile/>
                </div>
            </div>
        </div>
        </>
    )
}

export default Profile
