import React from "react";
import './Userprofile.css';
// import Navbarfrom from "../Components/Navbar";
import profilePicture from '../Assets/customer01.jpeg';
import Navbar from "../Components/Navbar";



function UserProfile() {
    // const { userName, aboutMe, email, phone, profilePicture } = props;
  
    return (
       <>
       <Navbar/>
        <div className="user-profile">
            
      <div className="profile-container">
        <div className="profile-header">
          <div className="profile-picture">
            <img src={profilePicture} alt="Profile Picture" />
          </div>
          {/* <h1>{userName}</h1> */}
          <h1>Pooja Rajendram</h1>
        </div>
        <div className="profile-info">
          <h3>About <span>Me</span></h3>
          {/* <p>{aboutMe}</p> */}

          <p>jignjirhunuseuh hnuvjrnheug uhnuihnersialh hneufnejrs nrjgnerujmhhuh huibjd bunvnbdukbahjadbvhdvb hdbhybhh vbhggb yukb hbhb yhfeufhuwdnsjdushdnjsn hdefuenuhfbuksdbncu hdufnehwbfdhbyndjegby ybgfcuehdbcudibnu dyufbcjhsdbfudh gdubfuwsbfdhcesb ydfbyedbfye</p>
          <h2>Contact Information</h2>
          {/* <p>Email: {email}</p> */}
          <p>Email: mano@gmail.com</p>
          {/* <p>Phone: {phone}</p> */}
          <p>Phone: 0761035779</p>
        </div>
      </div>
      </div>
      </>
    );
  };

  export default UserProfile;
  