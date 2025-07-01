const User = require('../models/user');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer'); // Opcional si luego quieres enviar email real

const generateToken = (user) => {
  return jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
};

exports.register = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: 'Usuario ya existe' });

    const user = await User.create({ email, password });
    res.status(201).json({
      _id: user._id,
      email: user.email,
      token: generateToken(user),
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    res.json({
      _id: user._id,
      email: user.email,
      token: generateToken(user),
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.forgotPassword = async (req, res) => {
  const { email } = req.body;
  try {
    // Buscar usuario por email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    // Generar token JWT válido 1 hora para reset password
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    // Aquí debes enviar el email con nodemailer (o cualquier servicio de email)
    // Por ahora solo imprimimos el link en consola para pruebas
    const resetLink = `http://localhost:3000/reset-password/${token}`;
    console.log('Enlace para restablecer contraseña:', resetLink);

    res.json({ message: 'Enlace de recuperación enviado (revisa la consola)' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error del servidor' });
  }
};
