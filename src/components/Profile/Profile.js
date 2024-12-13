"use client";
import './Profile.scss';
import {
    FaUser
} from 'react-icons/fa';
import { useState } from 'react';
import { redirect } from 'next/navigation';


const Profile = () => {
    const [showDrop, setShowDrop] = useState(false)

    function handleClickUser() {
        setShowDrop(prew => !prew)
    }

    function logOut() {
        sessionStorage.removeItem("JWT_TOKEN");
        redirect("/auth/login");
    }


  return (
    <div className='userLogo' onClick={handleClickUser}> 
        <FaUser/>
        {
            showDrop &&
            <button className='logout' onClick={() => logOut()}>
                Log Out
            </button>
        }
    </div>
  );
};

export default Profile;