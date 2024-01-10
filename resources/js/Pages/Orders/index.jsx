import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Layout } from "../../Components/Layout";
import { OrderCard } from "../../Components/OrderCard";
import { ShoppingCartContext } from "../../Context";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
const Orders= () => {
    const context = useContext(ShoppingCartContext);
    return (
        <Layout>
            <div className="flex w-80 items-center relative justify-center mb-1 mt-1">
            My Orders
            </div>
            <div className="px-6 overflow-y-scroll flex-1">
                {context.order.map((order,index) => (
                    <Link to={`/my-order/${index}`}>
                        <OrderCard
                            key={index}
                            totalPrice={order.totalPrice}
                            products={order.totalProducts}
                        />
                    </Link>
                ))}
            </div>
        </Layout>
    );
};

export default Orders;
