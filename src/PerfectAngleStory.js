import React, { useState } from "react";
import "./PerfectAngleStory.css"; // Optional styling for this page

const PerfectAngleStory = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  const images = [
    process.env.PUBLIC_URL + "/images/BADANGLE1.png", 
    process.env.PUBLIC_URL + "/images/BADANGLE2.png", 
    process.env.PUBLIC_URL + "/images/BADANGLE3.png", 
  ];

  const goToNext = () => {
    setCurrentImage((prev) => (prev + 1) % images.length); // Loops back to the first image
  };

  const goToPrevious = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length); // Loops to the last image
  };

  return (
    <div className="story-container">
      <h1>Perfect Angle Story</h1>
      
      <div className="story-image">
        <img src={images[currentImage]} alt="Perfect Angle Story" />
      </div>

      <div className="navigation">
        <button className="arrow prev" onClick={goToPrevious}>
          &#8592; {/* Left arrow symbol */}
        </button>
        <button className="arrow next" onClick={goToNext}>
          &#8594; {/* Right arrow symbol */}
        </button>
      </div>
    </div>
  );
};

export default PerfectAngleStory;
