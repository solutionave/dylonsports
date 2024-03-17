import clsx from "clsx";
import React, { useEffect, useState } from "react";

const Carousel = () => {
  const Images = [
    "https://source.unsplash.com/Qh9Swf_8DyA",
    "https://source.unsplash.com/O453M2Liufs",
  ];
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const carousel = document.getElementById("carouselImage");
      if (!carousel) return;
      carousel.setAttribute("style", "opacity:0");

      setTimeout(() => {
        if (activeImageIndex < Images.length - 1) {
          setActiveImageIndex(activeImageIndex + 1);
        } else {
          setActiveImageIndex(0);
        }
        setTimeout(() => {
          carousel.setAttribute("style", "opacity:1");
        }, 500);
      }, 500);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [activeImageIndex]);

  return (
    <div>
      <div>{activeImageIndex}</div>
      <div className="min-h-[60vh] bg-black relative flex items-center justify-center">
        <img
          id="carouselImage"
          src={Images[activeImageIndex]}
          alt=""
          className={clsx([
            "object-cover object-center min-w-[80%] h-[60vh]",
            "transition-all duration-500",
          ])}
        />
        <div
          className={clsx([
            "absolute left-0 right-0 h-full",
            "flex items-center justify-center",
            "bg-gradient-to-r from-black via-transparent  to-black",
          ])}
        />
      </div>
    </div>
  );
};

export default Carousel;
