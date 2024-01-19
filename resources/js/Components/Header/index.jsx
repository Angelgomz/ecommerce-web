import React from "react";
import CircleImage from "./../../../images/circle.png";
import FoodImage1 from "./../../../images/food1.png";
import FoodImage2 from "./../../../images/food2.png";
import FoodImage3 from "./../../../images/food3.png";
import FlowerImage from "./../../../images/flornutri.png";
import "./index.css";

const Header = () => {
  const foodImages = [FoodImage1, FoodImage2, FoodImage3];
  return (
    <div className="p-5 text-white header bg-nutri flex flex-col justify-center items-center md:flex-row md:mt-10 md:p-10">
      <div className="md:order-2">
        <div
          id="circle"
          className="circle flex justify-center items-center w-80 h-80 md:w-96 md:h-96"
          style={{ backgroundImage: `url(${CircleImage})` }}
        >
          {foodImages.map((food, index) => (
            <img
              key={index}
              src={food}
              alt={`Food ${index + 1}`}
              className="w-80 h-80 md:w-80 md:h-80"
            />
          ))}
        </div>
        <img
          className="hidden bottom-0 right-0 w-20 h-20 flower-nutri md:block"
          src={FlowerImage}
          alt="Flower Nutri"
        />
      </div>
      <div className="flex flex-col justify-center items-center md:justify-start md:items-start md:flex-row">
        <div className="pt-5 sm:order-1 md:pt-10">
          <p className="header-text-title md:font-bold">
            Tu <strong>bienestar </strong>
            <br />
            ahora es tu plato favorito
          </p>
          <p className="header-text-subtitle">
            alimentación saludable
            <br />
            a la puerta de tu casa.
          </p>
          <button className="bg-white font-semibold py-5 px-6 rounded mt-3 text-green">
            Ver menú
          </button>
        </div>
      </div>
    </div>
  );
};

export { Header };
