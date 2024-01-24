import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import { OrderCard } from "../../Components/OrderCard";
import { totalPrice } from "../../utils";
import { TrashIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { QuantityInput } from "../QuantityInput";
import "./index.css";

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext);

  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(
      (product) => product.id !== id
    );
    context.setCartProducts(filteredProducts);
  };

  const handleCheckout = () => {
    const currentDate = new Date();
    const orderToAdd = {
      date: `${currentDate.getDate()}.${currentDate.getMonth() + 1}.${currentDate.getFullYear()}`,
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts),
    };
    context.setCheckout(orderToAdd);
    localStorage.setItem("checkout", JSON.stringify(orderToAdd));
    return false;
  };

  return (
    <aside
      className={`${
        context.isCheckoutSideMenu ? "flex" : "hidden"
      } my-order flex-col fixed bg-white right-0 border border-black rounded-lg`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Mi Orden</h2>
        <XMarkIcon
          className="w-10 cursor-pointer"
          onClick={context.closeCheckoutSideMenu}
        />
      </div>
      <div className="px-6 overflow-y-scroll flex-1">
        {context.cartProducts.map((product) => (
          <div key={product.id} className="flex flex-col m-2 p-0">
          
            <OrderCard
              id={product.id}
              title={product.title}
              imageUrl={product.image}
              price={product.price}
              handleDelete={handleDelete}
            />
            <div className="flex"> 
            <QuantityInput product={product}/>
            <TrashIcon
              className="w-5 cursor-pointer text-gray absolute right-5"
              onClick={() => handleDelete(product.id)}
            />
            </div>
          </div>
        ))}
      </div>
      <div className="px-6">
        <div className="flex justify-between items-center mb-2">
          <span className="font-light">Precio:</span>
          <span className="font-medium text-nutri">
            ${totalPrice(context.cartProducts)}
          </span>
        </div>
        <Link to="/my-order/checkout">
          <button
            className="w-full bg-nutri py-3 text-white rounded-lg mb-10"
            onClick={handleCheckout}
          >
            Continuar
          </button>
        </Link>
      </div>
    </aside>
  );
};

export { CheckoutSideMenu };
