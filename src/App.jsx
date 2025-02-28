import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LaiXuat from "./LaiXuat/LaiXuat";
import { Routes, Route } from "react-router-dom";
import Chefify from "./Chefify/Chefify";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Chefify />} />
      </Routes>
    </div>
  );
}

export default App;
