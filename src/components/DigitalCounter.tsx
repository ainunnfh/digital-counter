import React, { useState } from "react";

const DigitalCounter = () => {
  const [count, setCount] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  const playSound = () => {
    const audio = new Audio("click-sound.mp3");
    audio.play();
    setIsClicked(true);
    audio.onended = () => {
      setIsClicked(false);
    };
  };
  const [reset, setIsReset] = useState(false);
  const resetSound = () => {
    const audio = new Audio("reset-sound.mp3");
    audio.play();
    setIsReset(true);
    audio.onended = () => {
      setIsReset(false);
    };
  };

  const handleButtonClick = () => {
    setCount(count + 1);
  };
  return (
    <div className="bg-slate-300 h-screen content-center">
      <div>
        <h1 className="text-8xl font-bold text-center">{count}</h1>
        <h3 className="text-2xl font-bold text-center">
          <span className="">times</span>
        </h3>
      </div>

      <div className="flex justify-center items-center mt-7">
        <div className="flex justify-between">
          <button
            className="rounded-full bg-slate-700 w-32 h-32"
            onClick={() => {
              playSound();
              handleButtonClick();
            }}
          ></button>
          <button
            className="rounded-full w-12 h-12 bg-slate-700"
            onClick={() => {
              setCount(0);
              resetSound();
            }}
          ></button>
        </div>
      </div>
    </div>
  );
};

export default DigitalCounter;
