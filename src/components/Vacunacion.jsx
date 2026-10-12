import { useState } from 'react';

const Vacunacion = () => {
  const [registros, setRegistros] = useState([
    { id: 1, caravana: 'AR-101', vacuna: 'Aftosa', dosis: '2ml', enfermedad: 'Fiebre Aftosa', fecha: '2026-03-10' },
    { id: 2, caravana: 'AR-102', vacuna: 'Carbunclo', dosis: '2ml', enfermedad: 'Carbunclo bacteridiano', fecha: '2026-04-01' },
  ]);

  const [form, setForm] = useState({ caravana: '', vacuna: '', dosis: '', enfermedad: '', fecha: '' });

  const handleGuardar = (e) => {
    e.preventDefault();
    setRegistros([...registros, { ...form, id: Date.now() }]);
    setForm({ caravana: '', vacuna: '', dosis: '', enfermedad: '', fecha: '' });
  };

  return (
    <div className="container">
      <h2>Control Sanitario y Vacunaciones</h2>
      
      <div className="card" style={{ marginTop: '15px' }}>
        <h3>Registrar Nueva Aplicación</h3>
        <form onSubmit={handleGuardar} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', marginTop: '10px' }}>
          <div>
            <label>Caravana del Animal:</label>
            <input required type="text" value={form.caravana} onChange={e => setForm({...form, caravana: e.target.value})} />
          </div>
          <div>
            <label>Nombre de Vacuna:</label>
            <input required type="text" value={form.vacuna} onChange={e => setForm({...form, vacuna: e.target.value})} />
          </div>
          <div>
            <label>Enfermedad Prevista:</label>
            <input required type="text" value={form.enfermedad} onChange={e => setForm({...form, enfermedad: e.target.value})} />
          </div>
          <div>
            <label>Dosis:</label>
            <input required type="text" value={form.dosis} onChange={e => setForm({...form, dosis: e.target.value})} />
          </div>
          <div>
            <label>Fecha de Aplicación:</label>
            <input required type="date" value={form.fecha} onChange={e => setForm({...form, fecha: e.target.value})} />
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end', paddingBottom: '15px' }}>
            <button type="submit" style={{ width: '100%' }}>Registrar Vacunación</button>
          </div>
        </form>

        <h3 style={{ marginTop: '20px' }}>Historial Sanitario</h3>
        <table>
          <thead>
            <tr>
              <th>Caravana</th>
              <th>Vacuna</th>
              <th>Enfermedad</th>
              <th>Dosis</th>
              <th>Fecha de Aplicación</th>
            </tr>
          </thead>
          <tbody>
            {registros.map(r => (
              <tr key={r.id}>
                <td><strong>{r.caravana}</strong></td>
                <td>{r.vacuna}</td>
                <td>{r.enfermedad}</td>
                <td>{r.dosis}</td>
                <td>{r.fecha}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Vacunacion;