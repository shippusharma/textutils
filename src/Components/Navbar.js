import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <b>{props.title}</b>
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
                        <li className="nav-item active">
                            <Link className="nav-link " aria-current="page" to="/">
                                <i className="bi bi-house-fill"></i> Home
                            </Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/about">
                                About
                            </Link>
                        </li>
                    </ul>
                    {/* <form className="d-flex">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button className="btn btn-outline-warning" type="submit">
                            Search
                        </button>
                    </form> */}
                    {/* darkmode  */}
                    <div className={`form-check form-switch text-${props.mode === 'light' ? "dark" : "light"} mx-3`}>
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="darkMode" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
                    </div>

                </div>
            </div>
        </nav>
    )
}

// using PropTypes

Navbar.prototype = { title: PropTypes.string.isRequired, aboutText: PropTypes.string.isRequired }