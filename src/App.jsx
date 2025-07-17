import Navbar from './components/navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Stats from './components/Stats';
import Login from './components/Login';  

import SleepForm from './components/SleepForm';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Stats" element={<Stats />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Add" element={<SleepForm />} />
      </Routes>
    </>
  );
}

export default App;
