import React from "react";

const BlogCard = () => {
  return (
    <div className="card" style={{ height: "120px" }}>
      <img
        className="card-img-top"
        src="https://picsum.photos/id/237/200/300"
        alt="Card image cap"
        style={{ height: "120px", objectFit: "contain" }}
      />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This card has even longer content than the
          first to show that equal height action.
        </p>
        <p className="card-text">
          <small className="text-muted">Last updated 3 mins ago</small>
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
