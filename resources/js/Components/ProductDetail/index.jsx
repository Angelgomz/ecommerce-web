import React, { useContext, useState } from "react";
import { ShoppingCartContext } from "../../Context";
import { XMarkIcon } from '@heroicons/react/24/solid';
import './index.css'
const ProductDetail = () => {
    const context = useContext(ShoppingCartContext);
    return (
        <aside className={`${context.isProductDetailOpen ? 'flex': 'hidden'} product-detail flex-col fixed bg-white right-0 border boder border-black rounded-lg`}> 
            <div className="flex justify-between items-center p-6" onClick={() => context.closeProductDetail}>
                <h2 className="font-medium text-xl">Detail</h2>
                <div><XMarkIcon className="w-10 cursor-pointer"  onClick={() => context.closeProductDetail}/></div> 
            </div>
            <figure className="px-6">
                <img className="w-full h-full rounded-lg" src={context.productToShow.images} alt={context.productToShow.title}>
                </img>
                {context.productToShow.title}
            </figure>
            <p className="flex flex-col p-6">
                <span className="font-medium text-2-xl">${context.productToShow.price}</span>
                <span className="font-medium text-md">{context.productToShow.title}</span>
                <span className="font-light text-md">{context.productToShow.description}</span>
            </p>
        </aside>
    )
}
export {ProductDetail}