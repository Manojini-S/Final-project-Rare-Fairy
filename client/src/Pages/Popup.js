import React from "react";
import './Popup.css';

function Popup() {
    return(
        <>
        <div className="popup-box">
        <div className="popup">
<h2>Success Message</h2>
<h4>**Thank You for registering! Please check your email for verification.**</h4>
<button typy='button' className="btn">OK</button>

        </div>
        </div>
        </>
    )
};

export default Popup;