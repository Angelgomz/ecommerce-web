import React, { useState, useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import AxiosInstance from "../../Components/AxiosInstance";
import { InputField } from "../../Components/InputField";
import { SubmitButton } from "../../Components/SubmitButton";
import { Layout } from "../../Components/Layout";
import { Sidebar } from "../../Components/Sidebar";
import { SelectField } from "../../Components/SelectField";
import { UseSecurityReducer } from "../../Components/UseReducer";
const Account = () => {
    const context = useContext(ShoppingCartContext);
    const [view, setView] = useState("my-data");
    const [userData, setUserData] = useState(context.account);
    const [editing, setEditing] = useState(false);
    const [editedData, setEditedData] = useState({ ...userData });
    const handleInputChange = (name, value) => {
        setEditedData({ ...editedData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setUserData(editedData);
        AxiosInstance.defaults.headers.common[
            "Authorization"
        ] = `Bearer ${context.plainTextToken}`;
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
                        MI CUENTA
                    </h1>
                </div>
                <div className="flex flex-row w-[90%]">
                    <Sidebar view={view} setView={setView} />
                    <div className="ml-20 p-10 rounded-md border-2 border-gray-500 w-full">
                        {view === "my-data" ? (
                            editing ? (
                                <form onSubmit={handleSubmit}>
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
                                <div>
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
                            )
                        ) : (
                            <div>
                                <UseSecurityReducer />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Layout>
    );
};
export default Account;
