import React, { useState, useContext, useEffect } from "react";
import { ShoppingCartContext } from "../../Context";
import AxiosInstance from "../../Components/AxiosInstance";
import { Layout } from "../../Components/Layout";
import { ModalNutri } from "../../Components/ModalNutri";
import DataTable from "react-data-table-component";
import { PlusCircleIcon } from "@heroicons/react/24/solid";

const AdminProducts = () => {
    const context = useContext(ShoppingCartContext);
    const [productsData, setProductsData] = useState([]);
    const columns = [
        {
            name: "Nombre",
            selector: (row) => row.title,
        },
        {
            name: "Categoria",
            selector: (row) => row.year,
        },
        {
            name: "Imagen",
            selector: (row) => row.year,
        },
        {
            name: "Precio",
            selector: (row) => row.year,
        },
        {
            name: "Stock",
            selector: (row) => row.year,
        },
    ];
    let data = [
        {
            id: 1,
            title: "Beetlejuice",
            year: "1988",
        },
        {
            id: 2,
            title: "Ghostbusters",
            year: "1984",
        },
    ];
    useEffect(() => {
        AxiosInstance.defaults.headers.common[
            "Authorization"
        ] = `Bearer ${context.plainTextToken}`;
        AxiosInstance.get(`api/admin/products`).then((response) => {
          //  console.log(response);
            //   localStorage.setItem("account", JSON.stringify(response.data.user));
            //  context.setAccount(response.data.user);
        });
        setProductsData(data);
    }, []);
    const handleSubmit = (e) => {
        e.preventDefault();
      //  setUserData(editedData);
    };

    return (
        <Layout>
            <ModalNutri/>
            <div className="flex flex-col">
                <div className="flex items-center justify-center m-5">
                    <h1 className="font-medium text-4xl uppercase dark-green">
                        MIS PRODUCTOS
                    </h1>
                </div>
                <div className="p-10">
                    <div className="flex justify-center items-center w-20 rounded-lg m-2 p-1 text-white bg-nutri"
                    onClick={() => context.setIsOpenModal(true)}>
                        <PlusCircleIcon> </PlusCircleIcon>
                        <p> agregar </p>
                    </div>
                    <DataTable
                        columns={columns}
                        data={productsData}
                        pagination
                    />
                </div>
            </div>
        </Layout>
    );
};

export default AdminProducts;
