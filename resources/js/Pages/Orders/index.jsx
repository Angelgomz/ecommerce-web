import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Layout } from "../../Components/Layout";
import { OrderCard } from "../../Components/OrderCard";
import { ShoppingCartContext } from "../../Context";
const Orders= () => {
    const context = useContext(ShoppingCartContext);
    return (
        <Layout>
            My Orders
            <div className="px-6 overflow-y-scroll flex-1">
                {context.order.map((order,index) => (
                    <Link to={`/my-orders/${order.id}`}>
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
