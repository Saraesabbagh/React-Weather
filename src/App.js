import React from "react";

import WeatherSearch from "./WeatherSearch";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Search your Weather</h1>
        <WeatherSearch />
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
