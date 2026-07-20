"use client";

import { useState, useEffect } from "react";

interface ImageSliderProps {
  images: string[];
  altPrefix: string;
}

export default function ImageSlider({ images, altPrefix }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  if (images.length === 0) return null;
  if (images.length === 1) {
    return (
      <img
        src={images[0]}
        alt={altPrefix}
        className="product-image"
      />
    );
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div style={{ position: "relative" }}>
      <img
        src={images[currentIndex]}
        alt={`${altPrefix} - View ${currentIndex + 1}`}
        className="product-image"
      />
      <button
        onClick={handlePrev}
        style={{
          position: "absolute",
          left: "10px",
          top: "50%",
          transform: "translateY(-50%)",
          background: "transparent",
          color: "var(--steel)",
          border: "none",
          fontSize: "24px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 10,
          fontFamily: "var(--font-mono)",
          padding: "5px",
        }}
        aria-label="Previous image"
      >
        ←
      </button>
      <button
        onClick={handleNext}
        style={{
          position: "absolute",
          right: "10px",
          top: "50%",
          transform: "translateY(-50%)",
          background: "transparent",
          color: "var(--steel)",
          border: "none",
          fontSize: "24px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 10,
          fontFamily: "var(--font-mono)",
          padding: "5px",
        }}
        aria-label="Next image"
      >
        →
      </button>
      <div
        style={{
          position: "absolute",
          bottom: "10px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "6px",
          zIndex: 10,
        }}
      >
        {images.map((_, idx) => (
          <div
            key={idx}
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: idx === currentIndex ? "var(--amber)" : "rgba(43, 58, 74, 0.4)",
              border: "1px solid rgba(43, 58, 74, 0.2)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
