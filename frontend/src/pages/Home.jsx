import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section className="hero card">
      <h2>Reserve Tennis Courts Online</h2>
      <p>
        This MERN web application helps students and community members view courts,
        create reservations, and manage bookings through a simple interface.
      </p>
      <div className="actions">
        <Link className="button" to="/courts">View Courts</Link>
        <Link className="button secondary" to="/bookings">Book a Court</Link>
      </div>
    </section>
  );
}
