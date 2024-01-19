import React from "react";
import Food from "./../../../images/food1.png";
import Food1 from "./../../../images/food2.png";
import Food2 from "./../../../images/food3.png";

const Products = () => {
  const foodImages = [Food, Food1, Food2];

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="dark-green text-4xl md:text-5xl"> Nuestros productos </h1>
      <p className="text-gray">
        Elige tu opción favorita y vive la experiencia nutri
      </p>
      <div className="flex flex-wrap justify-center items-center">
        {foodImages.map((food, index) => (
          <div key={index} className="flex flex-col justify-center items-center m-10">
            <img src={food} className="w-60 h-60" alt={`Food ${index +1}`} />
            <h6 className="text-gray">Crepes de vainilla</h6>
            <button className="hover:bg-white-700 text-white font-bold py-2 px-4 rounded-full btn-nutri">
              AGREGAR
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export { Products };
