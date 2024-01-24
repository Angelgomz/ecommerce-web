import React, { useContext, useState } from "react";
import { ShoppingCartContext } from "../../Context";
import { XMarkIcon} from "@heroicons/react/24/solid";
import "./index.css";
import { QuantityInput } from "../QuantityInput";
const ProductDetail = () => {
    const context = useContext(ShoppingCartContext);
    return (
        <div
            className={`${
                context.isProductDetailOpen ? "flex" : "hidden"
            } product-detail flex-col fixed bg-white right-0 border boder border-green rounded-lg p-2`}
        >
            <div
                className="flex justify-between items-center p-1"
            >
                <h2 className="font-medium text-lg text-nutri">Detail</h2>
                <div>
                    <XMarkIcon
                        className="w-10 cursor-pointer"
                        onClick={() =>  context.setIsProductDetailOpen(!context.isProductDetailOpen)}
                    />
                </div>
            </div>
            <div className="flex justify-center items-center">
                <img
                    className="w-4/5 h-4/5 rounded-lg"
                    src={context.productToShow.image}
                    alt={context.productToShow.title}
                ></img>
            </div>
            <p className="flex flex-col pl-1">
                {context.productToShow.title}
                <span className="font-medium text-nutri text-md text-xl">
                    ${context.productToShow.price}
                </span>
                <span className="font-light text-sm">
                    {context.productToShow.description}
                </span>
                <QuantityInput product={context.productToShow.id}/>
                <button className="text-white bg-nutri p-2 m-2 rounded-lg">
                    agregar al carrito{" "}
                </button>
            </p>
        </div>
    );
};
export { ProductDetail };
