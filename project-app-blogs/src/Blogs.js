import React from "react";
import { arrBlogs } from "./Constant";
import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="cards-container">
      <h2>BLOGS (Application)</h2>
      <div className="cards">
        {arrBlogs.map((blog, index) => {
          return (
            <div className="card">
              <Link
                to={{
                  pathname: `/blogdetail/${blog.blogID}`,
                  id: blog.blogID,
                  item: blog,
                }}
              >
                <div class="card-body">
                  <h5 class="card-title">{`#${blog.blogID}`}</h5>
                  <p class="card-text">{blog.blogName}</p>
                  <p class="card-text">{blog.blogDetail}</p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
