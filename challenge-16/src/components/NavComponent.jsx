import React from 'react';
import { NavLink } from 'react-router-dom';

const NavComponent = () => {
return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
    <div className="container">
        <NavLink className="navbar-brand fs-3" to="/">
        MiAplicación
        </NavLink>
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
        <NavLink
            to="/"
            className={({ isActive }) =>
                isActive ? 'nav-link active fs-5' : 'nav-link fs-5'
                }
            >
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? 'nav-link active fs-5' : 'nav-link fs-5'
                }
              >
                Sobre Nosotros
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? 'nav-link active fs-5' : 'nav-link fs-5'
                }
              >
                Contacto
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavComponent;
