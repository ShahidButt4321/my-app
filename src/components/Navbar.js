import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const handleRed = () => {
    if (props.mode === "light") {
      document.body.style.backgroundColor = "#f04a3e";
    } else {
      document.body.style.backgroundColor = "#3d0905";
    }
  };
  const handleYellow = () => {
    if (props.mode === "light") {
      document.body.style.backgroundColor = "#e5e843";
    } else {
      document.body.style.backgroundColor = "#6b5f0d";
    }
  };
  const handleGreen = () => {
    if (props.mode === "light") {
      document.body.style.backgroundColor = "#53b848";
    } else {
      document.body.style.backgroundColor = "#14400f";
    }
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/About">
                About Text
              </Link>
            </li>
          </ul>

          <div
            class="btn-group"
            role="group"
            aria-label="Basic mixed styles example"
          >
            <button
              type="button"
              className="btn btn-danger mx-1"
              onClick={handleRed}
            >
              Red
            </button>
            <button
              type="button"
              className="btn btn-warning mx-1"
              onClick={handleYellow}
            >
              Yellow
            </button>
            <button
              type="button"
              className="btn btn-success mx-1"
              onClick={handleGreen}
            >
              Green
            </button>
          </div>
          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Enable DarkMode
            </label>
          </div>
          {/*<form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-primary" type="submit">
              Search
            </button>
  </form>*/}
        </div>
      </div>
    </nav>
  );
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  About: PropTypes.string,
};
