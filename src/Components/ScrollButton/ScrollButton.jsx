import React, { useState, useEffect } from 'react';
import style from './ScrollButton.module.css'
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);


  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className={style.scrollTotop}>
      {isVisible && 
        <button onClick={scrollToTop} className={style.scrollButton}>
          ↑
        </button>
      }
    </div>
  );
};

export default ScrollToTopButton;