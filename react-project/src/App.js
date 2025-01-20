import React, { useState } from 'react';
import './App.css';
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";

function App() {
  // Initialize the page number in state
  const [pageNumber, setPageNumber] = useState(1);

  // Update the page number when the left arrow is clicked
  const handleLeftClick = () => {
    setPageNumber(prevPage => prevPage + 1);
  };

  // Update the page number when the right arrow is clicked
  const handleRightClick = () => {
    if (pageNumber > 1) {
      setPageNumber(prevPage => prevPage - 1);
    }
  };

  return (
    <>

      <section>
        <head>
            <meta charset="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>Embed External Link</title>
        </head>
        <body>
          <iframe 
              src={`https://www.easyquran-eg.com/qrhafs/page/${pageNumber}`} 
              width="100%" 
              height="800" 
              frameborder="0"
              title="Quran Page">
          </iframe>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px'}}>
            <FaArrowCircleLeft 
              style={{ fontSize: '50px', cursor: 'pointer' }} 
              onClick={handleLeftClick} 
            />
            <h5 style={{ fontSize:'16px', textAlign: 'center' }}><b>Page {pageNumber}</b></h5>
            <FaArrowCircleRight 
              style={{ fontSize: '50px', cursor: 'pointer' }} 
              onClick={handleRightClick} 
            />
          </div>
        </body>
      </section>
    </>
  );
}

export default App;
