const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema({
  patient: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
  progressNote: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Progress', progressSchema);
