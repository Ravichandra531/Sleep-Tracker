import React, { useEffect, useState } from 'react';
import './Home.css';

function Home() {
  const [sleepData, setSleepData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Replace with your actual API endpoint
    fetch('https://pillowapp.com/developers')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch sleep data');
        return res.json();
      })
      .then((data) => {
        setSleepData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="dashboard">
      <h1>Track your sleep, wake up fresh</h1>
      <p>Start your journey to better sleep with insights, analytics, and personalized tracking.</p>
      {loading && <p>Loading sleep data...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {!loading && !error && (
        <div>
          <h2>Your Sleep Records</h2>
          {sleepData.length === 0 ? (
            <p>No sleep records found.</p>
          ) : (
            <table style={{ margin: '0 auto', color: 'white', background: '#1a1830', borderRadius: '8px' }}>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Hours Slept</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                {sleepData.map((record, idx) => (
                  <tr key={idx}>
                    <td>{record.date}</td>
                    <td>{record.hours}</td>
                    <td>{record.notes || '-'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
