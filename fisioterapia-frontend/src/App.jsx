import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage('');
    try {
      const res = await fetch('http://localhost:5000/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (res.ok) {
        localStorage.setItem('token', data.token);
        setMessage('Login exitoso 🎉');
      } else {
        setMessage(data.message || 'Error en login');
      }
    } catch (err) {
      setMessage('Error en la conexión');
    }
  };

  return (
    <div className="container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Bienvenida</h2>
        <p>Inicia sesión para continuar</p>

        <label>Email</label>
        <input
          type="email"
          placeholder="ejemplo@correo.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Contraseña</label>
        <input
          type="password"
          placeholder="Tu contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Entrar</button>

        {message && <p className="message">{message}</p>}
      </form>
    </div>
  );
}
