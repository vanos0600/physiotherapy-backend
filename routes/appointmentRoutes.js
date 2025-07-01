const express = require('express');
const router = express.Router();
const Appointment = require('../models/appointment');

// Obtener todas las citas
router.get('/', async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.json(appointments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Crear nueva cita
router.post('/', async (req, res) => {
  const appointment = new Appointment({
    name: req.body.name,
    date: req.body.date,
    time: req.body.time,
    type: req.body.type,
    notes: req.body.notes,
    status: req.body.status || 'pending'
  });

  try {
    const newAppointment = await appointment.save();
    res.status(201).json(newAppointment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Actualizar estado de cita
router.patch('/:id', async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id);
    if (!appointment) return res.status(404).json({ message: 'Cita no encontrada' });
    
    appointment.status = req.body.status;
    const updatedAppointment = await appointment.save();
    res.json(updatedAppointment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Eliminar cita
router.delete('/:id', async (req, res) => {
  try {
    const result = await Appointment.findByIdAndDelete(req.params.id);
    if (!result) return res.status(404).json({ message: 'Cita no encontrada' });
    
    res.json({ message: 'Cita eliminada' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;