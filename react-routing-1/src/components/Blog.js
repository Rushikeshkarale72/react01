import React from "react";
import blog from "../images/blog.webp";
const Blog = () => {
  return (
    <div className="col-8 mx-auto mt-5">
      <p className="about">More Stories</p>
      <img src={blog} alt="blog" />
      <p className="title mt-4">This is a title</p>
      <p>December 14, 2022</p>
    </div>
  );
};

export default Blog;