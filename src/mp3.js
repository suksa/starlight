import React from "react";
import ByulbitMp3 from "./byulbit.mp3";

const Mp3 = () => {
  return (
    <>
      <audio
        id="player"
        autoPlay={true}
        loop={true}
        controls={true}
        style={{ display: "none" }}
      >
        <source src={ByulbitMp3} type="audio/mp3" />
      </audio>
    </>
  );
};

export default Mp3;
