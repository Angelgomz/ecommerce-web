import React, { useState, useContext, useEffect } from "react";
import { ShoppingCartContext } from "../../Context";
import AxiosInstance from "../../Components/AxiosInstance";
import { Layout } from "../../Components/Layout";
import { Alert } from "../../Components/Alert";
import { ModalNutri } from "../../Components/ModalNutri";
import DataTable from "react-data-table-component";
import {
    PencilIcon,
    PlusCircleIcon,
    TrashIcon,
} from "@heroicons/react/24/solid";

const AdminProducts = () => {
    const context = useContext(ShoppingCartContext);
    const [productsData, setProductsData] = useState([]);
    const [editProduct,setEditProduct] = useState("");
    const setModal = (product) => {
        setEditProduct(product);
        context.setIsOpenModal(true);
    }
    const columns = [
        {name: "Nombre", selector: (row) => row.name},
        {name: "Categoria",selector: (row) => row.category},
        {name: "Imagen",selector: (row) => row.image},
        {name: "Precio",selector: (row) => row.price},
        {name: "Stock",selector: (row) => row.stock,},
        {name: "Acciones",
        cell: (row) => (
                <div className="flex">
                    <button
                        onClick={() => setModal(row)}
                        className="flex justify-center items-center w-10 rounded-lg m-1 p-1 text-white bg-nutri"
                    >
                        <PencilIcon className="h-6 w-6" />
                    </button>
                    <button
                        onClick={() => setModal(row)}
                        className="flex justify-center items-center w-10 rounded-lg m-1 p-1 text-white bg-nutri"
                    >
                        <TrashIcon className="h-6 w-6" />
                    </button>
                </div>
        ),
        },
    ];
    useEffect(() => {
        AxiosInstance.defaults.headers.common[
            "Authorization"
        ] = `Bearer ${context.plainTextToken}`;
        AxiosInstance.get(`api/admin/products`).then((response) => {
            let products = [];
            for (var key in response.data.data) {
                let value = response.data.data[key];
                let product = {
                    id: value.id,
                    name: value.name,
                    category: value.category.name,
                    image: value.image,
                    price: value.price,
                    stock: value.stock,
                };
                products.push(product);
            }
            setProductsData(products);
        });
    }, []);
    return (
        <Layout>
            <Alert />
            <ModalNutri product={editProduct}/>
            <div className="flex flex-col">
                <div className="flex items-center justify-center m-5">
                    <h1 className="font-medium text-4xl uppercase dark-green">
                        MIS PRODUCTOS
                    </h1>
                </div>
                <div className="p-10">
                    <div
                        className="flex justify-center items-center w-20 rounded-lg m-2 p-1 text-white bg-nutri"
                        onClick={() => context.setIsOpenModal(true)}
                    >
                        <PlusCircleIcon> </PlusCircleIcon>
                        <p> agregar </p>
                    </div>
                    <div className="overflow-x-auto">
                        <DataTable
                            columns={columns}
                            data={productsData}
                            pagination
                        />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default AdminProducts;
