import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SleepForm.css';

function SleepForm() {
  const [date, setDate] = useState('');
  const [hours, setHours] = useState('');
  const [notes, setNotes] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = { date, hours, notes };

    const existing = JSON.parse(localStorage.getItem('sleep-data') || '[]');
    existing.push(newEntry);
    localStorage.setItem('sleep-data', JSON.stringify(existing));
    
    alert('Sleep data added successfully!');
    navigate('/Home');
  };

  return (
    <div className="sleep-form-container">
      <h2>Add Sleep Record</h2>
      <form onSubmit={handleSubmit} className="sleep-form">
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        <input type="number" value={hours} placeholder="Hours Slept" onChange={(e) => setHours(e.target.value)} required />
        <textarea placeholder="Notes (optional)" value={notes} onChange={(e) => setNotes(e.target.value)} />
        <button type="submit">Add Record</button>
      </form>
    </div>
  );
}

export default SleepForm;
