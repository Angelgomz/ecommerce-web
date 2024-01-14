import React from "react";
import Picture from "./../../../images/luiselit.png";
import Sign from "./../../../images/sign.png";
import './index.css';
const Info = () => {
    return (
        <div className="flex justify-center w-100 h-80 mt-20 items-center">
            <div>
                <img src={Picture} className="w-80" alt="logo"></img>
            </div>
            <div className="pl-20 flex-col">
                <p className="text-4xl dark-green">
                    SOMOS TU <strong>ALIADO <br></br>PERFECTO</strong> PARA QUE <br></br>LLEVES
                    UN ESTILO <br></br>DE VIDA <strong>SALUDABLE.</strong>
                </p>
                <text className="pt-10 text-gray text-justify">
                    Más que una dieta, es un estilo de vida <br></br>
                    que cree firmemente en el cuerpo, que no
                    <br></br>
                    te invita a comer menos si no a comer mejor
                </text>
                <img src={Sign} className="w-40 relative bottom-0 margin-left-auto"></img>
            </div>
        </div>
    );
};
export { Info };
