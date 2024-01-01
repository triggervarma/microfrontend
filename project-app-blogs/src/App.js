import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blogs from "./Blogs";
import BlogDetail from "./BlogDetail";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Blogs />} />
        <Route exact path="/blogdetail/:blogid" element={<BlogDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
