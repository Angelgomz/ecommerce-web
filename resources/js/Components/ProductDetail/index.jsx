import React, { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { StarIcon, XMarkIcon } from "@heroicons/react/24/solid";
import AxiosInstance from "../../Components/AxiosInstance";
import "./index.css";
import { QuantityInput } from "../QuantityInput";
const ProductDetail = () => {
    const context = useContext(ShoppingCartContext);
    console.log(context.productToShow);
    AxiosInstance.defaults.headers.common[
        "Authorization"
    ] = `Bearer ${context.plainTextToken}`;
    const makeRating = (productId,rating) => {
        let baseUrl = `api/rating`;
        AxiosInstance.post(baseUrl,JSON.stringify({
            productId: productId,
            rating: rating,
        }))
        .then((response) => {
            if (response.status >= 200 && response.status < 300) {
                }
        })
        .catch((error) => {
            if (error.response.data.errors) {
                displayErrors(error.response.data.errors);
            } else {
                context.setTextAlert(error.response.data.msg);
                context.setColorAlert("bg-red-500");
                context.setShowAlert(true);
            }
        })
    };
    return (
        <div
            className={`${
                context.isProductDetailOpen ? "flex" : "hidden"
            } product-detail flex-col fixed bg-white right-0 border boder border-green rounded-lg p-2`}
        >
            <div className="flex justify-between items-center p-1">
                <h2 className="font-medium text-lg text-nutri">Detalle</h2>
                <div>
                    <XMarkIcon
                        className="w-10 cursor-pointer"
                        onClick={() =>
                            context.setIsProductDetailOpen(
                                !context.isProductDetailOpen
                            )
                        }
                    />
                </div>
            </div>
            <div className="flex justify-center items-center">
                <img
                    className="w-4/5 h-4/5 rounded-lg"
                    src={"storage/" + context.productToShow.image}
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
                <div className="flex mb-2 mt-2">
                    {[...Array(5)].map((_, index) => (
                        <StarIcon onClick={() => makeRating(context.productToShow.id,index + 1)}
                            key={index}
                            className="h-5 w-5 text-yellow-400"
                        />
                    ))}
                </div>
                <QuantityInput product={context.productToShow.id} />
                <button className="text-white bg-nutri p-2 m-2 rounded-lg">
                    agregar al carrito
                </button>
            </p>
        </div>
    );
};
export { ProductDetail };
