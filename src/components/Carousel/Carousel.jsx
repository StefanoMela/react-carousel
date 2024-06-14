import { useState, useEffect } from 'react';
import "./Carousel.css";

function Carousel({ elements }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(null);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(() => {
        setActiveSlide(prev => (reverse ? (prev - 1 + elements.length) % elements.length : (prev + 1) % elements.length));
      }, 2500);
      return () => clearInterval(interval);
    }
  }, [autoplay, reverse, elements.length]);

  const goNext = () => {
    setActiveSlide((activeSlide + 1) % elements.length);
  };

  const goPrev = () => {
    setActiveSlide((activeSlide - 1 + elements.length) % elements.length);
  };

  const startAutoplay = () => {
    setAutoplay(true);
  };

  const stopAutoplay = () => {
    setAutoplay(false);
  };

  const reverseAutoplay = () => {
    setReverse(!reverse);
  };

  return (
    <>
      <div className="wrapper">
        <div className="buttons-container">
          <button id="start-autoplay" onClick={startAutoplay}>
            <i>icona play</i>
          </button>
          <button id="stop-autoplay" onClick={stopAutoplay}>
            <i>icona stop</i>
          </button>
          <button id="reverse-autoplay" onClick={reverseAutoplay}>
            <i>icona reverse</i>
          </button>
        </div>
        <div className="slider-container">
          <div id="slides-container" className="slides-container" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
            {elements.map((el, index) => (
              <div className={`slide ${index === activeSlide ? 'active' : ''}`} key={el.id}>
                <div className="slide-image">
                  <img src={el.image} alt="" />
                </div>
                <div className="slide-content">
                  <h3>{el.title}</h3>
                  <p>{el.content}</p>
                </div>
              </div>
            ))}
          </div>
          <div id="go-prev" className="controls arrow-left" onClick={goPrev}>
            <i>icons left</i>
          </div>
          <div id="go-next" className="controls arrow-right" onClick={goNext}>
            <i>icons right</i>
          </div>
        </div>
        <div id="thumbnails-container" className="slider-thumbnails">
          {elements.map((el, index) => (
            <div key={el.id} className={`bullet ${index === activeSlide ? 'active' : ''}`} onClick={() => setActiveSlide(index)}></div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Carousel;
