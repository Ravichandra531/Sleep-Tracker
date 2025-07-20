
import React, { useEffect, useState } from 'react';

export default function Stats() {
  const [avg, setAvg] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("sleep-data") || "[]");
    if (data.length === 0) return;
    const total = data.reduce((sum, r) => sum + parseFloat(r.hours || 0), 0);
    setAvg((total / data.length).toFixed(2));
  }, []);

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Sleep Stats</h2>
      {avg ? <p>Average sleep: <strong>{avg}</strong> hours</p> : <p>No sleep data yet.</p>}
    </div>
  );
}
