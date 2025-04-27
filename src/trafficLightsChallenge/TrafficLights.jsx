import React, { useEffect, useState } from "react";

const TrafficLights = () => {
  const [step, setStep] = useState(1);

  useEffect(() => {
    let timer;

    if (step === 1) {
      timer = setTimeout(() => setStep(2), 60000);
    }
    if (step === 2) {
      timer = setTimeout(() => setStep(3), 30000);
    }
    if (step === 3) {
      timer = setTimeout(() => setStep(1), 10000);
    }

    return () => clearTimeout(timer);
  }, [step]);

  return (
    <div className="w-full min-h-screen bg-gray-900 text-black p-40 flex flex-col items-center justify-center gap-10">
      <div className="flex flex-col items-center gap-2">
        <div
          className={`w-14 h-14 bg-red-600 rounded-full ${
            step === 2 ? "opacity-100" : "opacity-30"
          }`}
        />
        <div
          className={`w-14 h-14 bg-green-600 rounded-full ${
            step === 1 ? "opacity-100" : "opacity-30"
          }`}
        />
        <div
          className={`w-14 h-14 bg-yellow-500 rounded-full ${
            step === 3 ? "opacity-100" : "opacity-30"
          } `}
        />
      </div>

      <button
        type="button"
        className="bg-gray-300 px-4 py-2 rounded-md font-semibold text-sm"
      >
        Change Lights
      </button>
    </div>
  );
};

export default TrafficLights;

// Create a traffic light component with green, yellow, and red lights.
// On clicking a button, the light should change.
// Initially, it should show green. After 2 minutes, it should automatically switch to red for 30 seconds, then yellow for 10 seconds,
// and repeat this cycle continuously.
