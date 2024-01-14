
import React, { useState, useContext } from "react";
import { InputField } from "../InputField";
import { PasswordToggle } from "../PasswordToggle";
import { SubmitButton } from "../SubmitButton";
import "./index.css";
const SignIn = ({ context }) => {
    const [showAlert, setShowAlert] = useState(false);
    const [colorAlert, setColorAlert] = useState("");
    const [textAlert, setTextAlert] = useState("");
    const [errorMessages, setErrorMessages] = useState([]);
    const [view, setView] = useState("login");
    const namePattern = /^[A-Za-z\s]+$/;
    const lastnamePattern = /^[A-Za-z\s]+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const addressPattern = /^.{5,}$/; // Minimum 5 characters
    const commonState = {
        email: "",
        password: "",
        showPassword: false,
    };
    const [loginState, setLoginState] = useState(commonState);
    const [createUserState, setCreateUserState] = useState({
        ...commonState,
        name: "",
        lastname: "",
        address: "",
        password_confirmation: "",
        showPasswordRepeat: false,
    });

    const displayErrors = (errors) => {
        setErrorMessages(errors);
    };

    const handleTogglePassword = () => {
        const stateUpdater =
            view === "login" ? setLoginState : setCreateUserState;
        stateUpdater((prevState) => ({
            ...prevState,
            showPassword: !prevState.showPassword,
        }));
    };

    const handleTogglePasswordRepeat = () => {
        setCreateUserState((prevState) => ({
            ...prevState,
            showPasswordRepeat: !prevState.showPasswordRepeat,
        }));
    };

    const handleInputChange = (field, value) => {
        const stateUpdater =
            view === "login" ? setLoginState : setCreateUserState;
        stateUpdater((prevState) => ({ ...prevState, [field]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const baseUrl = view == "login" ? "/api/auth/login" : "/api/register";
        const formData = new FormData();
        const userState = view === "login" ? loginState : createUserState;

        Object.entries(userState).forEach(([key, value]) => {
            formData.append(key, value);
        });

        try {
            const response = await fetch(baseUrl, {
                method: "POST",
                responseType: "JSON",
                body: formData,
            });

            if (!response.ok) {
                const errorData = await response.json();
                displayErrors(errorData.errors);
                return;
            }

            if (view != "login") {
                setTextAlert("Usuario registrado, ahora solo debes ingresar.");
                setColorAlert("bg-green-100");
                setShowAlert(true);
                setView("login");
            } else {
                let data = await response.json();
                context.setAccount(data.user);
                context.setSignOut(false);
                localStorage.setItem("sign-out", JSON.stringify(false));
                localStorage.setItem("account", JSON.stringify(data.user));
                window.location.href = 'http://127.0.0.1:8000/'
                return;
            }
        } catch (error) {
            alert(
                "An error occurred while submitting the form. Please try again."
            );
        }
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

    const renderErrorMessages = (field) => (
        errorMessages[field] &&
        errorMessages[field].map((data, index) => (
            <div key={index}>
                <p className="text-red-500 text-md italic">
                    <strong>* {data}</strong>
                </p>
            </div>
        ))
    );

    const renderView = () => {
        return (
            <div>
                {view === "create-user-info" && (
                    <>
                        <div>
                            {renderInputField(
                                "Nombre",
                                "name",
                                createUserState.name,
                                namePattern,
                                "Paola"
                            )}
                            {renderErrorMessages("name")}
                            {renderInputField(
                                "Apellido",
                                "lastname",
                                createUserState.lastname,
                                lastnamePattern,
                                "Barroso",
                            )}
                            {renderErrorMessages("lastname")}
                            {renderInputField(
                                "Email",
                                "email",
                                createUserState.email,
                                emailPattern,
                                "paolabarroso@gmail.com",
                            )}
                            {renderErrorMessages("email")}
                            {renderInputField(
                                "Dirección",
                                "address",
                                createUserState.address,
                                addressPattern,
                                "123  Main Street, Providencia, Chile"
                            )}
                            {renderErrorMessages("address")}
                            <PasswordToggle
                                showPassword={createUserState.showPassword}
                                handleTogglePassword={() =>
                                    handleTogglePassword()
                                }
                                id={"password"}
                                value={createUserState.password}
                                onChange={(e) =>
                                    handleInputChange(
                                        "password",
                                        e.target.value
                                    )
                                }
                                label={"Contraseña"}
                            />
                            {renderErrorMessages("password")}
                            {renderErrorMessages("password_confirmation")}
                            <PasswordToggle
                                showPassword={
                                    createUserState.showPasswordRepeat
                                }
                                handleTogglePassword={() =>
                                    handleTogglePasswordRepeat()
                                }
                                id={"passwordRepeat"}
                                value={createUserState.passwordRepeat}
                                onChange={(e) =>
                                    handleInputChange(
                                        "password_confirmation",
                                        e.target.value
                                    )
                                }
                                label={"Repetir Contraseña"}
                            />
                            <SubmitButton />
                        </div>
                    </>
                )}
                {view !== "create-user-info" && (
                    <>
                        <div>
                            {renderInputField(
                                "Email",
                                "email",
                                loginState.email,
                                undefined,
                                "paolabarroso@gmail.com"
                            )}
                            <PasswordToggle
                                showPassword={loginState.showPassword}
                                handleTogglePassword={() =>
                                    handleTogglePassword()
                                }
                                id={"password"}
                                value={loginState.password}
                                onChange={(e) =>
                                    handleInputChange(
                                        "password",
                                        e.target.value
                                    )
                                }
                                label={"Contraseña"}
                            />
                            <div className="relative left-[42%]">
                                <SubmitButton />
                            </div>
                        </div>
                        <div className="flex justify-center items-center m-4">
                            <a
                                className="w-100 color-text-secundary cursor-pointer"
                                onClick={() => setView("create-user-info")}
                            >
                                <strong> Registrarse </strong>
                            </a>
                        </div>
                    </>
                )}
            </div>
        );


    };

    return (
        <div className="flex justify-center items-center mt-32">
            <form className="w-full max-w-lg" onSubmit={handleSubmit}>
                <div
                    className={
                        showAlert
                            ? `${colorAlert} border  px-4 py-3 rounded relative`
                            : "hidden"
                    }
                    role="alert"
                >
                    <span className="block sm:inline">{textAlert}</span>
                    <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                        <strong>X</strong>
                    </span>
                </div>
                {renderView()}
            </form>
        </div>
    );
};

export default SignIn;
