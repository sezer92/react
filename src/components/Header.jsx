import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <Link className="navbar-brand flex-grow-1" to="/">
            JOHN DOE
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  ACCUEIL
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services">
                  SERVICES
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/portfolio">
                  REALISATIONS
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blog">
                  BLOG
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  ME CONTACTER
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
