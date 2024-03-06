import React, { useContext, useState, useEffect } from "react";
import AxiosInstance from "../../Components/AxiosInstance";
import { Layout } from "../../Components/Layout";
import { ShoppingCartContext } from "../../Context";
import { Card } from "../../Components/Card";
import { ProductDetail } from "../../Components/ProductDetail";
import { CheckoutSideMenu } from "../../Components/CheckoutSideMenu";
const Store = () => {
    const context = useContext(ShoppingCartContext);
    const [items,setItems] = useState(context.items);
    useEffect(() => {
       AxiosInstance.defaults.headers.common[
            "Authorization"
        ] = `Bearer ${context.plainTextToken}`;
        AxiosInstance.get(
            `api/admin/products`,
        ).then((response) => {
            context.setItems(response.data.data);
        });
    }, []);
    const renderView = (items) => {
        items =
            context.searchByTitle?.length > 0 ? context.filteredItems : context.items;
        return items?.length > 0 ? (
            items?.map((item) => <Card key={item.id} data={item} />)
        ) : (
            <p>No hay resultados disponibles...</p>
        );
    };

    return (
        <Layout>
            <div className="flex flex-col justify-center items-center">
                <div className="flex items-start justify-start relative w-full md:w-80 m-5">
                    <h1 className="font-medium text-2xl uppercase dark-green">
                        Productos
                    </h1>
                </div>
                <input
                    type="text"
                    placeholder="Busca tu producto saludable"
                    className="rounded-lg border border-green w-full md:w-80 p-4 mb-4 focus:outline-none"
                    onChange={(event) =>
                        context.setSearchByTitle(event.target.value)
                    }
                />
                <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 p-2 md:p-1 md:gap-4 md:w-full max-w-screen-lg">
                    {renderView(items)}
                </div>
                <CheckoutSideMenu />
                <ProductDetail />
            </div>
        </Layout>
    );
};

export default Store;
