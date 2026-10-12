import { useState } from 'react';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rol, setRol] = useState('Administrador');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert('Por favor complete todos los campos');
      return;
    }
    
    // Simulación de autenticación
    const usuario = {
      nombre: email.split('@')[0],
      email: email,
      rol: rol
    };
    
    onLogin(usuario);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '80px' }}>
      <div className="card" style={{ width: '380px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#2c3e50' }}>
          Sistema Ganadero
        </h2>
        <form onSubmit={handleSubmit}>
          <label>Correo Electrónico:</label>
          <input 
            type="email" 
            placeholder="usuario@campo.com" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />

          <label>Contraseña:</label>
          <input 
            type="password" 
            placeholder="••••••••" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />

          <label>Rol (Simulación):</label>
          <select value={rol} onChange={(e) => setRol(e.target.value)}>
            <option value="Administrador">Dueño / Administrador</option>
            <option value="Peon">Peón / Encargado</option>
            <option value="Veterinario">Veterinario</option>
          </select>

          <button type="submit" style={{ width: '100%', marginTop: '10px' }}>
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;