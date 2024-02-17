import React from "react";
const Sidebar = ({view, setView}) => {
    return (
        <div>
            <div className="pl-10 text-white">
                <ul className="">
                    <li
                        className={`m-3 rounded-md border-2 p-4 ${
                            view == "my-data" ? "active bg-nutri text-white" : " border-gray-400 text-nutri"
                        }`}
                        onClick={() => setView("my-data")}
                    >
                        <a href="" className="">
                            Mis Datos
                        </a>
                    </li>
                    <li
                        className={`m-3 rounded-md border-2 p-4 ${
                            view != "my-data" ? "active bg-nutri text-white": " border-gray-400 text-nutri"
                        }`}
                        onClick={() => setView("desactive-account")}
                    >
                        <a href="#" className="">
                            Desactivar Cuenta
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export { Sidebar };
