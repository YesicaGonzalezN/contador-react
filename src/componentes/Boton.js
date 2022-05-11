import React from 'react';
import '../style/boton.css'

function Boton({ texto, botonDeClick, manejarClick }) {
    return (
        <button
        className={botonDeClick ? 'boton-clic' : 'boton-reiniciar'}
        onClick={manejarClick}>
        {texto}
        </button>
    );
}

export default Boton;