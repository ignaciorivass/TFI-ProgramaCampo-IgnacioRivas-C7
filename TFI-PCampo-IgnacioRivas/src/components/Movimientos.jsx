import { useState } from 'useState';

const Movimientos = () => {
  const [movimientos, setMovimientos] = useState([
    { id: 1, caravana: 'AR-101', tipo: 'Traslado', origen: 'Potrero Norte 1', destino: 'Potrero Sur 2', fecha: '2026-05-10', motivo: 'Rotación de pasturas' },
  ]);

  const [form, setForm] = useState({ caravana: '', tipo: 'Traslado', origen: '', destino: '', fecha: '', motivo: '' });

  const handleGuardar = (e) => {
    e.preventDefault();
    setMovimientos([...movimientos, { ...form, id: Date.now() }]);
    setForm({ caravana: '', tipo: 'Traslado', origen: '', destino: '', fecha: '', motivo: '' });
  };

  return (
    <div className="container">
      <h2>Registro de Movimientos</h2>
      
      <div className="card" style={{ marginTop: '15px' }}>
        <h3>Registrar Movimiento / Traslado</h3>
        <form onSubmit={handleGuardar} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', marginTop: '10px' }}>
          <div>
            <label>Caravana:</label>
            <input required type="text" value={form.caravana} onChange={e => setForm({...form, caravana: e.target.value})} />
          </div>
          <div>
            <label>Tipo de Movimiento:</label>
            <select value={form.tipo} onChange={e => setForm({...form, tipo: e.target.value})}>
              <option value="Traslado">Traslado entre Potreros</option>
              <option value="Venta">Venta</option>
              <option value="Baja">Baja / Muerte</option>
            </select>
          </div>
          <div>
            <label>Origen:</label>
            <input required type="text" value={form.origen} onChange={e => setForm({...form, origen: e.target.value})} />
          </div>
          <div>
            <label>Destino:</label>
            <input required type="text" value={form.destino} onChange={e => setForm({...form, destino: e.target.value})} />
          </div>
          <div>
            <label>Fecha:</label>
            <input required type="date" value={form.fecha} onChange={e => setForm({...form, fecha: e.target.value})} />
          </div>
          <div>
            <label>Motivo:</label>
            <input required type="text" value={form.motivo} onChange={e => setForm({...form, motivo: e.target.value})} />
          </div>
          <div style={{ gridColumn: 'span 3' }}>
            <button type="submit">Registrar Movimiento</button>
          </div>
        </form>

        <h3 style={{ marginTop: '20px' }}>Historial de Movimientos</h3>
        <table>
          <thead>
            <tr>
              <th>Caravana</th>
              <th>Tipo</th>
              <th>Origen</th>
              <th>Destino</th>
              <th>Fecha</th>
              <th>Motivo</th>
            </tr>
          </thead>
          <tbody>
            {movimientos.map(m => (
              <tr key={m.id}>
                <td><strong>{m.caravana}</strong></td>
                <td>{m.tipo}</td>
                <td>{m.origen}</td>
                <td>{m.destino}</td>
                <td>{m.fecha}</td>
                <td>{m.motivo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Movimientos;