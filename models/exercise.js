const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  reps: { type: Number },
  sets: { type: Number },
  category: { type: String },
  weight: { type: Number },
  duration: { type: String },
  description: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Exercise', exerciseSchema);
