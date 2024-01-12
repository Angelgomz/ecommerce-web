import React, { useState } from "react";
import { InputField } from "../InputField";
import { PasswordToggle } from "../PasswordToggle";
import { SubmitButton } from "../SubmitButton";
import "./index.css";

const FormRegister = () => {
    const baseUrl = "/api/register";
    const namePattern = /^[A-Za-z\s]+$/;
    const lastnamePattern = /^[A-Za-z\s]+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const addressPattern = /^.{5,}$/;
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [password, setPassword] = useState("");
    const [passwordRepeat, setPasswordRepeat] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessages, setErrorMessages] = useState([]);
    const displayErrors = (errors) => {
        setErrorMessages(errors);
    };
    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };
    const [showPasswordRepeat, setShowPasswordRepeat] = useState(false);
    const handleTogglePasswordRepeat = () => {
        setShowPasswordRepeat(!showPasswordRepeat);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", name);
        formData.append("lastname", lastname);
        formData.append("email", email);
        formData.append("address", address);
        formData.append("password", password);
        formData.append("password_confirmation", passwordRepeat);
        try {
            const response = await fetch(baseUrl, {
                method: "POST",
                responseType: "JSON",
                body: formData,
            });
            if (!response.ok) {
                const errorData = await response.json(); // Assuming Laravel sends JSON response for errors
                displayErrors(errorData.errors);
                return;
            }
            const responseData = await response.json();
        } catch (error) {
            alert(
                "An error occurred while submitting the form. Please try again."
            );
        }
    };

    return (
        <div className="flex justify-center items-center mt-32">
            <form className="w-full max-w-lg" onSubmit={handleSubmit}>
                <InputField
                    label="Nombre"
                    type="text"
                    id="grid-first-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jane"
                    pattern={namePattern.source}
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
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                    placeholder="Doe"
                    pattern={lastnamePattern.source}
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="johndoe@gmail.com"
                    pattern={emailPattern.source}
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
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="123 Main Street, Providencia, Santiago"
                    pattern={addressPattern.source}
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
                    showPassword={showPassword}
                    handleTogglePassword={handleTogglePassword}
                    id={"password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
                    showPassword={showPasswordRepeat}
                    handleTogglePassword={handleTogglePasswordRepeat}
                    id={"passwordRepeat"}
                    value={passwordRepeat}
                    onChange={(e) => setPasswordRepeat(e.target.value)}
                    label={"Repetir Contraseña"}
                />
                <SubmitButton />
            </form>
        </div>
    );
};
export { FormRegister };
