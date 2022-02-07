import React, { useState, useRef } from "react";
import { useIntersection } from "./../hooks/useIntersection";
import "./../styles/image-renderer.css";

const ImageRenderer = ({ url, thumb, width, height, customClass = "", title = "Element image" }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef();
  useIntersection(imgRef, () => {
    setIsInView(true);
  });

  const handleOnLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div
      className="image-container"
      ref={imgRef}
      style={{
        paddingBottom: `${(height / width) * 100}%`,
        width: "100%",
      }}
    >
      {isInView && (
        <>
          <img
            className={`image thumb ${!!isLoaded ? "isLoaded" : ""} ${customClass}`}
            src={thumb}
            alt={title}
          />
          <img
            className={`image ${!!isLoaded ? "isLoaded" : ""} ${customClass}`}
            src={url}
            onLoad={handleOnLoad}
            alt={title}
          />
        </>
      )}
    </div>
  );
};

export default ImageRenderer;
