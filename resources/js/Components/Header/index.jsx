import React from "react";
import Circle from "./../../../images/circle.png";
import Food from "./../../../images/food1.png";
import Food1 from "./../../../images/food2.png";
import Food2 from "./../../../images/food3.png";
import Flower from "./../../../images/flornutri.png";
import "./index.css";

const Header = () => {
    const foodImages = [Food, Food1, Food2];
    return (
            <template className="text-white flex justify-center mt-10 p-10 header">
                <div className="pt-10">
                    <p className="font-bold header-text-title">
                        Tu <strong>bienestar </strong>
                        <br></br>
                        ahora es tu plato favorito
                    </p>
                    <p className="header-text-subtitle">
                        alimentación saludable
                        <br></br>a la puerta de tu casa.
                    </p>
                    <button className="bg-white font-semibold py-5 px-6 rounded mt-3 text-green">
                        Ver menú
                    </button>
                </div>
                <div>
                    <div
                        id="circle"
                        className="w-96 h-96 circle flex justify-center items-center"
                        style={{ backgroundImage: `url(${Circle})` }}
                    >
                        {foodImages.map((food, index) => (
                            <img
                                key={index}
                                src={food}
                                className="w-80 h-80"
                            ></img>
                        ))}
                    </div>
                    <img
                        src={Flower}
                        className="bottom-0 right-0 w-20 h-20 flower-nutri"
                    />
                </div>
            </template>
    );
};
export { Header };
