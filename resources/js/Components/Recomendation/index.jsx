import React from "react";
import Recomendation1 from "./../../../images/recomendation_1.png";
import Recomendation2 from "./../../../images/recomendation_2.png";
import Recomendation3 from "./../../../images/recomendation_3.png";
const Recomendation = () => {
    return (
        <div className="hidden md:flex flex-col justify-center items-center m-10">
            <h1 className="dark-green text-4xl md:text-5xl">
                Opiniones de nuestros clientes
            </h1>
            <div className="flex m-10 pl-[10%] pr-[10%] gap-5 cursor-pointer flex-col md:flex-row">
                <div className="flex flex-col justify-between text-gray text-justify border-2 rounded border-b-0 w-[100%] hover:scale-110">
                    <p className="text-gray-700 text-md p-5">
                        ¡La mejor comida saludable de Santiago! Todo lo que
                        ofrecen en su menú, es delicioso. El servicio es
                        excelente y la atención y la atención muy rápida.
                        Siempre estan presentes en mis ocasiones especiales y
                        así seguirá siendo en el futuro.
                    </p>
                    <div className="text-lg text-white bg-nutri flex flex-col justify-center items-center w-[100%] rounded-b p-0 relative bottom-0">
                        <img
                            className="w-20 h-20 pt-2 rounded-full"
                            src={Recomendation1}
                            alt="Liseudis Ruiz"
                        />
                        <p>Liseudis Ruiz </p>
                    </div>
                </div>
                <div className="flex flex-col justify-between text-gray text-justify border-2 rounded border-b-0 w-[100%] hover:scale-110">
                    <p className="text-gray-700 text-md p-5 ">
                        Nutri se convirtió en mi aliado a la hora de preparar
                        recetas ricas y saludables.
                    </p>
                    <div className="text-lg text-white bg-nutri flex flex-col justify-center items-center w-[100%] rounded-b mt-1 p-0 relative bottom-0">
                        <img
                            className="pt-2 w-20 h-20 rounded-full"
                            src={Recomendation2}
                            alt="José Pacheco"
                        />
                        <p>José Pacheco </p>
                    </div>
                </div>
                <div className="flex flex-col justify-between text-gray text-justify border-2 rounded border-b-0 w-[100%]  hover:scale-110">
                    <p className="text-gray-700 text-md p-5 ">
                        El valor de nutri no solo esta en sus productos
                        perfectos, si no también lo que transmite en sus
                        mensajes motivacionales ayudando en la creación de
                        recetas y una vida positiva.
                    </p>
                    <div className="text-lg text-white bg-nutri flex flex-col justify-center items-center w-[100%] rounded-b mt-1 p-0 relative bottom-0">
                        <img
                            className="w-20 h-20 pt-2 rounded-full"
                            src={Recomendation3}
                            alt="Daniela Mendez"
                        />
                        <p>Daniela Mendez </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { Recomendation };
