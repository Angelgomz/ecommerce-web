import React, { useState, useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { InputField } from "../../Components/InputField";
import { SubmitButton } from "../../Components/SubmitButton";
import { Layout } from "../../Components/Layout";
import { Sidebar } from "../../Components/Sidebar";
import { SelectField } from "../../Components/SelectField";

const Account = () => {
    const context = useContext(ShoppingCartContext);
    const [userData, setUserData] = useState(context.account);
    const [editing, setEditing] = useState(false);
    const [editedData, setEditedData] = useState({ ...userData });

    const handleInputChange = (name, value) => {
        setEditedData({ ...editedData, [name]: value });
        console.log(editedData);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setUserData({ ...editedData });
        fetch(`api/users/${userData.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: userData.name,
                lastname:userData.lastname,
                email: userData.email,
                address: userData.address,
                phone: userData.phone,
                commune_id:userData.commune_id
            }),
        })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.error("Error updating user:", error));
        setEditing(false);
    };

    return (
        <Layout>
            <div className="flex flex-col">
                <div className="flex items-center justify-center m-5">
                    <h1 className="font-medium text-4xl uppercase dark-green">
                        MI CUENTA
                    </h1>
                </div>
                <div className="flex flex-row w-[90%]">
                    <Sidebar />
                    {editing ? (
                        <form
                            onSubmit={handleSubmit}
                            className="ml-20 p-10 rounded-md border-2 border-gray-500 w-full"
                        >
                            <div className="m-2">
                                <InputField
                                    label="Nombre"
                                    type="text"
                                    id="grid-first-name"
                                    value={editedData.name}
                                    onChange={(e) =>
                                        handleInputChange(
                                            "name",
                                            e.target.value
                                        )
                                    }
                                    placeholder="Lucia"
                                />
                            </div>
                            <div className="m-2">
                                <InputField
                                    label="Apellido"
                                    type="text"
                                    id="grid-last-name"
                                    value={editedData.lastname}
                                    onChange={(e) =>
                                        handleInputChange(
                                            "lastname",
                                            e.target.value
                                        )
                                    }
                                    placeholder="Gómez"
                                />
                            </div>
                            <div className="m-2">
                                <InputField
                                    label="Email"
                                    type="email"
                                    id="grid-email"
                                    value={editedData.email}
                                    onChange={(e) =>
                                        handleInputChange(
                                            "email",
                                            e.target.value
                                        )
                                    }
                                    placeholder="example@example.com"
                                />
                            </div>
                            <div className="m-2">
                                <InputField
                                    label="Dirección"
                                    type="text"
                                    id="grid-address"
                                    value={editedData.address}
                                    onChange={(e) =>
                                        handleInputChange(
                                            "address",
                                            e.target.value
                                        )
                                    }
                                    placeholder="123 Main St"
                                />
                            </div>
                            <div className="m-2">
                                <SelectField
                                    label="Comuna"
                                    id="selectOption"
                                    value={editedData.commune_id}
                                    onChange={(e) =>
                                        handleInputChange(
                                            "commune_id",
                                            e.target.value
                                        )
                                    }
                                    options={context.communes.communes}
                                />
                            </div>
                            <div className="m-2">
                                <InputField
                                    label="Teléfono"
                                    type="text"
                                    id="grid-phone"
                                    value={editedData.phone}
                                    onChange={(e) =>
                                        handleInputChange(
                                            "phone",
                                            e.target.value
                                        )
                                    }
                                    placeholder="+56123-456-7890"
                                />
                            </div>
                            <SubmitButton />
                        </form>
                    ) : (
                        <div className="ml-20 p-10 rounded-md border-2 border-gray-500 w-full">
                            <p className="m-2">
                                <span className="font-bold uppercase m-1">
                                    Nombre:
                                </span>
                                {userData?.name}
                            </p>
                            <p className="m-2">
                                <span className="font-bold uppercase m-1">
                                    Apellido:
                                </span>
                                {userData?.lastname}
                            </p>
                            <p className="m-2">
                                <span className="font-bold uppercase m-1">
                                    Email:
                                </span>
                                {userData?.email}
                            </p>
                            <p className="m-2">
                                <span className="font-bold uppercase m-1">
                                    Dirección:
                                </span>
                                {userData?.address}
                            </p>
                            <p className="m-2">
                                <span className="font-bold uppercase m-1">
                                    Ciudad:
                                </span>
                                {userData?.commune?.name}
                            </p>
                            <p className="m-2">
                                <span className="font-bold uppercase m-1">
                                    Telefono:
                                </span>
                                {userData?.phone}
                            </p>
                            <button
                                className="bg-nutri text-white p-4 rounded-md"
                                onClick={() => setEditing(true)}
                            >
                                Editar
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </Layout>
    );
};

export default Account;
