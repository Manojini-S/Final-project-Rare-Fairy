import React from 'react';
import './Emproidry.css';
import emp from '../Assets/emp3.jpeg';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import emp4 from '../Assets/emp4.png';
import emp5 from '../Assets/emp5.png';



function Emproidry() {
    return (

        <>
            <Navbar />
            <div class="emp-head">Emproidry <span> Designs</span></div>
            <div class="container-emp">
                <div class="card-emp">
                    <img src={emp} />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, eligendi.</p>
                    <a href="Description" className="button">View </a>

                </div>
                <div class="card-emp">
                    <img src={emp} />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, eligendi.</p>
                    <a href="Description" className="button">View </a>
                </div>
                <div class="card-emp">
                    <img src={emp} />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, eligendi.</p>
                    <a href="Description" className="button">View </a>
                </div>
                <div class="card-emp">
                    <img src={emp} />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, eligendi.</p>
                    <a href="Description" className="button">View </a>
                </div>
            </div>

            <div class="container-emp">
                <div class="card-emp">
                    <img src={emp4} />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, eligendi.</p>
                    <a href="Description" className="button">View </a>

                </div>
                <div class="card-emp">
                    <img src={emp4} />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, eligendi.</p>
                    <a href="Description" className="button">View </a>
                </div>
                <div class="card-emp">
                    <img src={emp4} />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, eligendi.</p>
                    <a href="Description" className="button">View </a>
                </div>
                <div class="card-emp">
                    <img src={emp4} />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, eligendi.</p>
                    <a href="Description" className="button">View </a>
                </div>



            </div>

            <div class="container-emp">
                <div class="card-emp">
                    <img src={emp5} />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, eligendi.</p>
                    <a href="Register" className="button">View</a>

                </div>
                <div class="card-emp">
                    <img src={emp5} />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, eligendi.</p>
                    <a href="Register" className="button">View</a>
                </div>
                <div class="card-emp">
                    <img src={emp5} />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, eligendi.</p>
                    <a href="Register" className="button">View</a>
                </div>
                <div class="card-emp">
                    <img src={emp5} />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, eligendi.</p>
                    <a href="Register" className="button">View</a>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Emproidry;