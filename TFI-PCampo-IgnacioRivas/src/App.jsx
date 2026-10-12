import { useState } from 'useState';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Animales from './components/Animales';
import Vacunacion from './components/Vacunacion';
import Movimientos from './components/Movimientos';

function App() {
  const [usuario, setUsuario] = useState(null);
  const [moduloActual, setModuloActual] = useState('animales');

  if (!usuario) {
    return <Login onLogin={(usr) => setUsuario(usr)} />;
  }

  return (
    <div>
      <Navbar 
        usuario={usuario} 
        moduloActual={moduloActual} 
        setModuloActual={setModuloActual} 
        onLogout={() => setUsuario(null)} 
      />
      {moduloActual === 'animales' && <Animales usuario={usuario} />}
      {moduloActual === 'vacunas' && <Vacunacion />}
      {moduloActual === 'movimientos' && <Movimientos />}
    </div>
  );
}

export default App;