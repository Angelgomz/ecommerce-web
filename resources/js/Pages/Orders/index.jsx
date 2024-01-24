import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Layout } from "../../Components/Layout";
import { OrdersCard } from "../../Components/OrdersCard";
import { ShoppingCartContext } from "../../Context";
const Orders = () => {
    const context = useContext(ShoppingCartContext);
    return (
        <Layout>
            <div className="flex flex-col justify-center w-full">
                <div className="flex items-center justify-center relative m-5">
                    <h1 className="font-medium text-2xl uppercase dark-green flex justify-center items-center">
                        MIS COMPRAS
                    </h1>
                </div>
                <div className="px-6 overflow-y-scroll flex-1">
                    {context.order.map((order, index) => (
                        <Link to={`/my-order/${index}`} key={index}>
                            <OrdersCard
                                key={index}
                                totalPrice={order.checkout.totalPrice}
                                totalProducts={order.checkout.totalProducts}
                                products = {order.checkout.products}
                                address = {order.account.address}
                                name= {order.account.name +' '+order.account.lastname}
                                phone = {order.account.phone}
                                date = {order.checkout.date}
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default Orders;
