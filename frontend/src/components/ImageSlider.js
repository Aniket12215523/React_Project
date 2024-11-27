// src/components/ImageSlider.js
import React, { useState, useEffect, useCallback } from 'react';
import bannerImage1 from '../images/banners/image1.png';
import bannerImage2 from '../images/banners/image2.png';
import bannerImage3 from '../images/banners/image3.png';
import './ImageSlider.css';

const images = [bannerImage1, bannerImage2, bannerImage3];

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = useCallback(() => setCurrent((current + 1) % images.length), [current]);
  const prevSlide = () => setCurrent((current - 1 + images.length) % images.length);
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); 
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="slider">
      <button onClick={prevSlide} className="slider-button">❮</button>
      <img src={images[current]} alt="Slide" className="slider-image" />
      <button onClick={nextSlide} className="slider-button">❯</button>
    </div>
  );
};

export default ImageSlider;
