import React from "react"
import {Link} from "react-scroll"
// import Logo from "./Logo.svg"
import "../../../node_modules/bootstrap/dist/js/bootstrap"
import "./Header.css"


export const Header = () => {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link to="Home" offset={-120} className="navbar-brand d-flex align-items-end">
          {/* <img src={Logo} alt="Logo" width="20" height="24" className="d-inline-block align-text-top" style={{margin: "2px"}} /> */}
          My Portfolio.</Link>
        <button className="navbar-toggler" type="button"  data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarToggler">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="Home" offset={-120} activeClass="active" spy={true} className="nav-link text-center">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="About" offset={-130} activeClass="active" spy={true} className="nav-link text-center">About</Link>
            </li>
            <li className="nav-item">
              <Link to="Skills" offset={-75} activeClass="active" spy={true} className="nav-link text-center">Skills</Link>
            </li>
            <li className="nav-item">
              <Link to="Resume" offset={-145} activeClass="active" spy={true} className="nav-link text-center">Resume</Link>
            </li>
            <li className="nav-item">
              <Link to="Contact" offset={-110} activeClass="active" spy={true} className="nav-link text-center">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}
