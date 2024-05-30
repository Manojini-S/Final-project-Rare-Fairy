// import React from 'react';
// import Card from '../Components/designstype';
// import './Aridesigsncard.css';
// import Navbar from '../Components/Navbar';

// function App() {
//   const categoryNames = ["Emproidry", "Bridel", "Salwar Designs", "Legenha designs", "Zardosi designs", "Simple blouse designs"];
//   return (
//     <>
//       <Navbar />
//       <div className="App">
//         <h1> <span> Products</span></h1>
//         <div className="card-container">
//           {categoryNames.map((category, index) => (
//             <Card
//               key={index}
//               title={category}
//               content={`This is some sample content for ${category}.`}
//               imageUrl={`https://via.placeholder.com/150?text=${category}`} 
              
              
//             />

            
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }



// export default App;


import React from 'react';
import Card from '../Components/designstype';
import './Aridesigsncard.css';
import Navbar from '../Components/Navbar';

function App() {
  const categoryData = [
    { name: "Emproidry", imageUrl: "https://i.pinimg.com/236x/22/1d/4e/221d4e2038c4a75e61c499c5bf32cb07.jpg" },
    { name: "Bridel", imageUrl: "https://images.shaadisaga.com/shaadisaga_production/photos/pictures/000/905/792/new_medium/focuz_studios.jpg?1559826821" },
    { name: "Salwar Designs", imageUrl: "https://i.etsystatic.com/21535407/r/il/09cc9d/2954063995/il_570xN.2954063995_k0gk.jpg" },
    { name: "Legenha designs", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9CbUX8EHUORy7PwOKTKvjas_vwJgL4mEWuw&amp;s" },
    { name: "Zardosi designs", imageUrl: "https://i.pinimg.com/736x/f7/05/0f/f7050fe1a367bfd4c611ea0573d146fd.jpg"   },
    { name: "Simple blouse ", imageUrl: "https://i.pinimg.com/236x/8b/be/78/8bbe78d981c884a36c1e99fb06365003.jpg" }
   
  ];

 return (
    <>
      <Navbar />
      <div className="App">
        <h1>  <span> Products</span></h1>
        <div className="card-container">
          {categoryData.map((category, index) => (
            <Card
              key={index}
              title={category.name}
              content={`This is some sample content for ${category.name}.`}
              imageUrl={category.imageUrl} 
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;



