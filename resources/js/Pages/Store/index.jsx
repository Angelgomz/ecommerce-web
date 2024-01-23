import React, { useContext, useState, useEffect } from "react";
import { Layout } from "../../Components/Layout";
import { ShoppingCartContext } from "../../Context";
import { Card } from "../../Components/Card";
import { ProductDetail } from "../../Components/ProductDetail";
import { CheckoutSideMenu } from "../../Components/CheckoutSideMenu";

const Store = () => {
    const [items, setItems] = useState(null);
    const context = useContext(ShoppingCartContext);

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then((response) => response.json())
            .then((data) => setItems(data));
    }, []);

    const renderView = (items) => {
        items =
            context.searchByTitle?.length > 0 ? context.filteredItems : items;
        return items?.length > 0 ? (
            items?.map((item) => <Card key={item.id} data={item} />)
        ) : (
            <p> No hay resultados disponibles... </p>
        );
    };

    return (
        <Layout>
            <div className="flex flex-col justify-center items-center">
                <div className="flex items-start justify-start relative w-80 m-5">
                    <h1 className="font-medium text-2xl uppercase dark-green">
                        Productos
                    </h1>
                </div>
                <input
                    type="text"
                    placeholder="Busca tu producto saludable"
                    className="rounded-lg border border-green w-80 p-4 mb-4 focus:outline-none"
                    onChange={(event) =>
                        context.setSearchByTitle(event.target.value)
                    }
                />
                <div className="grid gap-2 grid-cols-2 p-2 md:p-1 md:gap-4 md:grid-cols-3 md:w-full max-w-screen-lg">
                    {renderView(items)}
                </div>
                <CheckoutSideMenu />
                <ProductDetail />
            </div>
        </Layout>
    );
};

export default Store;
