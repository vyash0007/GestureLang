// components/NavBar.js
'use client'
import Link from 'next/link';
import React from 'react';


const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="brand">
        <a href="/">
          GestureLang
        </a>
      </div>
      <ul className="nav-links">
        <li>
          <a href="/">
            Home
          </a>
        </li>
        <li>
          <a href="/gesture">
            Gesture
          </a>
        </li>
        <li>
          <a href="/tutorial">
            Tutorial
          </a>
        </li>
        <li>
          <a href="/download">
            Download
          </a>
        </li>
      </ul>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
          background-color: #002B54;
          color: #fff;
          z-index: 1000; /* Ensure it sits on top of other elements */
        }
        .brand a {
          font-size: 1.5rem;
          font-weight: bold;
          color: #fff;
          text-decoration: none;
        }
        .nav-links {
          list-style: none;
          display: flex;
          gap: 1.5rem;
          margin: 0;
          padding: 0;
        }
        .nav-links li a {
          color: #fff;
          text-decoration: none;
          font-size: 1rem;
          transition: color 0.3s ease;
        }
        .nav-links li a:hover {
          color: #f0a500;
        }
      `}</style>
    </nav>
  );
};

export default NavBar;

