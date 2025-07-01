const Patient = require('../models/patient');

const createPatient = async (req, res) => {
  try {
    const { name, age, condition } = req.body;

    if (!name) {
      return res.status(400).json({ message: 'El nombre es obligatorio' });
    }

    const newPatient = new Patient({ name, age, condition });
    await newPatient.save();

    return res.status(201).json(newPatient);
  } catch (error) {
    console.error('Error al guardar paciente:', error);
    return res.status(500).json({ message: 'Error en el servidor al guardar paciente' });
  }
};

const getPatients = async (req, res) => {
  try {
    const patients = await Patient.find();
    return res.json(patients);
  } catch (error) {
    console.error('Error al obtener pacientes:', error);
    return res.status(500).json({ message: 'Error en el servidor al obtener pacientes' });
  }
};

const deletePatient = async (req, res) => {
  try {
    const patientId = req.params.id;
    const deletedPatient = await Patient.findByIdAndDelete(patientId);

    if (!deletedPatient) {
      return res.status(404).json({ message: 'Paciente no encontrado' });
    }

    return res.json({ message: 'Paciente eliminado correctamente' });
  } catch (error) {
    console.error('Error al eliminar paciente:', error);
    return res.status(500).json({ message: 'Error en el servidor al eliminar paciente' });
  }
};

module.exports = { createPatient, getPatients, deletePatient };

