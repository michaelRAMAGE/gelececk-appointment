import React, { useState } from "react";
import "./FishShortStory.css"; // We'll add some custom styles here

const FishShortStory = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  const images = [
    process.env.PUBLIC_URL + "/images/comicfish1.png", 
    process.env.PUBLIC_URL + "/images/comicfish2.png"
  ];

  const goToNext = () => {
    setCurrentImage((prev) => (prev + 1) % images.length); // Loops back to the first image
  };

  const goToPrevious = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length); // Loops to the last image
  };

  return (
    <div className="story-container">
    <h3>all you gotta do is click the arrow tbh. i am halfway the artist btw (the sad face on you the woman) and the tears on me</h3>
      <div className="story-image">
        <img src={images[currentImage]} alt="Fish Story" />
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

export default FishShortStory;
