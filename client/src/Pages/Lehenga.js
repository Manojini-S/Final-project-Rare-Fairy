import React from 'react';
import './Emproidry.css'; 
import LehengaImage from '../Assets/leh.png';
import Navbar from '../Components/Navbar';

function Lehenga() {
  return (
    <>
    <Navbar/>
       <div class="emp-head">Lehanga <span>Designs</span></div>
    <div class="container-emp">
        <div class="card-emp">
            <img src={ LehengaImage}/>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, eligendi.</p>
            <a href="Description" className="button">View</a>

        </div>
        <div class="card-emp">
        <img src={ LehengaImage}/>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, eligendi.</p>
            <a href="Register" className="button">View</a>
        </div>
        <div class="card-emp">
        <img src={ LehengaImage}/>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, eligendi.</p>
            <a href="Register" className="button">View</a>
        </div>
        <div class="card-emp">
        <img src={ LehengaImage}/>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, eligendi.</p>
            <a href="Register" className="button">View</a>
        </div>
    </div>

    <div class="container-emp">
        <div class="card-emp">
        <img src={ LehengaImage}/>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, eligendi.</p>
            <a href="Register" className="button">View</a>

        </div>
        <div class="card-emp">
        <img src={ LehengaImage}/>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, eligendi.</p>
            <a href="Register" className="button">View</a>
        </div>
        <div class="card-emp">
        <img src={ LehengaImage}/>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, eligendi.</p>
            <a href="Register" className="button">View</a>
        </div>
        <div class="card-emp">
        <img src={ LehengaImage}/>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, eligendi.</p>
            <a href="Register" className="button">View</a>
        </div>

        
        
    </div>

    <div class="container-emp">
        <div class="card-emp">
        <img src={ LehengaImage}/>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, eligendi.</p>
            <a href="Register" className="button">View</a>

        </div>
        <div class="card-emp">
        <img src={ LehengaImage}/>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, eligendi.</p>
            <a href="Register" className="button">View</a>
        </div>
        <div class="card-emp">
        <img src={ LehengaImage}/>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, eligendi.</p>
            <a href="Register" className="button">View</a>
        </div>
        <div class="card-emp">
        <img src={ LehengaImage}/>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, eligendi.</p>
            <a href="Register" className="button">View</a>
        </div>
    </div>
    
    </>
  );
}

export default Lehenga;