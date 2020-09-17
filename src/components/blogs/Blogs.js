import React from "react";
import BlogCard from "./BlogCard";
const Blogs = () => {
  return (
    <>
      <div className="display-3">Blog Section</div>
      <div className="row">
        <div className="col-lg-4">
          <BlogCard />
        </div>
        <div className="col-lg-4">
          <BlogCard />
        </div>
        <div className="col-lg-4">
          <BlogCard />
        </div>
      </div>
    </>
  );
};

export default Blogs;
