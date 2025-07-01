const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  condition: String,
});

module.exports = mongoose.model('Patient', patientSchema);
