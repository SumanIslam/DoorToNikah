/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={{background: '#fff'}}>
      <div className="container container-fluid d-flex justify-content-between">
        {/* main logo */}
        <a className="navbar-brand fs-2 fw-bold" href="/" style={{color: '#522b79'}}><span style={{color: '#ad277c'}}>DoorTo</span>Nikah</a>
        {/* navbar toggler */}
        <div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse right" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item fw-semibold">
                <a className="nav-link" aria-current="page" href="#" style={{color: '#522b79'}}>Home</a>
              </li>
              <li className="nav-item fw-semibold">
                <a className="nav-link" href="#" style={{color: '#522b79'}}>About Us</a>
              </li>
              <li className="nav-item fw-semibold">
                <a className="nav-link" href="#" style={{color: '#522b79'}}>
                  Q/A
                </a>
              </li>
              <li className="nav-item fw-semibold">
                <a className="nav-link" href="#" style={{color: '#522b79'}}>
                  Tutorial
                </a>
              </li>
              <li className="nav-item fw-semibold">
                <a className="nav-link" href="#" style={{color: '#522b79'}}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
