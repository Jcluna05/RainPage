import React, { useState } from "react";
import "../styles/header.css";

const Header = () => {
  const [isEventMenuOpen, setEventMenuOpen] = useState(false);

  const handleEventMenuEnter = () => {
    setEventMenuOpen(true);
  };

  const handleEventMenuLeave = () => {
    setEventMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src="/assets/LogotipoRain.png" alt="Logo de la empresa" />
      </div>
      <nav className="menu">
        <ul>
          <li><a href="/home">Quiénes Somos</a></li>
          <li><a href="#">Convocatoria</a></li>
          <li
            onMouseEnter={handleEventMenuEnter}
            onMouseLeave={handleEventMenuLeave}
          >
            <a href="#">Eventos</a>
            {isEventMenuOpen && (
              <ul className="submenu">
                <li><a href="#">Vr Day Latam 2023</a></li>
                <li><a href="#">Vr Day Latam 2022</a></li>
                <li><a href="#">Vr Day Latam 2021</a></li>
                <li><a href="#">Vr Day Latam 2020</a></li>
                <li><a href="#">Vr Day Latam 2019</a></li>
              </ul>
            )}
          </li>
          <li><a href="#">Contáctenos</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
