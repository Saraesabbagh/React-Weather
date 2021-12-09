import React from "react";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello from React</h1>
        <Weather city="London" />
        <p>
          Coded by Sara Sabbagh with open sourced code on my{" "}
          <a href="https://github.com/Saraesabbagh/React-Weather">github </a>{" "}
          and hosted on netlify
        </p>
      </header>
    </div>
  );
}

export default App;
