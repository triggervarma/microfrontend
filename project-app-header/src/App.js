import React from "react";
import "./App.css";

function App() {
  return (
    <div className="header">
      <div className="logo">
        <p className="logo-text">BLOGS</p>
        <p className="logo-subtext">(Header Application)</p>
      </div>
      <nav className="navbar">
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="/">Home</a>
          </li>
          <li className="nav-item">
            <a href="/about">About</a>
          </li>
          <li className="nav-item">
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
