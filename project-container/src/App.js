import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MicroFrontend from "./MicroFrontend";

import "./App.css";

const { REACT_APP_HEADER_HOST: headerHost, REACT_APP_BLOGS_HOST: blogHost } =
  process.env;

function Header({ history }) {
  return <MicroFrontend history={history} host={headerHost} name="Header" />;
}

function Blogs({ history }) {
  return <MicroFrontend history={history} host={blogHost} name="Blogs" />;
}

function BlogDetail({ history }) {
  return (
    <div>
      <MicroFrontend history={history} host={blogHost} name="Blogs" />
    </div>
  );
}

function Home() {
  return (
    <div className="container">
      <div className="blogs-header">
        <Header />
      </div>
      <div className="blogs">
        <Blogs />
      </div>
    </div>
  );
}

function App() {
  console.log("app container is calling");
  return (
    <BrowserRouter>
      <React.Fragment>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/blogdetail/:blogid" element={<BlogDetail />} />
        </Routes>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
