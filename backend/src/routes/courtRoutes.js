import express from 'express';
import Court from '../models/Court.js';

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const courts = await Court.find().sort({ createdAt: -1 });
    res.json(courts);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const court = await Court.create(req.body);
    res.status(201).json(court);
  } catch (error) {
    next(error);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const court = await Court.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!court) return res.status(404).json({ message: 'Court not found' });
    res.json(court);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const court = await Court.findByIdAndDelete(req.params.id);
    if (!court) return res.status(404).json({ message: 'Court not found' });
    res.json({ message: 'Court deleted' });
  } catch (error) {
    next(error);
  }
});

export default router;
