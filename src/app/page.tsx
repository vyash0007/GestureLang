// pages/index.js
'use client'
import NavBar from './components/navbar';
import Footer from './components/footer';
import React from 'react';

export default function Home() {
  return (
    <div className="container">
      {/* Navigation Bar */}
      <NavBar />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>Welcome to Gesture Language</h1>
          <p>
            Discover a whole new way of communicating through expressive gestures.
            Gesture Language brings together visual expression and intuitive movement
            to break language barriers and connect people from all walks of life.
          </p>
        </div>
        <div className="hero-image">
          <img src="/loginImg.png" />
        </div>
      </section>

      {/* Information Section */}
      <section className="info">
        <h2>About Gesture Language</h2>
        <p>
          Gesture Language is a dynamic form of communication that harnesses the power
          of body language, facial expressions, and hand movements to express ideas,
          emotions, and stories. Developed by experts in linguistics and non-verbal
          communication, our platform offers interactive tutorials, community
          support, and expert insights to help you master this innovative language.
        </p>
        {/* <img src="/loginImg.png" /> */}
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Key Features</h2>
        <ul>
          <li>Interactive tutorials and lessons</li>
          <li>Community-driven practice sessions</li>
          <li>Expert insights and personalized feedback</li>
          <li>Accessible learning for all skill levels</li>
        </ul>
        {/* <img src="/images/gesture3.jpg" alt="Interactive Gesture Language session" /> */}
      </section>

      {/* Styled JSX */}
      <style jsx>{`
        .container {
          font-family: Arial, sans-serif;
          color: #333;
          line-height: 1.6;
        }
        /* Hero Section Styling */
        .hero {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          padding: 2rem;
          background: url('/images/gesture-background.jpg') center/cover no-repeat;
          color: #fff;
        }
        .hero-text {
          flex: 1;
          min-width: 300px;
          padding: 1rem;
          background-color:rgb(67, 86, 125);
          border-radius: 8px;
          margin: 1rem;
        }
        .hero-text h1 {
          margin-bottom: 1rem;
          font-size: 2.5rem;
        }
        .hero-text p {
          font-size: 1.2rem;
        }
        .hero-image {
          flex: 1;
          min-width: 300px;
          padding: 1rem;
          margin: 1rem;
          padding-top: 50px;
        }
        .hero-image img {
          width: 100%;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
        }
        /* Information Section Styling */
        .info {
          padding: 2rem;
          text-align: center;
          background-color: rgb(67, 86, 125);
          color: #ffffff;
        }
        .info h2 {
          font-size: 2rem;
          margin-bottom: 1rem;
        }
        .info p {
          max-width: 800px;
          margin: 0 auto 1.5rem;
          font-size: 1.1rem;
        }
        .info img {
          width: 80%;
          max-width: 600px;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
          margin-top: 1rem;
        }
        /* Features Section Styling */
        .features {
          flex: 1;
          min-width: 300px;
          padding: 1rem;
          background-color: rgb(67, 86, 125);
          border-radius: 8px;
          margin: 1rem;
          text-align:center;
          color:#ffffff;
        }
        .features h2 {
          font-size: 2rem;
          margin-bottom: 1rem;
        }
        .features ul {
          list-style: none;
          padding: 0;
          font-size: 1.1rem;
          margin: 0 auto 1.5rem;
          max-width: 800px;
        }
        .features li {
          margin: 0.5rem 0;
        }
        .features img {
          width: 80%;
          max-width: 600px;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
          margin-top: 1rem;
        }
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .hero {
            flex-direction: column;
          }
          .hero-text, .hero-image {
            margin: 0.5rem 0;
          }
        }
      `}</style>
    </div>
  );
}
