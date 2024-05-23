// Card.js
import React from 'react';
import './Cate.css'; 

function Card(props) {



    useEffect(() => {
        fetch('localhost:3003/image/getImg')
            .then(response => response.json())
            .then(data => {
                setProducts(data);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    }, []);

    return (
        <div className="card">
                                <div className="card1">
                                <img src={props.image} alt="salwar4" />
                                <h4>Happy In Introducing Aari Embroidery Design Blouses At Best Price In Rare Fairy</h4>
                                <div className="fake">
                                    <a href='/Salwar'><button>Click here</button></a>
                                </div>
                            </div>

        </div>
    );
}

export default Card;
