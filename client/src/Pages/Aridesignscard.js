import React from 'react';
import Card from '../Components/designstype';
import './Aridesigsncard.css'

const cardData = [
  {
    id: 1,
    title: 'Emproidry ',
    content: 'This is some sample content for the first .',
    imageUrl: 'https://via..com/150',
  },
  {
    id: 2,
    title: 'Bridel',
    content: 'This is some sample content for the second .',
    imageUrl: 'https://via..com/150',
  },
  {
    id: 3,
    title: 'Salwar',
    content: 'This is some sample content for the third .',
    imageUrl: 'https://via..com/150',
  },
];

function App() {
  return (
    <div className="App">
      <h1> <span> Products</span></h1>
      <div className="card-container">
        {cardData.map(card => (
          <Card
            key={card.id}
            title={card.title}
            content={card.content}
            imageUrl={card.imageUrl}
          />    
        ))}
      </div>
    </div>
  );
}

export default App;
