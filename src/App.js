import React, { useState } from 'react';
import './App.css';
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import TextField from '@mui/material/TextField';

const App = () => {
  // Initialize the page number in state
  const [pageNumber, setPageNumber] = useState(1);
  const [inputValue, setInputValue] = useState('1');

  // Update the page number when the left arrow is clicked
  const handleLeftClick = () => {
    if (pageNumber < 604) {
      setPageNumber(prevPage => {
        const newPage = prevPage + 1;
        setInputValue(newPage.toString());
        return newPage;
      });
    }
  };

  // Update the page number when the right arrow is clicked
  const handleRightClick = () => {
    if (pageNumber > 1) {
      setPageNumber(prevPage => {
        const newPage = prevPage - 1;
        setInputValue(newPage.toString());
        return newPage;
      });
    }
  };

  // Handle input change
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Handle "Enter" key press to set page number
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      const newPageNumber = parseInt(inputValue, 10);
      if (!isNaN(newPageNumber) && newPageNumber >= 1 && newPageNumber <= 604) {
        setPageNumber(newPageNumber);
      } else {
        alert('Please enter a valid page number between 1 and 604.');
        setInputValue(pageNumber.toString()); // Reset to current page if invalid
      }
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

      <div style={{ gap: '10px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
          <FaArrowCircleLeft 
            style={{ fontSize: '50px', cursor: 'pointer' }} 
            onClick={handleLeftClick} 
          />

          <TextField
            value={inputValue}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            variant="outlined"
            size="small"
            style={{ width: '100px', textAlign: 'center' }}
            inputProps={{
              style: { textAlign: 'center' },
              inputMode: 'numeric', 
              pattern: '[0-9]*'
            }}
          />

          <FaArrowCircleRight 
            style={{ fontSize: '50px', cursor: 'pointer' }} 
            onClick={handleRightClick} 
          />
        </div>
      </div>
    </div>
  );
}

export default App;
