import { useState, useEffect, useRef } from "react";

const landScapeImages = [];

const delayTimer = 1500;

const ImageSlider = () => {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  const resetTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  };

  useEffect(() => {
    resetTimer();
    timerRef.current = setTimeout(() => {
      setIndex((prevIndex) => {
        return prevIndex === landScapeImages.length - 1 ? 0 : prevIndex + 1;
      });
    }, delayTimer);

    return () => {
      resetTimer();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div className="slideshowSlider">
        {landScapeImages.map((backgroundImg, index) => (
          <div className="slide" key={index}>
            {backgroundImg}
          </div>
        ))}
      </div>

      <div className="slideshowDots">
        {landScapeImages.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
