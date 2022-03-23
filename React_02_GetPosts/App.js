import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import MainBody from "./Components/MainBody";

function App() {
  const [JsonArray, setJsonArray] = useState([]);
  // usestate initial value with bracket. best practice

  return (
    <div className="App">
      <Navbar setJsonArray={setJsonArray} />
      <MainBody JsonArray={JsonArray} />
    </div>
  );
}

export default App;
