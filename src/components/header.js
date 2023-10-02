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
        <a href="/">
          <img src="/assets/LogotipoRain.png" alt="Logo de la empresa"/>
        </a>
      </div>
      <nav className="menu">
        <ul>
          <li><a href="/quienessomos">Quiénes Somos</a></li>
          <li><a href="/convocatoria">Convocatoria</a></li>
          <li
            onMouseEnter={handleEventMenuEnter}
            onMouseLeave={handleEventMenuLeave}
          >
            <a href="/eventos">Eventos</a>
            {isEventMenuOpen && (
              <ul className="submenu">
                <li><a href="/eventos/2023">Vr Day Latam 2023</a></li>
                <li><a href="/eventos/2022">Vr Day Latam 2022</a></li>
                <li><a href="/eventos/2021">Vr Day Latam 2021</a></li>
                <li><a href="/eventos/2020">Vr Day Latam 2020</a></li>
                <li><a href="/eventos/2019">Vr Day Latam 2019</a></li>
              </ul>
            )}
          </li>
          <li><a href="/contacto">Contáctenos</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
