import React, { useState } from "react";
import { InputField } from "../InputField";
import { PasswordToggle } from "../PasswordToggle";
import { SubmitButton } from "../SubmitButton";
import "./index.css";

const SignIn = ({ account }) => {
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
        passwordRepeat: "",
    });

    const handleTogglePassword = (view) => {
        const stateUpdater =
            view === "login" ? setLoginState : setCreateUserState;
        stateUpdater((prevState) => ({
            ...prevState,
            showPassword: !prevState.showPassword,
        }));
    };

    const handleInputChange = (view, field, value) => {
        const stateUpdater =
            view === "login" ? setLoginState : setCreateUserState;
        stateUpdater((prevState) => ({ ...prevState, [field]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle form submission logic
        // ...
    };

    const renderView = () => {
        if (view === "create-user-info") {
            return (
                <div className="flex justify-center items-center mt-32">
                    <InputField
                        label="Nombre"
                        type="text"
                        id="grid-first-name"
                        value={createUserState.name}
                        onChange={(e) =>
                            setCreateUserState.name(e.target.value)
                        }
                        placeholder="Jane"
                        /*   pattern={createUserState.namePattern.source} */
                    />
                    {errorMessages["name"]
                        ? errorMessages["name"].map(function (data, index) {
                              return (
                                  <div key={index}>
                                      <p className="text-red-500 text-md italic">
                                          <strong>* {data}</strong>
                                      </p>
                                  </div>
                              );
                          })
                        : ""}
                    <InputField
                        label="Apellido"
                        type="text"
                        id="grid-last-name"
                        value={createUserState.lastname}
                        onChange={(e) =>
                            setCreateUserState.lastname(e.target.value)
                        }
                        placeholder="Doe"
                        /*  pattern={lastnamePattern.source} */
                    />
                    {errorMessages["lastname"]
                        ? errorMessages["lastname"].map(function (data, index) {
                              return (
                                  <div key={index}>
                                      <p className="text-red-500 text-md italic">
                                          <strong>* {data}</strong>
                                      </p>
                                  </div>
                              );
                          })
                        : ""}
                    <InputField
                        label="Email"
                        type="email"
                        id="grid-email"
                        value={createUserState.email}
                        onChange={(e) =>
                            setCreateUserState.email(e.target.value)
                        }
                        placeholder="johndoe@gmail.com"
                        /*   pattern={emailPattern.source} */
                    />
                    {errorMessages["email"]
                        ? errorMessages["email"].map(function (data, index) {
                              return (
                                  <div key={index}>
                                      <p className="text-red-500 text-md italic">
                                          <strong>* {data}</strong>
                                      </p>
                                  </div>
                              );
                          })
                        : ""}
                    <InputField
                        label="Dirección"
                        type="address"
                        id="grid-address"
                        value={createUserState.address}
                        onChange={(e) =>
                            setCreateUserState.address(e.target.value)
                        }
                        placeholder="123 Main Street, Providencia, Santiago"
                        /*pattern={addressPattern.source} */
                    />
                    {errorMessages["address"]
                        ? errorMessages["address"].map(function (data, index) {
                              return (
                                  <div key={index}>
                                      <p className="text-red-500 text-md italic">
                                          <strong>* {data}</strong>
                                      </p>
                                  </div>
                              );
                          })
                        : ""}
                    <PasswordToggle
                        showPassword={createUserState.showPassword}
                        handleTogglePassword={handleTogglePassword}
                        id={"password"}
                        value={createUserState.password}
                        onChange={(e) =>
                            setCreateUserState.Password(e.target.value)
                        }
                        label={"Contraseña"}
                    />
                    {errorMessages["password"]
                        ? errorMessages["password"].map(function (data, index) {
                              return (
                                  <div key={index}>
                                      <p className="text-red-500 text-md italic">
                                          <strong>* {data}</strong>
                                      </p>
                                  </div>
                              );
                          })
                        : ""}
                    <PasswordToggle
                        showPassword={createUserState.showPasswordRepeat}
                        handleTogglePassword={handleTogglePasswordRepeat}
                        id={"passwordRepeat"}
                        value={createUserState.passwordRepeat}
                        onChange={(e) =>
                            setCreateUserState.passwordRepeat(e.target.value)
                        }
                        label={"Repetir Contraseña"}
                    />
                    <SubmitButton />
                </div>
            );
        } else {
            return (
                <div>
                    <div className="flex justify-center items-center mt-32">
                        <InputField
                            label="Email"
                            type="email"
                            id="grid-email"
                            value={loginState.email}
                            onChange={(e) =>
                                setLoginState.email(e.target.value)
                            }
                            placeholder="johndoe@gmail.com"
                        />
                        <PasswordToggle
                            showPassword={loginState.showPassword}
                            handleTogglePassword={handleTogglePassword}
                            id={"password"}
                            value={loginState.password}
                            onChange={(e) =>
                                setLoginState.password(e.target.value)
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
                </div>
            );
        }
    };

    return (
        <div>
            <form className="w-full max-w-lg" onSubmit={handleSubmit}>
                {renderView()}
            </form>
        </div>
    );
};

export default SignIn;
