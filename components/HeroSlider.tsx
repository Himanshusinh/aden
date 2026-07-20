"use client";

import { useState, useEffect } from "react";

interface Slide {
  src: string;
  title: string;
  subtitle: string;
}

interface HeroSliderProps {
  slides: Slide[];
}

export default function HeroSlider({ slides }: HeroSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = setInterval(() => {
      if (!isHovered) {
        setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      }
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length, isHovered]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  if (slides.length === 0) return null;

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: "4/3",
        overflow: "hidden",
        boxShadow: "0 20px 40px rgba(20, 24, 29, 0.15)",
        border: "1px solid var(--silver)"
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {slides.map((slide, idx) => (
        <div
          key={idx}
          style={{
            position: "absolute",
            inset: 0,
            opacity: idx === currentIndex ? 1 : 0,
            transition: "opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
            zIndex: idx === currentIndex ? 1 : 0,
          }}
        >
          <img
            src={slide.src}
            alt={slide.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transform: idx === currentIndex ? "scale(1)" : "scale(1.05)",
              transition: "transform 4s ease-out",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to top, rgba(20, 24, 29, 0.8) 0%, rgba(20, 24, 29, 0.2) 40%, transparent 100%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              padding: "24px 32px",
              color: "var(--white)",
              transform: idx === currentIndex ? "translateY(0)" : "translateY(10px)",
              opacity: idx === currentIndex ? 1 : 0,
              transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.2s",
            }}
          >
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--amber)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "4px" }}>
              {slide.subtitle}
            </div>
            <h3 style={{ margin: 0, fontSize: "22px", color: "var(--white)", textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}>
              {slide.title}
            </h3>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        style={{
          position: "absolute",
          left: "16px",
          top: "50%",
          transform: `translateY(-50%) translateX(${isHovered ? '0' : '-20px'})`,
          opacity: isHovered ? 1 : 0,
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(8px)",
          color: "var(--white)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 10,
          transition: "all 0.3s ease",
        }}
        onMouseOver={(e) => e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)"}
        onMouseOut={(e) => e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)"}
        aria-label="Previous image"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
      </button>

      <button
        onClick={handleNext}
        style={{
          position: "absolute",
          right: "16px",
          top: "50%",
          transform: `translateY(-50%) translateX(${isHovered ? '0' : '20px'})`,
          opacity: isHovered ? 1 : 0,
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(8px)",
          color: "var(--white)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 10,
          transition: "all 0.3s ease",
        }}
        onMouseOver={(e) => e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)"}
        onMouseOut={(e) => e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)"}
        aria-label="Next image"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
      </button>

      {/* Progress Line */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "3px",
          background: "rgba(255, 255, 255, 0.2)",
          zIndex: 10,
          display: "flex"
        }}
      >
        {slides.map((_, idx) => (
          <div
            key={idx}
            style={{
              flex: 1,
              height: "100%",
              background: idx === currentIndex ? "var(--amber)" : "transparent",
              transition: "background 0.3s ease",
            }}
          />
        ))}
      </div>
    </div>
  );
}
