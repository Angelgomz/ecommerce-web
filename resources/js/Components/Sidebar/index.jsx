import React, { useState } from "react";
const Sidebar = () => {
    const [isActive, setIsActive] = useState("my-data");
    return (
        <div>
            <div className="pl-10 text-white">
                <ul className="">
                    <li
                        className={`m-3 rounded-md border-2 p-4 ${
                            isActive == "my-data" ? "active bg-nutri text-white" : " border-gray-400 text-nutri"
                        }`}
                        onClick={() => setIsActive("my-data")}
                    >
                        <a href="" className="">
                            Mis Datos
                        </a>
                    </li>
                    <li
                        className={`m-3 rounded-md border-2 p-4 ${
                            isActive != "my-data" ? "active bg-nutri text-white": " border-gray-400 text-nutri"
                        }`}
                        onClick={() => setIsActive("desactive-account")}
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
