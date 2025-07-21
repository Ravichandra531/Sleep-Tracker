import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const STORAGE_KEY = 'sleep-data';

function Home() {
  const [userName, setUserName] = useState('');
  const [sleepData, setSleepData] = useState([]);

  useEffect(() => {
    const storedName = localStorage.getItem('user-name') || '';
    setUserName(storedName);
    const storedData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    setSleepData(storedData);
  }, []);

  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome, {userName || 'Guest'}</h1>
        <p>Your personal sleep sanctuary. Track your nights, conquer your days.</p>
        <Link to="/add" className="cta-button">Add New Sleep Record</Link>
      </div>

      <div className="features-section">
        <div className="feature-card">
          <h3>Track Your Sleep</h3>
          <p>Log your sleep hours and monitor your patterns over time.</p>
        </div>
        <div className="feature-card">
          <h3>Understand Your Habits</h3>
          <p>Gain insights into your sleep quality and make improvements.</p>
        </div>
        <div className="feature-card">
          <h3>View Your Progress</h3>
          <p>Check your sleep history and see how you're progressing.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
