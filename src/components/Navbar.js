import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
export default function Navbar(props) {
  return (
    // <nav className="navbar navbar-expand-lg navbar-light bg-light">
    // <nav id="navbar" className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <nav id="navbar" className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className={`navbar-brand text-${props.txtMode}`} to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {<Link className={`nav-link active text-${props.txtMode}`} aria-current="page" to="/">Home</Link>}
            </li> 
            <li className="nav-item">
              {<Link  className={`nav-link active text-${props.txtMode}`} to="/about">{props.aboutTxt}</Link>}
            </li>
          </ul>
          <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
              <input type="button" id="btn1" className="btn btn-primary" onClick={props.toogleMode} value="Blue"/>
              <input type="button" id="btn3" className="btn btn-success" onClick={props.toogleMode} value="Green"/>
              <input type="button" id="btn4" className="btn btn-danger" onClick={props.toogleMode} value="Red"/>
              <input type="button" id="btn5" className="btn btn-warning" onClick={props.toogleMode} value="Yellow"/>
              <input type="button" id="btn7" className="btn btn-light" onClick={props.toogleMode} value="Light"/>
              <input type="button" id="btn8" className="btn btn-dark" onClick={props.toogleMode} value="Dark"/>
          </div>
          {/* <div className={`form-check form-switch text-${props.txtMode}`}>
            <input className="form-check-input" type="checkbox" onClick={props.toogleMode} role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
          </div> */}
          {/* <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-primary" type="submit">Search</button>
          </form> */}
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes={
    title:PropTypes.string.isRequired,
    aboutTxt:PropTypes.string
}

// Navbar.defaultProps = {
//     title:'Set Title Here',
//     aboutTxt:'Set About Text Here'
//   };
