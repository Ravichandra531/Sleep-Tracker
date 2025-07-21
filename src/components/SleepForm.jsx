import React, { useState } from 'react';
import './SleepForm.css';

function SleepForm() {
  const [date, setDate] = useState('');
  const [hours, setHours] = useState('');

  

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = { id: Date.now(), date, hours, quality: 'Good', notes: '' };

    const existing = JSON.parse(localStorage.getItem('sleep-data') || '[]');
    existing.push(newEntry);
    localStorage.setItem('sleep-data', JSON.stringify(existing));
    
    alert('Sleep data added successfully!');
  
  };

  return (
    <div className="sleep-form-container">
      <h2>Add Sleep Record</h2>
      <form onSubmit={handleSubmit} className="sleep-form">
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        <input type="number" placeholder='Number of Hours Slept' value={hours} onChange={(e) => setHours(e.target.value)} required />
        <button type="submit">Add Record</button>
      </form>
    </div>
  );
}

export default SleepForm;

