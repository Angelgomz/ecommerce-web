import React, { useState } from "react";
import { InputField } from "../InputField";
import { PasswordToggle } from "../PasswordToggle";
import { SubmitButton } from "../SubmitButton";
import "./index.css";
const FormRegister = () => {
    const baseUrl = '/api/register';
    const namePattern = /^[A-Za-z\s]+$/;
    const lastnamePattern = /^[A-Za-z\s]+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const addressPattern = /^.{5,}$/; // Minimum 5 characters
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState("");
    const [passwordRepeat, setPasswordRepeat] = useState("");
    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };
    const [showPasswordRepeat, setShowPasswordRepeat] = useState(false);
    const handleTogglePasswordRepeat = () => {
        setShowPasswordRepeat(!showPasswordRepeat);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const validations = [
            {
                condition: password !== passwordRepeat,
                message: "Passwords do not match.",
            },
            {
                condition: !namePattern.test(name),
                message: "Please enter a valid name.",
            },
            {
                condition: !lastnamePattern.test(lastname),
                message: "Please enter a valid last name.",
            },
            {
                condition: !emailPattern.test(email),
                message: "Please enter a valid email address.",
            },
            {
                condition: !addressPattern.test(address),
                message: "Please enter a valid address (minimum 5 characters).",
            },
        ];
        const validationError = validations.find(
            (validation) => validation.condition
        );
        if (validationError) {
            alert(validationError.message);
            return;
        }
        const formData = new FormData();
        formData.append("name", name);
        formData.append("lastname", lastname);
        formData.append("email", email);
        formData.append("address", address);
        formData.append("password", password);
        formData.append("password_confirmation", passwordRepeat);
        try{
        const response = await fetch(baseUrl,{
            method: "POST",
            body:formData,
          });
          if (!response.ok) {
            const errorMessage = await response.text();
            throw new Error(`Server error: ${errorMessage}`);
          }
          const responseData = await response.json();
          console.log("Server response:", responseData);
        } catch (error) {
          console.error("Fetch error:", error.message);
          alert("An error occurred while submitting the form. Please try again.");
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
                <InputField
                    label="Apellido"
                    type="text"
                    id="grid-last-name"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                    placeholder="Doe"
                    pattern={lastnamePattern.source}
                />
                <InputField
                    label="Email"
                    type="email"
                    id="grid-email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="johndoe@gmail.com"
                    pattern={emailPattern.source}
                />
                <InputField
                    label="Dirección"
                    type="address"
                    id="grid-address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="123 Main Street, Providencia, Santiago"
                    pattern={addressPattern.source}
                />
                <PasswordToggle
                    showPassword={showPassword}
                    handleTogglePassword={handleTogglePassword}
                    id={"password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    label={"Contraseña"}
                />
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
