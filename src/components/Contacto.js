import React from 'react';
import '../styles/Contacto.css';

const Contacto = () => {
    return (
        <div className="contacto">
            <h1>Contacto</h1>
            <form>
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre" required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="mensaje">Mensaje:</label>
                <textarea id="mensaje" name="mensaje" required></textarea>

                <input type="submit" value="Enviar" />
            </form>
        </div>
    );
};

export default Contacto;
