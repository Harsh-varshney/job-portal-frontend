import React, { useState } from "react";
import "../styles/JobHeader.css"; 

const JobHeader = ({ onSearch }) => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [menuOpen, setMenuOpen] = useState(false); // hamburger state

  return (
    <div className="bg-white">
      {/* --- Navbar --- */}
      <header className="navbar-custom">
        <div className="container-fluid px-5 d-flex justify-content-between align-items-center">
          
          {/* Logo */}
          <div className="d-flex align-items-center">
            <div className="logo-text">
              <span className="me-2"><i className="fa-solid fa-shield"></i></span> Credepath
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="d-none d-md-flex ms-5 gap-4 align-items-center">
            <a href="#" className="nav-link-custom nav-link-active">Jobs</a>
            <a href="#" className="nav-link-custom">Hiring Partners</a>
            <div className="text-primary fs-4 cursor-pointer">
              <i style={{color: "black"}} className="fa-solid fa-user"></i>
            </div>
          </nav>

          {/* Mobile  */}
          <div className="d-md-none">
            <span 
              className="hamburger-icon cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
            >☰</span>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="mobile-menu">
            <a href="#" className="mobile-link">Jobs</a>
            <a href="#" className="mobile-link">Hiring Partners</a>
            <a href="#" className="mobile-link">
              <i className="fa-solid fa-user me-2"></i> Profile
            </a>
          </div>
        )}
      </header>

      {/* --- Main Search Section --- */}
      <main className="container-fluid px-5 mt-4">
        <div className="row align-items-center mb-4">
          <div className="col-lg-4">
            <h1 className="main-title">Jobs for you</h1>
          </div>
          
          <div className="col-lg-8">
            <div className="search-box-wrapper">
              <input 
                type="text" 
                placeholder="Search by company, jobs, skills" 
                className="search-input-field border-end" 
                style={{ flex: '2' }}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <input 
                type="text" 
                placeholder="Location" 
                className="search-input-field"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
              <button 
                className="search-btn-custom" 
                onClick={() => onSearch(title, location)}
              >
                Search Jobs
              </button>
            </div>
          </div>
        </div>

        {/* --- Tabs --- */}
        <div className="d-flex border-bottom mb-4">
          <button className="tab-button tab-button-active">RECOMMENDED</button>
          <button className="tab-button">APPLIED</button>
          <button className="tab-button">SAVED</button>
        </div>

        {/* --- Filters Row --- */}
        <div className="d-flex flex-wrap">
          {["Company", "Jobs", "Skills", "Location", "Salary", "Job Type"].map((f) => (
            <button key={f} className="filter-badge">
              {f} <small className="ms-1 text-muted">&#9660;</small>
            </button>
          ))}
          <button className="filter-badge">
            All Filters <span className="ms-1">&#8801;</span>
          </button>
        </div>
      </main>
    </div>
  );
};

export default JobHeader;
