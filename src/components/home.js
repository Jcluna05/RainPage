// Ejemplo de un componente de página (Home.js)
import React from 'react';
import ThreeScene from "./homepage/ThreeScene";
import Content from "./homepage/Content";


function Home() {
  return (
    <div>
      <h1>Página de Inicio</h1>
      <ThreeScene /> {/* Renderiza la escena de Three.js aquí */}
      <Content /> {/* Renderiza la escena de Content.js aquí */}
      <h1>Página de Inicio2</h1>
    </div>
  );
}

export default Home;
