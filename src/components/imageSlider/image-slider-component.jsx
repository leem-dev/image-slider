import { useState } from "react";
import images from "../../images/images";
import { faArrowAltCircleRight, faArrowAltCircleLeft } from "react-icons/fa";

const ImageSlider = ({ slides }) => {
  const [img, setImg] = useState(0);
  const length = slides.length;

  const nextSlideImage = () => {
    setImg(img === length - 1 ? 0 : img + 1);
  };

  const prevSlideImage = () => {
    setImg(img === 0 ? length - 1 : img - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) return null;

  return (
    <section className="slideshow">
      <faArrowAltCircleLeft className="left-arrow" onClick={prevSlideImage} />
      <faArrowAltCircleRight className="right-arrow" onClick={nextSlideImage} />

      {images.map((slide, index) => {
        return (
          <div
            className={index.id === img ? "slide active" : "slide"}
            key={index.id}
          >
            {index.id === img && (
              <img src={slide.src} alt={slide.description} className="image" />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
