<<<<<<< HEAD
# Tennis Court Booking System

## Project Overview

The Tennis Court Booking System is a MERN full-stack web application for reserving tennis courts online. Users can view available courts, create court reservations, and cancel bookings. Administrators can add and delete court records. The project uses React, React Router, Node.js, Express, and MongoDB.

## Key Features

1. Court Management: add, view, and delete tennis courts.
2. Booking Dashboard: create and cancel court reservations.
3. Profile Page: show user/account area and project feature summary.
4. Routing: navigate between Home, Courts, Bookings, and Profile pages using React Router.
5. Error Handling: display meaningful API errors, including booking conflict messages.

## Technology Stack

- Frontend: React, Vite, React Router
- Backend: Node.js, Express
- Database: MongoDB
- Collaboration: GitHub

## How the Application Works

The frontend sends HTTP requests to the backend API. The backend receives the requests, validates the data, and performs CRUD operations in MongoDB. Court data and booking data are stored in separate MongoDB collections. When a user creates a booking, the backend checks whether the selected court and time slot are already booked. If there is a conflict, the API returns an error message.

## Run the Backend

```bash
cd backend
npm install
copy .env.example .env
npm run dev
```

If you use macOS or Linux, use this command instead of `copy`:

```bash
cp .env.example .env
```

## Run the Frontend

```bash
cd frontend
npm install
npm run dev
```

Open the frontend URL shown in the terminal, usually `http://localhost:5173`.

## API Endpoints

### Courts

- `GET /api/courts` - get all courts
- `POST /api/courts` - create a court
- `PUT /api/courts/:id` - update a court
- `DELETE /api/courts/:id` - delete a court

### Bookings

- `GET /api/bookings` - get all bookings
- `POST /api/bookings` - create a booking
- `PUT /api/bookings/:id` - update a booking
- `DELETE /api/bookings/:id` - delete a booking

## What We Learned

Through this project, we practiced designing a full-stack MERN application, creating RESTful API endpoints, connecting Express to MongoDB, using React Router for multiple pages, consuming backend APIs from React, and handling user input and API errors in the frontend.
=======
# tennis-court-booking-system
>>>>>>> 405ace824e3b9fd28031935a826c5dc5f9e7fb16
