import React, { useContext, useState } from "react";
import { ShoppingCartContext } from "../../Context";
import { InputField } from "../InputField";
import { SubmitButton } from "../SubmitButton";
import { SelectField } from "../SelectField";
const ModalNutri = () => {
    const context = useContext(ShoppingCartContext);
    const closeModal = () => {
        context.setIsOpenModal(false);
    };
    const [createProductState, setProductState] = useState({
        name: "",
        description: "",
        categoryid: "",
        image: "",
        price: "",
        stock:"",
    });
    const displayErrors = (errors) => {
        setErrorMessages(errors);
    };
    const handleInputChange = (field, value) => {
        const stateUpdater = setProductState;
        stateUpdater((prevState) => ({ ...prevState, [field]: value }));
    };
    const renderInputField = (label, field, value, pattern, placeholder) => (
        <InputField
            label={label}
            type={field === "email" ? "email" : "text"}
            id={`grid-${field}`}
            value={value}
            placeholder={placeholder}
            onChange={(e) => handleInputChange(field, e.target.value)}
            pattern={pattern ? pattern.source : undefined}
        />
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
                                            <div>
                                                {renderInputField(
                                                    "Nombre",
                                                    "name",
                                                    createProductState.name,
                                                )}
                                                {renderErrorMessages("name")}
                                                </div>
                                                <div>
                                                {renderInputField(
                                                    "Descripción",
                                                    "description",
                                                    createProductState.price,
                                                )}
                                                {renderErrorMessages("price")}
                                                </div>
                                                <div>
                                                {renderInputField(
                                                    "Price",
                                                    "precio",
                                                    createProductState.price,
                                                )}
                                                {renderErrorMessages("price")}
                                                </div>
                                                <div>
                                                <SubmitButton className="mt-3"/>
                                                </div>
                                      
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <button
                                    onClick={closeModal}
                                    type="button"
                                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                                >
                                    Cerrar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export { ModalNutri };
