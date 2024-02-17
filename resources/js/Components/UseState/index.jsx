import React, { useState } from 'react';
const UseState = ({ name }) => {
    const [state,setState] = useState();
    const [error, setError] = useState(false);
    return (
        <>
            <div><h2>Eliminar ClassState</h2></div>
            <p>Por favor, escribe el siguiente código de seguridad: eliminar/nutrilicious</p>
            <input placeholder='Código de seguridad'></input>
            {error && (
                <p> Error: el codigo es incorrecto.</p>
            )}
            <button>Eliminar</button>
        </>
    );
};

export { UseState };
