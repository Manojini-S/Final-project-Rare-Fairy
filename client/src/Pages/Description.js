import React from 'react';
import './Description.css';

import emp from '../Assets/emp7.png'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import StripeCheckout from "react-stripe-checkout";
import { useState } from 'react';


function Description() {
    const [product, setProduct] = useState({
        name: "Rare Fairy",  // Changed to lowercase 'name'
        price: 50,
        productBy: "Mano",
    });
    const makePayment = (token) => {
        const body = {
            token,
            product,
        };
        const headers = {
            "Content-Type": "application/json",
        };
        return fetch("http://localhost:3000/payment", {  // Ensure the backend server is running on this port
            method: "POST",
            headers,
            body: JSON.stringify(body),
        })
            .then((response) => {
                console.log("Response:", response);
                const { status } = response;
                console.log("Status:", status);
            })
            .catch((error) => console.log(error));
    };
    return (
        <>
            <Navbar />
            {/* <div className='Description'>
    <div className='Desription1'>
        <img src={emp}/>

    </div>

</div> */}

            <div class="body">
                <div class="heading-des">
                    <h1>Image and  <span>Description</span></h1>
                    <p>Emproidry designs for blouse</p>

                </div>

                <div class="container-des">
                    <section class="about2">
                        <div class="about2-image">
                            <img src={emp} />

                        </div>
                        <div class="about-content2">
                            {/* <h2>warm emprance in a product</h2> */}
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptates sed dolores maiores sequi incidunt voluptas tenetur. Quaerat itaque corrupti veritatis. Ipsam laborum quas iste cum animi? Facere molestias laudantium consectetur odio, ratione, velit maiores dignissimos possimus necessitatibus perspiciatis quod ut soluta fugit eos est delectus autem. Aliquam, at consequuntur quaerat commodi perspiciatis voluptatibus accusamus ex facilis assumenda. Cupiditate, possimus quo. Laudantium, cum cupiditate. Expedita odit vitae ab dolor, incidunt labore necessitatibus architecto quidem id sapiente est consequatur iste ipsa, fuga hic quaerat? In autem incidunt, exercitationem sed officia numquam illo modi facere tempora debitis nisi delectus iusto voluptates labore.</p>
                            <h3>Rs/= 5000</h3>
                            <div class="rating">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half"></i>
                            </div>
                            <StripeCheckout
                                stripeKey="pk_test_51PJFojP7PxWjIVya2Bv5APhoOZxJODD5GkAIoYedJdeC9AwkajgyMixKSxbyRKKPVhPWCScfkFAatKx4ztdPoMnS004kNjDNrJ"
                                token={makePayment}
                                name="Rare Fairy"
                                amount={product.price * 100}
                            >
                                <button className="dash" id="dash">Order Now</button>
                            </StripeCheckout>



                        </div>


                    </section>

                </div>

                <div class="rev-section">

                    <h2 class="title">Our Guests <span>Love Us</span></h2>
                    {/* <p class="note">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil laboriosam possimus perferendis
                        non error neque.</p> */}

                    <div class="reviews">

                        <div class="review">
                            <div class="head-review">
                                <img class="review-img" src="https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
                                    width="250px" />

                            </div>
                            <div class="body-review">
                                <div class="name-review">Nathan D.</div>
                                <div class="place-review">M.Karanika</div>
                                <div class="rating">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star-half"></i>
                                </div>
                                <div class="desc-review">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati
                                    eligendi suscipit illum officia ex eos.</div>
                            </div>
                        </div>
                        <div class="review">
                            <div class="head-review">
                                <img class="review-img" src="https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
                                    width="250px" />
                            </div>
                            <div class="body-review">
                                <div class="name-review">Pooja Rajendram</div>
                                <div class="place-review">Jaffna</div>
                                <div class="rating">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star-"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                                <div class="desc-review">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati
                                    eligendi suscipit illum officia ex eos.</div>
                            </div>
                        </div>

                        <div class="review">
                            <div class="head-review">
                                <div class="review-img">
                                    <img class="review-img" src="https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
                                        width="250px" />
                                </div>
                            </div>
                            <div class="body-review">
                                <div class="name-review">S.Aishu</div>
                                <div class="place-review">Vavuniya</div>
                                <div class="rating">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star-half"></i>
                                </div>
                                <div class="desc-review">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati
                                    eligendi suscipit illum officia ex eos.</div>
                            </div>
                        </div>

                        <div class="review">
                            <div class="head-review">
                                <img class="review-img" src="https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
                                    width="250px" />
                            </div>
                            <div class="body-review">
                                <div class="name-review">S.Amirtha</div>
                                <div class="place-review">Vavuniya</div>
                                <div class="rating">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star-half"></i>
                                </div>
                                <div class="desc-review">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati
                                    eligendi suscipit illum officia ex eos.</div>
                            </div>
                        </div>
                        <div class="review">
                            <div class="head-review">
                                <img class="review-img" src="https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
                                    width="250px" />
                            </div>
                            <div class="body-review">
                                <div class="name-review">K.Anushvi</div>
                                <div class="place-review">Jaffna</div>
                                <div class="rating">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                                <div class="desc-review">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati
                                    eligendi suscipit illum officia ex eos.</div>
                            </div>
                        </div>
                        <div class="review">
                            <div class="head-review">
                                <img class="review-img" src="https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
                                    width="250px" />
                            </div>
                            <div class="body-review">
                                <div class="name-review">Kevin Tuck</div>
                                <div class="place-review">Vavuniya</div>
                                <div class="rating">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star-half"></i>
                                </div>
                                <div class="desc-review">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati
                                    eligendi suscipit illum officia ex eos.</div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
            <Footer />
        </>
    )
};

export default Description;