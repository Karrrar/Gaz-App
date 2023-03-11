import React, { useState } from "react";
import { Counter } from "./Counter";

function outfn() {
  return Math.floor(Math.random() * (10 - 1) + 1);
}

export default function InternetSpeedCaluclator() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const incressby = 10;

  const fn = () => {
    setCounter(counter + incressby);
    setCounter2(outfn() + counter2);
  };

  return (
    <>
      <button onClick={fn}>Click Me</button>
      <br />
      <text>Incress By: {incressby}</text>
      <br />
      <br />

      <Counter counter={counter2} />
      <Counter counter={counter} />
    </>
  );
}
