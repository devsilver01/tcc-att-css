import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PaginaCadastro from './pages/Cadastro';
import PaginaListaUsuarios from './pages/Lista';
import PaginaBemVindo from './pages/Bemvindo';
// import PaginaTarefa from './pages/Tarefas';

import './App.css'; // Para estilos globais, se necessário
import PaginaLogin from './pages/Login';
import PaginaTarefa from './pages/Tarefas';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/cadastro" element={<PaginaCadastro />} />
        <Route path="/bemvindo" element={<PaginaBemVindo />} />
        <Route path="/usuarios" element={<PaginaListaUsuarios />} />
        <Route path="/login" element={<PaginaLogin />} />
        <Route path="/tarefas" element={<PaginaTarefa />} />
        <Route path="/" element={<PaginaBemVindo />} />
      </Routes>
    </Router>
  );
}

export default App;