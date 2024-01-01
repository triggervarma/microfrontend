import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { arrBlogs } from "./Constant";
import "./App.css";

function BlogDetail() {
  const [blogDetail, setBlogDetail] = useState({});
  const params = useParams();

  useEffect(() => {
    const blogID = parseInt(params.blogid);
    const index = arrBlogs.findIndex((blog) => blog.blogID === blogID);
    if (index !== -1) {
      setBlogDetail(arrBlogs[index]);
    }
  }, []);

  return (
    <div className="blog-details-container">
      <div>
        <div className="detail-card">
          {Object.keys(blogDetail).length > 0 && (
            <>
              <p>{`#${blogDetail.blogID}`}</p>
              <p>{blogDetail.blogName}</p>
              <p>{blogDetail.blogDetail}</p>
              <p>{blogDetail.blogURL}</p>
            </>
          )}
          {Object.keys(blogDetail).length === 0 && (
            <p>We're sorry, Cound't find Blog</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default BlogDetail;
