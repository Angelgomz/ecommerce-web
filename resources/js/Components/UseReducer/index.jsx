import React, { useReducer, useEffect } from "react";

const securityCode = "eliminar/nutrilicious";
const initialState = {
    error: false,
    deleted: false,
    confirmed: false,
    value: "",
    loading: true,
};

const reducerObject = (state, payload) => ({
    WRITE: {
        ...state,
        value: payload,
    },
    ERROR: {
        ...state,
        error: true,
        loading: false,
    },
    CHECK: {
        ...state,
        loading: !state.loading,
        error: false,
    },
    CONFIRM: {
        ...state,
        confirmed: true,
    },
    DESCONFIRM: {
        ...state,
        confirmed: false,
    },
    DELETE: {
        ...state,
        deleted: true,
    },
});

const reducer = (state, action) => {
    return reducerObject(state, action.payload)[action.type] || state;
};

const UseSecurityReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    useEffect(() => {
        if (state.value === securityCode) {
            dispatch({ type: "CONFIRM" });
        } else if (state.value.length > 0) {
            dispatch({ type: "ERROR" });
        }
        
    }, [state.loading]);
    console.log(state.value, state.value.length);
    return (
        <div>
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
                        onChange={(ev) =>
                            dispatch({
                                type: "WRITE",
                                payload: ev.target.value,
                            })
                        }
                        value={state.value}
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
                            onClick={() => dispatch({ type: "CHECK" })}
                        >
                            Eliminar
                        </button>
                    </div>
                </div>
            ) : state.confirmed && !state.deleted ? (
                <div>
                    <p> ¿Estás Segurx que deseas desactivar tu cuenta? </p>
                    Podrás iniciar sesión dentro de 30 días y todo seguirá
                    igual. De lo contrario, después de 30 días, todo se
                    eliminará...
                    <div className="flex">
                        <button
                            onClick={() => dispatch({ type: "DESCONFIRM" })}
                            className="m-2 border-gray-400 rounded-md border-2 p-4 text-nutri"
                        >
                            Cancelar
                        </button>
                        <button
                            className="m-2 bg-nutri text-white p-4 rounded-md"
                            onClick={() => dispatch({ type: "DELETE" })}
                        >
                            Eliminar
                        </button>
                    </div>
                </div>
            ) : (
                <div>
                    <p>
                        <strong>
                            Tu cuenta ha sido desactivada, te extrañaremos....
                        </strong>
                    </p>
                </div>
            )}
        </div>
    );
};

export { UseSecurityReducer };
