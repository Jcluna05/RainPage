import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Header from './components/header';

function App() {
  return (
    <Router>
      <Header /> {/* Menú de navegación que se repite en todas las páginas */}
      <Routes>
        <Route path="" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;


