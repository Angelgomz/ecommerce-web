import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AxiosInstance from "../AxiosInstance";
import { InputField } from "../InputField";
import { SelectField } from "../SelectField";
import { PasswordToggle } from "../PasswordToggle";
import { SubmitButton } from "../SubmitButton";
import "./index.css";
const SignIn = ({ context }) => {
    const navigate = useNavigate();
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
        commune_id: "",
        phone: "",
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
        const formData = new FormData();
        const userState = view === "login" ? loginState : createUserState;
        const baseUrl = view == "login" ? "/api/auth/login" : "/api/register";
        Object.entries(userState).forEach(([key, value]) => {
            formData.append(key, value);
        });
        formData
            ? AxiosInstance.post(baseUrl, formData)
                  .then((response) => {
                      if (response.status >= 200 && response.status < 300) {
                          if (view != "login") {
                              setTextAlert(
                                  "Usuario registrado, ahora solo debes ingresar."
                              );
                              setColorAlert("bg-green-700");
                              setShowAlert(true);
                              setView("login");
                          } else {
                              let data = response.data;
                              context.setAccount(data.user);
                              context.setPlainTextToken(data.user.plain_text_token);
                              context.setIsAdmin(data.user?.roles?.name == 'admin' ?  true: false);
                              context.setSignOut(false);
                              localStorage.setItem(
                                  "signOut",
                                  JSON.stringify(false)
                              );
                              localStorage.setItem(
                                "isAdmin",
                                JSON.stringify(data.user?.roles[0].name == 'admin' ?  true: false)
                            );
                              localStorage.setItem(
                                  "account",
                                  JSON.stringify(data.user)
                              );
                              localStorage.setItem(
                                "plainTextToken",
                                JSON.stringify(data.user.plain_text_token)
                            );
                              navigate("/");
                              return;
                          }
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

    const renderErrorMessages = (field) =>
        errorMessages[field] &&
        errorMessages[field].map((data, index) => (
            <div key={index}>
                <p className="text-red-500 text-md italic">
                    <strong>* {data}</strong>
                </p>
            </div>
        ));
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
                                "Barroso"
                            )}
                            {renderErrorMessages("lastname")}
                            {renderInputField(
                                "Email",
                                "email",
                                createUserState.email,
                                emailPattern,
                                "paolabarroso@gmail.com"
                            )}
                            {renderErrorMessages("email")}
                            {renderInputField(
                                "Telefono",
                                "phone",
                                createUserState.phone,
                                "935486913"
                            )}
                            {renderErrorMessages("phone")}
                            {renderInputField(
                                "Dirección",
                                "address",
                                createUserState.address,
                                addressPattern,
                                "123  Main Street, Providencia, Chile"
                            )}
                            {renderErrorMessages("address")}
                            <SelectField
                                label="Comuna"
                                id="selectOption"
                                value={createUserState.commune_id}
                                onChange={(e) =>
                                    handleInputChange(
                                        "commune_id",
                                        e.target.value
                                    )
                                }
                                options={context.communes.communes}
                            />
                            {renderErrorMessages("commune_id")}
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
                            <div className="flex justify-center items-center">
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
                    <span className="block sm:inline text-white">
                        {textAlert}
                    </span>
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
