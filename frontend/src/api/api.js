const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:5000/api';

async function request(path, options = {}) {
  const response = await fetch(`${API_BASE}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(data.message || 'API request failed');
  }
  return data;
}

export const getCourts = () => request('/courts');
export const createCourt = (court) => request('/courts', { method: 'POST', body: JSON.stringify(court) });
export const deleteCourt = (id) => request(`/courts/${id}`, { method: 'DELETE' });
export const getBookings = () => request('/bookings');
export const createBooking = (booking) => request('/bookings', { method: 'POST', body: JSON.stringify(booking) });
export const deleteBooking = (id) => request(`/bookings/${id}`, { method: 'DELETE' });
