import React from "react";
const Card = () => {
    return (
        <div className="bg-white cursor-pointer w-56 h-60 rounded-lg">
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
                    Eletronics
                </span>
                <img
                    className="w-full h-full object-cover rounded-lg"
                    src=""
                ></img>
                <div clasName="absolute top-0 right-0 flex justify-center items-center bg-white p-1">
                    +
                </div>
                <p className="flex justify-between ">
                    <span className="text-sm font-light">$300CLP</span>
                    <span className="text-sm font-medium">Headphones</span>
                </p>
            </figure>
        </div>
    );
};

export { Card };
