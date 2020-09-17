import React, { useState } from "react";
import Podcasts from "./Podcasts";
import Blogs from "./blogs/Blogs";
import Videos from "./Videos";
import Login from "./Login";
import Register from "./Register";
import { BrowserRouter, Route, Link } from "react-router-dom";
const Header = () => {
  const [active, setactive] = useState("Blogs");
  return (
    <>
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand " to="/">
            TETLUX{" "}
            <span className="" style={{ color: "#007BFF" }}>
              {active}
            </span>
          </Link>
          <form className="navbar-nav">
            <div className="input-group ">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
              />
              <div className="input-group-btn mx-1">
                <button className="btn btn-info " type="submit">
                  search
                </button>
              </div>
            </div>
          </form>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <Link className="nav-item " to="/login">
                <a className="nav-link" href="#">
                  Login
                </a>
              </Link>
              <Link className="nav-item " to="/register">
                <a className="nav-link" href="#">
                  Logout
                </a>
              </Link>
            </ul>
          </div>
        </nav>
        <div className="container-fluid mt-4">
          <div className="row">
            <div class="col-lg-2">
              <ul class="list-group">
                <Link
                  onClick={() => setactive("Blogs")}
                  to="/"
                  className={
                    "list-group-item " + (active == "Blogs" ? "active" : "")
                  }
                >
                  Blogs
                </Link>
                <Link
                  onClick={() => setactive("Podcasts")}
                  to="/podcasts"
                  className={
                    "list-group-item " + (active == "Podcasts" ? "active" : "")
                  }
                >
                  Podcasts
                </Link>
                <Link
                  onClick={() => setactive("Videos")}
                  to="/videos"
                  className={
                    "list-group-item " + (active == "Videos" ? "active" : "")
                  }
                >
                  Videos
                </Link>
              </ul>
            </div>
            <div class="col-lg-7">
              <Route exact path="/">
                <Blogs />
              </Route>
              <Route path="/podcasts">
                <Podcasts />
              </Route>
              <Route path="/videos">
                <Videos />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/register">
                <Register />
              </Route>
            </div>
            <div class="col-lg-2 ">ads</div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
};

export default Header;
