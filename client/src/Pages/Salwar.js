import React from 'react';
import './Salwar.css'; 
import Navbar from '../Components/Navbar';
import emp from '../Assets/salwar.jpeg';
import salwar2 from '../Assets/salwar2.png';



function Salwar() {
  return (
    <>
    <Navbar/>
    
    <div class="emp-head">Aridesigns for <span>Salwar</span> </div>
    <div class="container-emp">
        <div class="card-emp">
            <img src={emp}/>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, eligendi.</p>
            <a href="Description" className="button">View</a>

        </div>
        <div class="card-emp">
        <img src={emp}/>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, eligendi.</p>
            <a href="Description" className="button">View</a>
        </div>
        <div class="card-emp">
        <img src={emp}/>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, eligendi.</p>
            <a href="Description" className="button">View</a>
        </div>
        <div class="card-emp">
        <img src={emp}/>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, eligendi.</p>
            <a href="Description" className="button">View</a>
        </div>
    </div>

    <div class="container-emp">
        <div class="card-emp">
        <img src={salwar2}/>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, eligendi.</p>
            <a href="Description" className="button">View</a>

        </div>
        <div class="card-emp">
        <img src={emp}/>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, eligendi.</p>
            <a href="Description" className="button">View</a>
        </div>
        <div class="card-emp">
        <img src={emp}/>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, eligendi.</p>
            <a href="Description" className="button">View</a>
        </div>
        <div class="card-emp">
        <img src={emp}/>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, eligendi.</p>
            <a href="Description" className="button">View</a>
        </div>

        
        
    </div>

    <div class="container-emp">
        <div class="card-emp">
        <img src={emp}/>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, eligendi.</p>
            <a href="Description" className="button">View</a>

        </div>
        <div class="card-emp">
        <img src={emp}/>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, eligendi.</p>
            <a href="Description" className="button">View</a>
        </div>
        <div class="card-emp">
        <img src={emp}/>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, eligendi.</p>
            <a href="Description" className="button">View</a>
        </div>
        <div class="card-emp">
        <img src={emp}/>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, eligendi.</p>
            <a href="Description" className="button">View</a>
        </div>
    </div>
    </>
  );
}

export default Salwar;