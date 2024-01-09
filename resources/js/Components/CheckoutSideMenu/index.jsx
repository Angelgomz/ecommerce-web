import React, { useContext, useState } from "react";
import { ShoppingCartContext } from "../../Context";
import { OrderCard } from "../../Components/OrderCard";
import { XMarkIcon } from "@heroicons/react/24/solid";
import "./index.css";
const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext);
    return (
        <aside
            className={`${
                context.isCheckoutSideMenu ? "flex" : "hidden"
            } my-order flex-col fixed bg-white right-0 border boder border-black rounded-lg`}
        >
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl">My Order</h2>
                <div>
                    <XMarkIcon
                        className="w-10 cursor-pointer"
                        onClick={() => context.closeCheckoutSideMenu()}
                    />
                </div>
            </div>
            <div className="px-6 overflow-y-scroll">
                {context.cartProducts.map((product) => (
                    <>
                    <OrderCard id={product.id} title={product.title} imageUrl={product.images} price={product.price}/>
                    </>
                ))}
            </div>
        </aside>
    );
};
export { CheckoutSideMenu };
