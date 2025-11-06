"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="bg-white dark:bg-slate-900">
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-80px)] flex items-center justify-center px-4 py-12 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Welcome to <span className="text-amber-500">Gesture Language</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              Discover a whole new way of communicating through expressive gestures. Break language barriers and connect with people worldwide using visual expression and intuitive movement.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a href="/gesture" className="px-6 py-3 bg-amber-400 text-slate-900 font-semibold rounded-lg hover:bg-amber-500 transition">
                Explore Gestures
              </a>
              <a href="/tutorial" className="px-6 py-3 border-2 border-amber-400 text-amber-400 font-semibold rounded-lg hover:bg-amber-400/10 transition">
                Learn Now
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="aspect-video bg-slate-200 dark:bg-slate-700 rounded-lg shadow-lg flex items-center justify-center overflow-hidden">
              <img src="/loginImg.png" alt="Gesture demonstration" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-slate-900 dark:text-white">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: "📚", title: "Learn", desc: "Interactive tutorials and lessons" },
              { icon: "👥", title: "Community", desc: "Connect and practice with others" },
              { icon: "🎯", title: "Practice", desc: "Flashcards and quiz challenges" },
              { icon: "🏆", title: "Progress", desc: "Track your learning journey" },
            ].map((f: { icon: string; title: string; desc: string }, i: number) => (
              <div key={i} className="p-6 rounded-lg bg-slate-50 dark:bg-slate-800 shadow-md text-center">
                <div className="text-4xl mb-3">{f.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">{f.title}</h3>
                <p className="text-slate-600 dark:text-slate-300">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-slate-900 dark:text-white">About Gesture Language</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
            Gesture Language is a dynamic form of communication that harnesses the power of body language, facial
            expressions, and hand movements to express ideas, emotions, and stories. Our platform is designed for
            learners of all skill levels — from beginners exploring the basics to advanced practitioners perfecting
            nuanced gestures.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Whether you&apos;re learning for personal enrichment, professional communication, or accessibility, GestureLang
            provides the tools, community, and expertise to guide your journey.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-amber-400 to-amber-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-slate-900">Ready to Start Learning?</h2>
          <p className="text-lg text-slate-800 mb-8">Join thousands of learners mastering the language of gesture.</p>
          <a href="/practice" className="inline-block px-8 py-3 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition">
            Start Practice
          </a>
        </div>
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
          background: linear-gradient(135deg, #fef3c7, #fde68a);
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
