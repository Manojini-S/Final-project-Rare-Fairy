import React from 'react';
import Card from '../Components/designstype';
import './Aridesigsncard.css'


function Cards() {
    return (
        <div className="type-content">
            <Card
                // imageUrl={bridalimage}
                title="Happy In Introducing Aari Bridal Design Blouses At Best Price In Rare Fairy"
                buttonLink="/Bridel"
                altText="bridalimage"
            />
            <Card
                // imageUrl={bridal}
                title="Happy In Introducing Aari Embroidery Design Blouses At Best Price In Rare Fairy"
                buttonLink="/Simpleblouse"
                altText="bridal"
            />
            <Card
                // imageUrl={zardosi3}
                title="Happy In Introducing Aari Embroidery Design Blouses At Best Price In Rare Fairy"
                buttonLink="/Zardosi"
                altText="zardosi3"
            />
        </div>
    );
}

export default Cards;
