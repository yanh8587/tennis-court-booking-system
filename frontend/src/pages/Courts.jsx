import React from 'react';
import { useEffect, useState } from 'react';
import { createCourt, deleteCourt, getCourts } from '../api/api.js';
import ErrorMessage from '../components/ErrorMessage.jsx';

export default function Courts() {
  const [courts, setCourts] = useState([]);
  const [form, setForm] = useState({ name: '', location: '', surface: 'Hard' });
  const [error, setError] = useState('');

  async function loadCourts() {
    try {
      setCourts(await getCourts());
      setError('');
    } catch (err) {
      setError(err.message);
    }
  }

  useEffect(() => {
    loadCourts();
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await createCourt(form);
      setForm({ name: '', location: '', surface: 'Hard' });
      loadCourts();
    } catch (err) {
      setError(err.message);
    }
  }

  async function handleDelete(id) {
    try {
      await deleteCourt(id);
      loadCourts();
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <section>
      <h2>Court Management</h2>
      <form className="card form" onSubmit={handleSubmit}>
        <input placeholder="Court name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
        <input placeholder="Location" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} required />
        <select value={form.surface} onChange={(e) => setForm({ ...form, surface: e.target.value })}>
          <option>Hard</option>
          <option>Clay</option>
          <option>Grass</option>
          <option>Indoor</option>
        </select>
        <button>Add Court</button>
      </form>
      <ErrorMessage message={error} />
      <div className="grid">
        {courts.map((court) => (
          <article className="card" key={court._id}>
            <h3>{court.name}</h3>
            <p>{court.location}</p>
            <p>Surface: {court.surface}</p>
            <button className="danger" onClick={() => handleDelete(court._id)}>Delete</button>
          </article>
        ))}
      </div>
    </section>
  );
}
