import express from 'express';
import Booking from '../models/Booking.js';

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const bookings = await Booking.find().populate('court').sort({ date: 1, startTime: 1 });
    res.json(bookings);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const conflict = await Booking.findOne({
      court: req.body.court,
      date: req.body.date,
      startTime: req.body.startTime,
      endTime: req.body.endTime,
      status: 'Booked'
    });

    if (conflict) {
      return res.status(409).json({ message: 'This court is already booked for the selected time slot.' });
    }

    const booking = await Booking.create(req.body);
    const populated = await booking.populate('court');
    res.status(201).json(populated);
  } catch (error) {
    next(error);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const booking = await Booking.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    }).populate('court');
    if (!booking) return res.status(404).json({ message: 'Booking not found' });
    res.json(booking);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const booking = await Booking.findByIdAndDelete(req.params.id);
    if (!booking) return res.status(404).json({ message: 'Booking not found' });
    res.json({ message: 'Booking deleted' });
  } catch (error) {
    next(error);
  }
});

export default router;
