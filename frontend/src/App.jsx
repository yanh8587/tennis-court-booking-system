import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Courts from './pages/Courts.jsx';
import Bookings from './pages/Bookings.jsx';
import Profile from './pages/Profile.jsx';

export default function App() {
  return (
    <div>
      <header className="site-header">
        <h1>Tennis Court Booking System</h1>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/courts">Courts</NavLink>
          <NavLink to="/bookings">Bookings</NavLink>
          <NavLink to="/profile">Profile</NavLink>
        </nav>
      </header>

      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courts" element={<Courts />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
}
