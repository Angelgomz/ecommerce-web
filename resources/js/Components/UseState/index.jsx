import React, { useState } from "react";
const UseState = ({ name }) => {
    const [state, setState] = useState({
        error: false,
        deleted: false,
        confirmed: false,
        value: "",
    });
    const destroyUser = () => {
        setState({ ...state, deleted:true});
    };
    const handleInputChange = () => {
        setState({ ...state, error: false });
        setState({ ...state, value: event.target.value });
    };
    const handleSubmit = () => {
        state.value != "eliminar/nutrilicious"
            ? setState({ ...state, error: true })
            : setState({ ...state, confirmed: true });
    };
    return (
        <>
            <div>
                <h2 className="font-bold uppercase m-1">Desactivar cuenta</h2>
            </div>
            {!state.confirmed && !state.deleted ? (
                <div>
                    <p>
                        Por favor, escribe el siguiente código de seguridad:
                        <strong> eliminar/nutrilicious</strong>
                    </p>
                    <input
                        onChange={() => handleInputChange()}
                        value = { state.value }
                        placeholder="Código de seguridad"
                        className="m-2 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    ></input>
                    {state.error && (
                        <p className="m-1 text-red-700">
                            Error: el código es incorrecto.
                        </p>
                    )}
                    <div>
                        <button
                            className="bg-nutri text-white p-4 rounded-md"
                            onClick={() => handleSubmit()}
                        >
                            Eliminar
                        </button>
                    </div>
                </div>
            ) : state.confirmed && !state.deleted ? (
                <div>
                    <p> ¿Estás Segurx que deseas desactivar tu cuenta? </p>
                     Podrás iniciar sesión dentro de 30 días y todo seguirá igual. De lo contrario, después de 30 días, todo se eliminará...
                    <div className="flex">
                        <button
                            onClick={() =>
                                setState({ ...state, confirmed: false })
                            }
                            className="m-2 border-gray-400 rounded-md border-2 p-4 text-nutri"
                        >
                            Cancelar
                        </button>
                        <button
                            className="m-2 bg-nutri text-white p-4 rounded-md"
                            onClick={() => destroyUser()}
                        >
                            Eliminar
                        </button>
                    </div>
                </div>
            ) : (
                <div> <p><strong>Tu cuenta ha sido desactivada, te extrañaremos.... </strong> </p> </div>
            )}
        </>
    );
};

export { UseState };
