import React, { useState } from "react";
import { Layout } from "../../Components/Layout";
import { Sidebar } from "../../Components/Sidebar";
const Account = () => {
    const [userData, setUserData] = useState({
        name: "John",
        email: "john@example.com",
        address: "123 Main Street",
        phone: "123-456-7890",
    });
    const [editing, setEditing] = useState(false);
    const [editedData, setEditedData] = useState({ ...userData });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setUserData({ ...editedData });
        setEditing(false);
    };
return (
        <Layout>
            <div className="flex flex-col justify-center items-center">
                <div className="flex items-start justify-center relative w-full md:w-80 m-5">
                    <h1 className="font-medium text-4xl uppercase dark-green">
                        MI CUENTA
                    </h1>
                </div>
                <Sidebar />
                {editing ? (
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Name:</label>
                            <input
                                type="text"
                                name="name"
                                value={editedData.name}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <label>Email:</label>
                            <input
                                type="email"
                                name="email"
                                value={editedData.email}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <label>Address:</label>
                            <input
                                type="text"
                                name="address"
                                value={editedData.address}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <label>Phone:</label>
                            <input
                                type="text"
                                name="phone"
                                value={editedData.phone}
                                onChange={handleInputChange}
                            />
                        </div>
                        <button type="submit">Save</button>
                    </form>
                ) : (
                    <div>
                        <p>Name: {userData.name}</p>
                        <p>Email: {userData.email}</p>
                        <p>Address: {userData.address}</p>
                        <p>Phone: {userData.phone}</p>
                        <button onClick={() => setEditing(true)}>Edit</button>
                    </div>
                )}
            </div>
        </Layout>
    );
};

export default Account;
  