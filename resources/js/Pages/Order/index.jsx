import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Layout } from "../../Components/Layout";
import { OrderCard } from "../../Components/OrderCard";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context";
const Order = () => {
    const context = useContext(ShoppingCartContext);
    const currentPath = window.location.pathname;
    let index = currentPath.substring(currentPath.lastIndexOf('/') + 1);
    if(index === 'last') index = context.order?.length -1;
    return (
        <Layout>
            <div className="flex w-80 items-center relative justify-center mb-1 mt-1">
                <Link to="/my-orders" className="absolute left-0">
                    <ChevronLeftIcon className="h-6 w-6"></ChevronLeftIcon>
                </Link>
                My Order
            </div>
            <div className="flex flex-col w-80">
                {context.order?.[index]?.products.map((order) => (
                    <OrderCard
                        key={order.id}
                        title={order.title}
                        imageUrl={order.image}
                        price={order.price}
                    />
                ))}
            </div>
        </Layout>
    );
};

export default Order;
