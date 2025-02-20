import { useEffect, useState } from "react";

const GlowEffect = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="glow"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        position: "absolute",
        pointerEvents: "none", // Prevent interaction
      }}
    />
  );
};

export default GlowEffect;
