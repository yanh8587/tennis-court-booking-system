import mongoose from 'mongoose';

const courtSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    location: { type: String, required: true, trim: true },
    surface: { type: String, enum: ['Hard', 'Clay', 'Grass', 'Indoor'], default: 'Hard' },
    isAvailable: { type: Boolean, default: true }
  },
  { timestamps: true }
);

export default mongoose.model('Court', courtSchema);
