import React, { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { XMarkIcon } from "@heroicons/react/24/solid";
const OrderCard = props => {
    const context = useContext(ShoppingCartContext);
    const {id, title, imageUrl, price, handleDelete } = props;
    let renderXMarkIcon = "";
    if(handleDelete){
         <XMarkIcon className="h-6 w-6 text-black cursor-pointer" onClick={() => handleDelete(id)}/>;
        }
     return (
        <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-2">
                <figure className="w-20 h-20">
                    <img
                        className="w-full h-full rounded-lg object-cover"
                        src={imageUrl}
                        alt={title}
                    />
                </figure>
                <p className="text-sm font-light"> {title} </p>
            </div>
            <div className="flex items-center gap-2">
                <p className="text-lg font-medium">{price}</p>
                {renderXMarkIcon}
            </div>
        </div>
    );
};

export { OrderCard };
