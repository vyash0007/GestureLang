// pages/tutorial.js
'use client'
import React from 'react';
import NavBar from '../components/navbar';
import Footer from '../components/footer';

export default function Tutorial() {
  return (
    <div className="container">
      {/* Navigation Bar */}
      <NavBar />

      {/* Tutorial Content */}
      <section className="tutorial">
        <h1>Tutorial Video</h1>
        <p>
          Learn how to use Gesture Language with our step-by-step tutorial. Watch the video below for a quick walkthrough.
        </p>
        <div className="video-container">
          <video controls poster="/images/video-placeholder.jpg">
            {/* Temporary video source */}
            <source src="https://res.cloudinary.com/dnkrqpuqk/video/upload/v1696135881/samples/sea-turtle.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* Styled JSX */}
      <style jsx>{`
        .container {
          font-family: Arial, sans-serif;
          color: #333;
          min-height: 100vh;
        //   background: #f5f5f5;
        }
        .tutorial {
          max-width: 800px;
          margin: 100px auto 2rem; /* top margin accounts for navbar if fixed */
          padding: 2rem;
          background-color: #fff;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          text-align: center;
        }
        .tutorial h1 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          color: #333;
        }
        .tutorial p {
          font-size: 1.1rem;
          margin-bottom: 2rem;
          line-height: 1.5;
        }
        .video-container {
          position: relative;
          padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
          height: 0;
          overflow: hidden;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
        .video-container video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  );
}
