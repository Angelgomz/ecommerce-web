import React, { useContext } from "react";
import { Layout } from "../../Components/Layout";
import { OrderCard } from "../../Components/OrderCard";
import { ShoppingCartContext } from "../../Context";
const Order = () => {
    const context = useContext(ShoppingCartContext);
    return (
        <Layout>
            My Order
            <div className="flex flex-col w-80">
            {context.order?.[0]?.products.map((order) => (
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
