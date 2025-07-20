import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/Home';
import Stats from './components/Stats';
import Login from './components/Login';
import SleepForm from './components/SleepForm';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Stats" element={<Stats />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Add" element={<SleepForm />} />
      </Routes>
    </Router>
  );
}

export default App;
