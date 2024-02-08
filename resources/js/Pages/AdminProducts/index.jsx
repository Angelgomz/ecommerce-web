import React, { useState, useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import AxiosInstance from "../../Components/AxiosInstance";
import { Layout } from "../../Components/Layout";
import DataTable from "react-data-table-component";

const AdminProducts = () => {
    const context = useContext(ShoppingCartContext);
    const [userData, setUserData] = useState(context.account);
    const [editing, setEditing] = useState(false);
    const [editedData, setEditedData] = useState({ ...userData });
    const data = [
        {
            id: 1,
            name: "Producto 1",
            description: "Descripción del producto 1",
            price: "$10.00",
            category: "Categoría A",
            image: "imagen1.jpg",
        },
        {
            id: 2,
            name: "Producto 2",
            description: "Descripción del producto 2",
            price: "$20.00",
            category: "Categoría B",
            image: "imagen2.jpg",
        },
        // Añade más objetos de productos según sea necesario
    ];

    const columns = [
        {
            name: "Nombre",
            selector: "name",
            sortable: true,
        },
        {
            name: "Descripción",
            selector: "description",
            sortable: true,
        },
        {
            name: "Precio",
            selector: "price",
            sortable: true,
        },
        {
            name: "Categoría",
            selector: "category",
            sortable: true,
        },
        {
            name: "Imagen",
            cell: (row) => (
                <img
                    src={row.image}
                    alt={row.name}
                    style={{ width: "50px", height: "50px" }}
                />
            ),
            sortable: false,
        },
    ];

    const handleInputChange = (name, value) => {
        setEditedData({ ...editedData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setUserData(editedData);
        AxiosInstance.defaults.headers.common[
            "Authorization"
        ] = `Bearer ${context.plain_text_token}`;
        AxiosInstance.put(
            `api/users/${userData.id}`,
            JSON.stringify({
                name: editedData.name,
                lastname: editedData.lastname,
                email: editedData.email,
                address: editedData.address,
                phone: editedData.phone,
                commune_id: editedData.commune_id,
                token: editedData.token,
            })
        ).then((response) => {
            localStorage.setItem("account", JSON.stringify(response.data.user));
            context.setAccount(response.data.user);
        });
        setEditing(false);
    };

    return (
        <Layout>
            <div className="flex flex-col">
                <div className="flex items-center justify-center m-5">
                    <h1 className="font-medium text-4xl uppercase dark-green">
                        MIS PRODUCTOS
                    </h1>
                </div>
                <div>
                    <DataTable
                        title="Lista de Productos"
                        columns={columns}
                        data={data}
                        pagination
                        selectableRows // Para permitir selección de filas
                    />
                </div>
            </div>
        </Layout>
    );
};

export default AdminProducts;
