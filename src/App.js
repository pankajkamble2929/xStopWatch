import React, { useState, useEffect } from "react";

const App = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // Timer logic
  useEffect(() => {
    let interval = null;

    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  // Format time into M:SS
  const formatTime = () => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "60px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>Stopwatch</h1>

      <h2>Time: {formatTime()}</h2>

      <div style={{ marginTop: "20px" }}>
        {!isRunning ? (
          <button
            onClick={() => setIsRunning(true)}
            style={{ padding: "8px 18px", marginRight: "10px" }}
          >
            Start
          </button>
        ) : (
          <button
            onClick={() => setIsRunning(false)}
            style={{ padding: "8px 18px", marginRight: "10px" }}
          >
            Stop
          </button>
        )}

        <button
          onClick={() => {
            setIsRunning(false);
            setSeconds(0);
          }}
          style={{ padding: "8px 18px" }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default App;
