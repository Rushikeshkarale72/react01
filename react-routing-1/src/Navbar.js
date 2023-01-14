import React from "react";
import { Link } from "react-router-dom";
import logo from "../src/images/logo.png";
const Navbar = () => {
  return (
    <div className="col-10 mx-auto">
      <div className="row">
        <nav className="navbar navbar-expand-lg navbar-light pt-4">
          <div className="container-fluid">
            <div className="col-2">
              <Link className="navbar-brand" to="/">
                <img src={logo} alt="logo" width="130" height="70" />
              </Link>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="col-6">
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item me-4">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item me-4">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/about"
                    >
                      About
                    </Link>
                  </li>
                  <li className="nav-item me-4">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/project"
                    >
                      Project
                    </Link>
                  </li>
                  <li className="nav-item me-4">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/service"
                    >
                      Service
                    </Link>
                  </li>
                  <li className="nav-item me-4">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/blog"
                    >
                      Blog
                    </Link>
                  </li>
                  <li className="nav-item me-4">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/contact"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-2">
              <button type="button" className="btn btn-primary buto">
                <Link
                  className="nav-link active text-light"
                  aria-current="page"
                  to="/contact"
                >
                  Enquire Now
                </Link>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;