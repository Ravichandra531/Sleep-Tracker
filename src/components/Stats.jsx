import React, { useEffect, useState } from 'react';
import './Stats.css';

export default function Stats() {
  const [stats, setStats] = useState({ avg: 0, longest: 0, shortest: 0 });

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("sleep-data") || "[]");
    if (data.length === 0) return;

    const hours = data.map(r => parseFloat(r.hours || 0));
    const total = hours.reduce((sum, h) => sum + h, 0);
    const avg = (total / data.length).toFixed(2);
    const longest = Math.max(...hours);
    const shortest = Math.min(...hours);

    setStats({ avg, longest, shortest });
  }, []);

  return (
    <div className="stats-container">
      <h2>Your Sleep Stats</h2>
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Average Sleep</h3>
          <p>{stats.avg}<span>hours</span></p>
        </div>
        <div className="stat-card">
          <h3>Longest Sleep</h3>
          <p>{stats.longest}<span>hours</span></p>
        </div>
        <div className="stat-card">
          <h3>Shortest Sleep</h3>
          <p>{stats.shortest}<span>hours</span></p>
        </div>
      </div>
    </div>
  );
}