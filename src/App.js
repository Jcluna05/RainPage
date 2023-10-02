import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Header from './components/header';
import Footer from './components/footer';
import QuienesSomos from './components/QuienesSomos';
import Convocatoria from './components/Convocatoria';
import Eventos from './components/Eventos';
import Contacto from './components/Contacto';

function App() {
  return (
    <Router>
      <Header /> {/* Menú de navegación que se repite en todas las páginas */}
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="quienessomos" element={<QuienesSomos />} />
        <Route path='convocatoria' element={<Convocatoria />} />
        <Route path='eventos' element={<Eventos />} />
        <Route path='contacto' element={<Contacto />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;


