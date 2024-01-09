import React, { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { PlusIcon, CheckIcon } from "@heroicons/react/24/solid";
const Card = ({ data }) => {
    const context = useContext(ShoppingCartContext);
    const addProductsToCart = (event, productData) => {
        event.stopPropagation();
        context.setCount(context.count + 1);
        context.setCartProducts([...context.cartProducts, productData]);
        context.openCheckoutSideMenu();
        context.closeProductDetail();
    };
    const showProduct = (productDetail) => {
        context.openProductDetail(!context.openProductDetail);
        context.setProductToShow(productDetail);
    };
    const renderIcon = (id) => {
        const isInCart =
            context.cartProducts.filter((product) => product.id === id).length >
            0;
        if (!isInCart) {
            return (
                <div
                    className="absolute top-0 right-0 flex justify-center items-center bg-white p-1"
                    onClick={(event) => addProductsToCart(event, data)}
                >
                    <PlusIcon className="w-4"></PlusIcon>
                </div>
            );
        } else {
            return (
                <div className="absolute top-0 right-0 flex justify-center items-center bg-white p-1">
                    <CheckIcon className="w-4"></CheckIcon>
                </div>
            );
        }
    };
    return (
        <div className="bg-white cursor-pointer w-56 h-60 rounded-lg">
            <figure
                className="relative mb-2 w-full h-4/5"
                onClick={() => showProduct(data)}
            >
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
                    {data?.category?.name}
                </span>
                <img
                    className="w-full h-full object-cover rounded-lg"
                    src={data.images[0]}
                ></img>
                {renderIcon(data.id)}
                <p className="flex justify-between ">
                    <span className="text-sm font-light">${data?.price}</span>
                    <span className="text-sm font-medium">{data?.title}</span>
                </p>
            </figure>
        </div>
    );
};

export { Card };
