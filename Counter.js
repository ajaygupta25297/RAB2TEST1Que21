import React, { useState, useEffect } from "react";

const App = () => {
  const [level, setlevel] = useState(0);
  const [actionType, setActionType] = useState();
useEffect(() => {
    setInterval(() => {
      if (actionType === "increase" && level < 5) {
        setlevel((prevlevel => prevlevel+ 1));
      }
      if (actionType === "decrease" && level> 0) {
        setlevel((prevlevel) => prevlevel- 1);
      }
    }, 2000);
  }, [actionType, level]);
return (
    <div>
      <h1>check level: {level}</h1>
      <div id="login12">
        < log level={level} />
      </div>
      <div id="buttons">
        <button
          onClick={() => {
            setActionType("increase");
          }}
        >
        increase level
        </button>
        <button
          onClick={() => {
            setActionType("decrease");
          }}
        >
         decerease level
        </button>
      </div>
    </div>
  );
};
export default App;