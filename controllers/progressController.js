const Progress = require('../models/progress');

exports.createProgress = async (req, res) => {
  try {
    const progress = new Progress(req.body);
    await progress.save();
    res.status(201).json(progress);
  } catch (err) {
    console.error('❌ Error al guardar progreso:', err.message);
    res.status(400).json({ error: err.message });
  }
};

exports.getProgress = async (req, res) => {
  try {
    const progressList = await Progress.find().populate('patient');
    res.status(200).json(progressList);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

