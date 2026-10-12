import React from 'react';

const Navbar = ({ usuario, moduloActual, setModuloActual, onLogout }) => {
  return (
    <nav style={{ background: '#2c3e50', color: 'white', padding: '15px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h3 style={{ margin: 0 }}>🚜 Sistema Ganadero</h3>
      <div style={{ display: 'flex', gap: '15px' }}>
        <button 
          className={moduloActual === 'animales' ? '' : 'btn-secondary'}
          onClick={() => setModuloActual('animales')}
        >
          Animales
        </button>
        <button 
          className={moduloActual === 'vacunas' ? '' : 'btn-secondary'}
          onClick={() => setModuloActual('vacunas')}
        >
          Vacunación
        </button>
        <button 
          className={moduloActual === 'movimientos' ? '' : 'btn-secondary'}
          onClick={() => setModuloActual('movimientos')}
        >
          Movimientos
        </button>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <span><strong>{usuario.nombre}</strong> ({usuario.rol})</span>
        <button className="btn-danger" onClick={onLogout}>Salir</button>
      </div>
    </nav>
  );
};

export default Navbar;