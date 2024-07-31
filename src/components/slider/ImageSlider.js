// src/components/ImageSlider.js
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const ImageSlider = ({ images, width = '100%', height = '12rem' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div style={{ ...styles.sliderContainer, width, height }}>
      <div style={{ ...styles.slider, width, height, transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((imgSrc, index) => (
          <img
            key={index}
            src={imgSrc}
            alt={`Slide ${index}`}
            style={{ ...styles.slideImage, width, height }}
          />
        ))}
      </div>
    </div>
  );
};

const styles = {
  sliderContainer: {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
  slider: {
    display: 'flex',
    transition: 'transform 0.5s ease-in-out',
  },
  slideImage: {
    minWidth: '100%',
    objectFit: 'cover',
  },
};

ImageSlider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default ImageSlider;
