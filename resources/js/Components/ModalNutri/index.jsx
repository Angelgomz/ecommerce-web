import React, { useContext, useEffect, useState } from "react";
import { ShoppingCartContext } from "../../Context";
import { InputField } from "../InputField";
import { SubmitButton } from "../SubmitButton";
import AxiosInstance from "../AxiosInstance";
import { SelectField } from "../SelectField";
const ModalNutri = ({product}) => {
    console.log(product);
    const context = useContext(ShoppingCartContext);
    const [categories, setCategories] = useState(null);
    const closeModal = () => {
        context.setIsOpenModal(false);
    };
    const [createProductState, setProductState] = useState({
        name: "",
        description: "",
        category_id: "",
        image: "",
        price: "",
        stock: "",
    });
    const displayErrors = (errors) => {
        setErrorMessages(errors);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        const productState = createProductState;
        const baseUrl = "/api/admin/products";
        AxiosInstance.defaults.headers.common[
            "Authorization"
        ] = `Bearer ${context.plainTextToken}`;
        AxiosInstance.defaults.headers.common["Content-Type"] =
            "multipart/form-data";
        AxiosInstance.defaults.headers.common["processData"] = false;
        AxiosInstance.defaults.headers.common["cache"] = false;
        Object.entries(productState).forEach(([key, value]) => {
            formData.append(key, value);
        });
        formData
            ? AxiosInstance.post(baseUrl, formData, {})
                  .then((response) => {
                      if (response.status >= 200 && response.status < 300) {
                          context.setIsOpenModal(false);
                          context.setTextAlert("Producto registrado.");
                          context.setColorAlert("bg-green-700");
                          context.setShowAlert(true);
                      }
                  })
                  .catch((error) => {
                      if (error.response.data.errors) {
                          displayErrors(error.response.data.errors);
                      } else {
                          setTextAlert(error.response.data.msg);
                          setColorAlert("bg-red-500");
                          setShowAlert(true);
                      }
                  })
            : null;
    };
    const handleInputChange = (field, value) => {
        const stateUpdater = setProductState;
        value = field == "image" ? value.files[0] : value.value;
        stateUpdater((prevState) => ({ ...prevState, [field]: value }));
    };
    const renderInputField = (label, field, value, pattern, placeholder) => (
        <>
            <InputField
                label={label}
                type={field === "image" ? "file" : "text"}
                id={`grid-${field}`}
                value={value}
                placeholder={placeholder}
                onChange={(e) => handleInputChange(field, e.target)}
                pattern={pattern ? pattern.source : undefined}
            />
        </>
    );
    const [errorMessages, setErrorMessages] = useState([]);
    const renderErrorMessages = (field) =>
        errorMessages[field] &&
        errorMessages[field].map((data, index) => (
            <div key={index}>
                <p className="text-red-500 text-md italic">
                    <strong>* {data}</strong>
                </p>
            </div>
        ));
    useEffect(() => {
        const baseUrl = "/api/categories/";
        AxiosInstance.defaults.headers.common[
            "Authorization"
        ] = `Bearer ${context.plainTextToke}`;
        AxiosInstance.get(baseUrl).then((response) => {
            setCategories(response.data);
        });
    }, []);
    return (
        <div>
            {context.modal && (
                <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div
                            className="fixed inset-0 transition-opacity"
                            aria-hidden="true"
                        >
                            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                        </div>

                        <span
                            className="hidden sm:inline-block sm:align-middle sm:h-screen"
                            aria-hidden="true"
                        >
                            &#8203;
                        </span>

                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                                            Crear Producto
                                        </h3>
                                        <div className="mt-2">
                                            <form
                                                className="w-full max-w-lg"
                                                onSubmit={handleSubmit}
                                            >
                                                <div>
                                                    <SelectField
                                                        label="Category"
                                                        id="selectOption"
                                                        value={
                                                            createProductState.category_id
                                                        }
                                                        onChange={(e) =>
                                                            handleInputChange(
                                                                "category_id",
                                                                e.target
                                                            )
                                                        }
                                                        options={categories}
                                                    />
                                                </div>
                                                {renderErrorMessages(
                                                    "commune_id"
                                                )}
                                                <div>
                                                    {renderInputField(
                                                        "Nombre",
                                                        "name",
                                                        createProductState.name
                                                    )}
                                                    {renderErrorMessages(
                                                        "name"
                                                    )}
                                                </div>
                                                <div>
                                                    {renderInputField(
                                                        "Descripción",
                                                        "description",
                                                        createProductState.description
                                                    )}
                                                    {renderErrorMessages(
                                                        "description"
                                                    )}
                                                </div>
                                                <div>
                                                    {renderInputField(
                                                        "Imagen",
                                                        "image",
                                                        createProductState.image
                                                    )}
                                                    {renderErrorMessages(
                                                        "image"
                                                    )}
                                                </div>
                                                <div>
                                                    {renderInputField(
                                                        "Precio",
                                                        "price",
                                                        createProductState.price
                                                    )}
                                                    {renderErrorMessages(
                                                        "price"
                                                    )}
                                                </div>
                                                <div>
                                                    {renderInputField(
                                                        "Stock",
                                                        "stock",
                                                        createProductState.stock
                                                    )}
                                                    {renderErrorMessages(
                                                        "stock"
                                                    )}
                                                </div>
                                                <div className="mt-5">
                                                    <SubmitButton className="mt-5" />
                                                    <button
                                                        onClick={closeModal}
                                                        className="mt-5 w-full bg-indigo-700 text-white py-2 px-4 rounded"
                                                    >
                                                        Cerrar
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export { ModalNutri };
