// controllers/appointmentController.js

const Appointment = require('../models/appointment');

// Crear cita
exports.createAppointment = async (req, res) => {
  try {
    const { name, date, time, notes, type } = req.body;

    // Validar usuario autenticado
    if (!req.user || !req.user._id) {
      return res.status(401).json({ error: "No autorizado" });
    }

    // Validar campos obligatorios
    if (!name || !date || !time) {
      return res.status(400).json({ error: "Los campos name, date y time son obligatorios" });
    }

    // Crear nueva cita con todos los campos
    const appointment = new Appointment({
      name,
      date,
      time,
      notes: notes || '',
      type: type || '',
      user: req.user._id
    });

    await appointment.save();

    res.status(201).json(appointment);
  } catch (err) {
    console.error("Error creating appointment:", err);
    res.status(400).json({ error: err.message });
  }
};

// Obtener todas las citas
exports.getAppointments = async (req, res) => {
  try {
    // Puedes ajustar la consulta para filtrar por usuario o traer todo
    const appointments = await Appointment.find().populate('user', 'name email');
    res.json(appointments);
  } catch (err) {
    console.error("Error fetching appointments:", err);
    res.status(500).json({ error: err.message });
  }
};
