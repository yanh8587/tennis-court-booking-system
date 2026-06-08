import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema(
  {
    userName: { type: String, required: true, trim: true },
    userEmail: { type: String, required: true, trim: true },
    court: { type: mongoose.Schema.Types.ObjectId, ref: 'Court', required: true },
    date: { type: String, required: true },
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
    status: { type: String, enum: ['Booked', 'Cancelled'], default: 'Booked' }
  },
  { timestamps: true }
);

bookingSchema.index(
  { court: 1, date: 1, startTime: 1, endTime: 1, status: 1 },
  { unique: true, partialFilterExpression: { status: 'Booked' } }
);

export default mongoose.model('Booking', bookingSchema);
