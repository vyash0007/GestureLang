'use client'
import React from 'react';
import NavBar from '../components/navbar';
import Footer from '../components/footer';

const letters = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
const images = Array.from({ length: 26 }, (_, i) => `/images/image-${i + 1}.jpg`);

export default function Home() {
  return (
    <div className="container">
      <h1>Alphabet Gesture</h1>
      <div className="card-grid">
        {letters.map((letter, index) => (
          <div className="card" key={letter}>
            <img
              src={images[index]} // Dynamically set image source
              alt={`Gesture for ${letter}`}
              className="card-image"
            />
            <div className="card-content">
              <h2>{letter}</h2>
            </div>
          </div>
        ))}
      </div>

      {/* Styled JSX for component-specific styling */}
      <style jsx>{`
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
          text-align: center;
          font-family: Arial, sans-serif;
        }
        .card-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }
        .card {
          background:rgb(133, 200, 200);
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .card:hover {
          transform: translateY(-10px);
          box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
        }
        .card-image {
          width: 100%;
          height: 150px;
          object-fit: cover;
        }
        .card-content {
          padding: 1rem;
        }
        h2 {
          margin: 0;
          font-size: 2rem;
          color: #333;
        }
      `}</style>
    </div>
  );
}
