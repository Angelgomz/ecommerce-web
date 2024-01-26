import React, { useState, useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/solid";
import { totalPrice } from "../../utils";
const QuantityInput = ({ product }) => {
    const context = useContext(ShoppingCartContext);
    const [quantity, setQuantity] = useState(product ? product.cant : 1);
    const handleQuantityProduct = (value) => {
        setQuantity(quantity + value);
        const updatedProducts = context.checkout.products.map((item) =>
            item.id === product.id ? { ...item, cant: item.cant + value } : item
        );
        const updatedCheckout = {
            ...context.checkout,
            totalProducts: context.checkout.totalProducts + value,
            products: updatedProducts,
            totalPrice: totalPrice(updatedProducts),
        };
        const updatedCartProducts = context.cartProducts.map((item) =>
            item.id === product.id ? { ...item, cant: item.cant + value } : item
        );
        context.setCartProducts(updatedCartProducts);
        context.setCheckout(updatedCheckout);
        localStorage.setItem("checkout", JSON.stringify(updatedCheckout));
    };

    return (
        <div className="flex">
            <div className="bg-nutri p-1 w-10 h-10 text-white flex justify-center items-center">
                <PlusIcon
                    className="w-4 h-4 cursor-pointer"
                    onClick={() => handleQuantityProduct(1)}
                />
            </div>
            <input
                className="border border-gray-300 rounded-md focus:outline-none text-center h-[40px]"
                value={quantity} disabled
            />
            <div className="bg-nutri p-1 w-10 h-10 text-white flex justify-center items-center">
                <MinusIcon
                    className="w-4 h-4 cursor-pointer"
                    onClick={() =>
                        quantity > 1 ? handleQuantityProduct(-1) : ""
                    }
                />
            </div>
        </div>
    );
};
export { QuantityInput };
