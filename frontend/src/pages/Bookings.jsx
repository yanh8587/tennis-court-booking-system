import React from 'react';
import { useEffect, useState } from 'react';
import { createBooking, deleteBooking, getBookings, getCourts } from '../api/api.js';
import ErrorMessage from '../components/ErrorMessage.jsx';

export default function Bookings() {
  const [courts, setCourts] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState('');
  const [form, setForm] = useState({
    userName: '',
    userEmail: '',
    court: '',
    date: '',
    startTime: '09:00',
    endTime: '10:00'
  });

  async function loadData() {
    try {
      const [courtData, bookingData] = await Promise.all([getCourts(), getBookings()]);
      setCourts(courtData);
      setBookings(bookingData);
      setError('');
    } catch (err) {
      setError(err.message);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await createBooking(form);
      setForm({ ...form, userName: '', userEmail: '' });
      loadData();
    } catch (err) {
      setError(err.message);
    }
  }

  async function handleDelete(id) {
    try {
      await deleteBooking(id);
      loadData();
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <section>
      <h2>Booking Dashboard</h2>
      <form className="card form" onSubmit={handleSubmit}>
        <input placeholder="Your name" value={form.userName} onChange={(e) => setForm({ ...form, userName: e.target.value })} required />
        <input type="email" placeholder="Email" value={form.userEmail} onChange={(e) => setForm({ ...form, userEmail: e.target.value })} required />
        <select value={form.court} onChange={(e) => setForm({ ...form, court: e.target.value })} required>
          <option value="">Select court</option>
          {courts.map((court) => <option key={court._id} value={court._id}>{court.name}</option>)}
        </select>
        <input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} required />
        <input type="time" value={form.startTime} onChange={(e) => setForm({ ...form, startTime: e.target.value })} required />
        <input type="time" value={form.endTime} onChange={(e) => setForm({ ...form, endTime: e.target.value })} required />
        <button>Create Booking</button>
      </form>
      <ErrorMessage message={error} />

      <div className="card">
        <h3>Current Reservations</h3>
        {bookings.length === 0 && <p>No bookings yet.</p>}
        {bookings.map((booking) => (
          <div className="booking-row" key={booking._id}>
            <div>
              <strong>{booking.court?.name || 'Court removed'}</strong>
              <p>{booking.date} | {booking.startTime} - {booking.endTime}</p>
              <small>{booking.userName} ({booking.userEmail})</small>
            </div>
            <button className="danger" onClick={() => handleDelete(booking._id)}>Cancel</button>
          </div>
        ))}
      </div>
    </section>
  );
}
