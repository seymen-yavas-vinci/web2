import { useState } from "react";
import "./ColorBox.css";

const colors = ["red", "green", "blue", "yellow", "purple"];

const ColorBox = () => {
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  const getNextIndex = () => currentColorIndex === colors.length - 1 ? 0 : currentColorIndex + 1;

  const handleClick = () => {
    setCurrentColorIndex(getNextIndex());
  };

  return (
    <div
      className="color-box"
      style={{ backgroundColor: colors[currentColorIndex] }}
    >
      <button
        className="color-box__button"
        onClick={handleClick}
      >
        {colors[getNextIndex()]}
      </button>
      <h3>{colors[currentColorIndex]}</h3>
    </div>
  );
};

export default ColorBox;