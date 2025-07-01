const Exercise = require('../models/exercise');

// Crear un nuevo ejercicio
exports.createExercise = async (req, res) => {
  try {
    const exercise = new Exercise(req.body);
    const savedExercise = await exercise.save();
    res.status(201).json(savedExercise);
  } catch (err) {
    res.status(400).json({ error: 'Error al crear el ejercicio', details: err.message });
  }
};

// Obtener todos los ejercicios
exports.getExercises = async (req, res) => {
  try {
    const exercises = await Exercise.find();
    res.json(exercises);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener los ejercicios', details: err.message });
  }
};

// Obtener un solo ejercicio por ID
exports.getExerciseById = async (req, res) => {
  try {
    const exercise = await Exercise.findById(req.params.id);
    if (!exercise) return res.status(404).json({ error: 'Ejercicio no encontrado' });
    res.json(exercise);
  } catch (err) {
    res.status(500).json({ error: 'Error al buscar el ejercicio', details: err.message });
  }
};

// Actualizar ejercicio por ID
exports.updateExercise = async (req, res) => {
  try {
    const updatedExercise = await Exercise.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedExercise) return res.status(404).json({ error: 'Ejercicio no encontrado' });
    res.json(updatedExercise);
  } catch (err) {
    res.status(400).json({ error: 'Error al actualizar el ejercicio', details: err.message });
  }
};

// Eliminar ejercicio por ID
exports.deleteExercise = async (req, res) => {
  try {
    const deletedExercise = await Exercise.findByIdAndDelete(req.params.id);
    if (!deletedExercise) return res.status(404).json({ error: 'Ejercicio no encontrado' });
    res.json({ message: 'Ejercicio eliminado correctamente' });
  } catch (err) {
    res.status(500).json({ error: 'Error al eliminar el ejercicio', details: err.message });
  }
};
