import React, { useState } from "react";
import logo from "../logo.svg";

export const Watcher = () => {
  const [selectedWatcher, setSelectedWatcher] = useState("");

  const whoIs = () => {
    const watchers = [
      "Patrícia",
      "Josef",
      "Dan",
      "Stanislav",
      "Martin",
      "Jan",
      "Karel",
      "Leon",
      "Veronika",
    ];
    const newWatcher = watchers[Math.floor(Math.random() * watchers.length)];
    setSelectedWatcher(newWatcher);
  };

  return (
    <div>
      <a href="#" onClick={whoIs}>
        <img src={logo} className="App-logo" id="logo" alt="logo" />
      </a>

      <p>{selectedWatcher}</p>
    </div>
  );
};
