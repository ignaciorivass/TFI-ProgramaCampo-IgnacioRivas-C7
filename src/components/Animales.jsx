import { useState } from 'react';   

const Animales = ({ usuario }) => {
  const [animales, setAnimales] = useState([ ]);

  const [filtroPotrero, setFiltroPotrero] = useState('');
  const [mostrarForm, setMostrarForm] = useState(false);
  const [nuevo, setNuevo] = useState({ caravana: '', sexo: 'Hembra', especie: 'Bovino', raza: '', peso: '', potrero: 'Potrero Norte 1' });

  const handleAgregar = (e) => {
    e.preventDefault();
    const item = {
      ...nuevo,
      id: Date.now(),
      peso: Number(nuevo.peso),
      estado: 'Activo'
    };
    setAnimales([...animales, item]);
    setNuevo({ caravana: '', sexo: 'Hembra', especie: 'Bovino', raza: '', peso: '', potrero: 'Potrero Norte 1' });
    setMostrarForm(false);
  };

  const handleEliminar = (id) => {
    // Regla de Negocio: Solo el Administrador puede eliminar registros críticos
    if (usuario.rol !== 'Administrador') {
      alert('Acceso Denegado: Solo el Administrador/Dueño puede eliminar animales.');
      return;
    }
    if (window.confirm('¿Desea dar de baja o eliminar el registro del animal?')) {
      setAnimales(animales.filter(a => a.id !== id));
    }
  };

  const listaFiltrada = filtroPotrero 
    ? animales.filter(a => a.potrero.toLowerCase().includes(filtroPotrero.toLowerCase()))
    : animales;

  return (
    <div className="container">
      <h2>Gestión de Animales</h2>
      
      <div className="card" style={{ marginTop: '15px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
          <input 
            type="text" 
            placeholder="Filtrar por potrero..." 
            value={filtroPotrero}
            onChange={(e) => setFiltroPotrero(e.target.value)}
            style={{ width: '300px', margin: 0 }}
          />
          <button onClick={() => setMostrarForm(!mostrarForm)}>
            {mostrarForm ? 'Cancelar' : '+ Registrar Animal'}
          </button>
        </div>

        {mostrarForm && (
          <form onSubmit={handleAgregar} style={{ background: '#f8f9fa', padding: '15px', borderRadius: '5px', marginBottom: '15px' }}>
            <h3>Nuevo Registro de Animal</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              <div>
                <label>Caravana:</label>
                <input required type="text" value={nuevo.caravana} onChange={e => setNuevo({...nuevo, caravana: e.target.value})} />
              </div>
              <div>
                <label>Sexo:</label>
                <select value={nuevo.sexo} onChange={e => setNuevo({...nuevo, sexo: e.target.value})}>
                  <option value="Hembra">Hembra</option>
                  <option value="Macho">Macho</option>
                </select>
              </div>
              <div>
                <label>Raza:</label>
                <input required type="text" value={nuevo.raza} onChange={e => setNuevo({...nuevo, raza: e.target.value})} />
              </div>
              <div>
                <label>Peso (kg):</label>
                <input required type="number" value={nuevo.peso} onChange={e => setNuevo({...nuevo, peso: e.target.value})} />
              </div>
              <div>
                <label>Potrero Asignado:</label>
                <select value={nuevo.potrero} onChange={e => setNuevo({...nuevo, potrero: e.target.value})}>
                  <option value="Potrero Norte 1">Potrero Norte 1</option>
                  <option value="Potrero Sur 2">Potrero Sur 2</option>
                  <option value="Potrero Maternidad">Potrero Maternidad</option>
                </select>
              </div>
            </div>
            <button type="submit">Guardar Animal</button>
          </form>
        )}

        <table>
          <thead>
            <tr>
              <th>Caravana</th>
              <th>Sexo</th>
              <th>Especie / Raza</th>
              <th>Peso (kg)</th>
              <th>Potrero</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {listaFiltrada.map(a => (
              <tr key={a.id}>
                <td><strong>{a.caravana}</strong></td>
                <td>{a.sexo}</td>
                <td>{a.especie} - {a.raza}</td>
                <td>{a.peso} kg</td>
                <td>{a.potrero}</td>
                <td><span style={{ color: 'green', fontWeight: 'bold' }}>{a.estado}</span></td>
                <td>
                  {usuario.rol === 'Administrador' && (
                    <button className="btn-danger" onClick={() => handleEliminar(a.id)}>Eliminar</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Animales;