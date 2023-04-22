import React from "react";
import Mainpage from "./Mainpage";
import './App.css';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="*" element={<Mainpage />} />
      </Routes>         
    </div>
  );
}

export default App;
