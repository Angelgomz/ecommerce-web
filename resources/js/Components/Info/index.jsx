import React from "react";
import Picture from "./../../../images/luiselit.png";
import Sign from "./../../../images/sign.png";
import "./index.css";

const Info = () => {
  return (
    <div className="flex flex-wrap justify-center w-full items-center md:gap-10">
        <img src={Picture} className="w-80" alt="luiselit" />
      <div className="flex-col">
        <p className="text-4xl dark-green">
          SOMOS TU <strong> ALIADO <br />IDEAL</strong> PARA <br />LLEVAR UN ESTILO <br />DE VIDA<strong> SALUDABLE.</strong>
        </p>
        <span className="text-gray text-justify">
          No es una dieta, creemos que el cuerpo <br />
          no te invita a comer menos si no a comer mejor.
        </span>
        <img
          src={Sign}
          alt="sign"
          className="w-40 margin-left-auto"
        />
      </div>
    </div>
  );
};

export { Info };
