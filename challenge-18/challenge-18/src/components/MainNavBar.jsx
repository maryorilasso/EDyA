import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/MainNavBar.css";
import logo from "../assets/react.svg";
import { useUserAuth } from "../contex/useUserContext";

const MainNavBar = () => {
  const { state, dispatch } = useUserAuth();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <nav className="navigation-bar">
      <Link to="/" className="nav-logo">
        <img src={logo} alt="App Logo" className="app-logo" />
        <p className="app-name">My Custom App</p>
      </Link>
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        {state.isAuthenticated ? (
          <>
            <Link to="/dashboard" className="nav-link">Dashboard</Link>
            <span className="username">Hello, {state.username}!</span>
            <button onClick={handleLogout} className="nav-link logout-btn">
              Sign Out
            </button>
          </>
        ) : (
          <Link to="/login" className="nav-link">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default MainNavBar;
