import React, { useEffect, useState } from 'react';
import './carousel.css';

const Carousel = ({ images, containerStyle }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="carousel-container" style={containerStyle}>
      {images.map((image, index) => (
        <img
          key={index}
          className={`carousel-image ${index === currentIndex ? '' : 'hide'}`}
          src={image}
          alt={`Carousel Img ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default Carousel;
