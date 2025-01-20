import React, { useState } from 'react';
import './App.css';
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const App = () => {
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
    <div>
      <iframe 
          src={`https://www.easyquran-eg.com/qrhafs/page/${pageNumber}`} 
          width="100%" 
          height="800" 
          frameBorder="0"
          title="Quran Page">
      </iframe>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px'}}>
        <FaArrowCircleLeft 
          style={{ fontSize: '50px', cursor: 'pointer' }} 
          onClick={handleLeftClick} 
        />
        <h5 style={{ fontSize:'16px', textAlign: 'center' }}>
          <b>Page {pageNumber}</b>
        </h5>
        <FaArrowCircleRight 
          style={{ fontSize: '50px', cursor: 'pointer' }} 
          onClick={handleRightClick} 
        />
      </div>
    </div>
  );
}

export default App;
