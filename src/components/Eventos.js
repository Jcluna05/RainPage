import React from 'react';
import '../styles/Eventos.css';

const Eventos = () => {
    const eventos = [
        { titulo: 'Evento 1', fecha: '1 de enero de 2024', descripcion: 'Descripción del evento 1' },
        { titulo: 'Evento 2', fecha: '2 de febrero de 2024', descripcion: 'Descripción del evento 2' },
        // Añade más eventos aquí...
    ];

    return (
        <div className="eventos">
            <h1>Eventos</h1>
            {eventos.map((evento, index) => (
                <div key={index} className="evento">
                    <h2>{evento.titulo}</h2>
                    <p>{evento.fecha}</p>
                    <p>{evento.descripcion}</p>
                </div>
            ))}
        </div>
    );
};

export default Eventos;
