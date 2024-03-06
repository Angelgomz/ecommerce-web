import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { PlusIcon, CheckIcon } from "@heroicons/react/24/solid";

const Card = ({ data }) => {
    const context = useContext(ShoppingCartContext);

    const addProductsToCart = (event, productData) => {
        event.stopPropagation();
        productData.cant = 1;
        context.setCount(context.count + 1);
        context.setCartProducts([...context.cartProducts, productData]);
        context.openCheckoutSideMenu();
    };

    const showProduct = (productDetail) => {
        context.openProductDetail(!context.openProductDetail);
        context.setProductToShow(productDetail);
    };

    const renderAddProduct = (id,type) => {
        const isInCart = context.cartProducts.some((product) => product.id === id);
            return (
                type === 'icon' ? (
                    <div className="absolute top-3 right-3 flex justify-center items-center bg-white p-1 rounded-full"
                     onClick={(event) => addProductsToCart(event, data)}>
                        {isInCart ? <CheckIcon className="w-5 text-nutri font-bold" /> : <PlusIcon className="w-5 text-nutri font-bold" />}
                    </div>
                ) : (
                    !isInCart && (
                        <button className="bg-nutri rounded-sm text-white text-md p-1"
                        onClick={(event) => addProductsToCart(event, data)}>
                            Agregar
                        </button>
                    )
                )
            );
        };
    return (
        <div className="flex flex-col h-80 justify-start items-center cursor-pointer border-2 border-gray rounded-lg">
            <figure className="relative mb-1 w-3/5 h-3/5" onClick={() => showProduct(data)}>
                <img className="w-full h-full object-cover rounded-lg" src={'/storage/'+data.image} loading="lazy" alt={data.name} />
                {renderAddProduct(data.id,'icon')}
                <div className="flex flex-col justify-center m-2">
                    <span className="text-sm text-gray font-bold">{data?.name}</span>
                    <span className="text-sm font-bold text-nutri">${data?.price}</span>
                    <div className="flex justify-center items-center">
                        {renderAddProduct(data.id,'button')}
                    </div>
                </div>
            </figure>
        </div>
    );
};

export { Card };
