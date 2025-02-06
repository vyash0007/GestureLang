// components/Footer.js
'use client'
import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© 2025 GestureLang. All rights reserved.</p>
      <p className="subtext">Communication with gestures is described as an auxiliary system, evolved in parallel to language, that can be used when the primary system (language) is difficult to use or not intact.</p>

      {/* Styled JSX */}
      <style jsx>{`
        .footer {
          background-color: #002B54;
          color: #fff; /* White text */
          text-align: center;
          padding: 15px 0;
          font-size: 14px;
          position: relative;
          bottom: 0;
          width: 100%;
          padding-top:100px;
        }
        .subtext {
          font-size: 12px;
          opacity: 0.8;
        }
      `}</style>
    </footer>
  );
}
