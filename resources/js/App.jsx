import React, { useContext } from "react";
import { useRoutes, BrowserRouter, Navigate } from "react-router-dom";
import { ShoppingCartProvider, ShoppingCartContext } from "./Context";
import { createRoot } from "react-dom/client";
import Home from "./Pages/Home";
import Store from "./Pages/Store";
import Order from "./Pages/Order";
import Orders from "./Pages/Orders";
import Navbar from "./Components/Navbar";
import SignIn from "./Pages/SignIn";
import Account from "./Pages/Account";
const AppRoutes = () => {
    const context = useContext(ShoppingCartContext);
    const isUserSignedIn =
        context.account && Object.keys(context.account).length > 0;
    const isUserSignOut =
        context.signOut || JSON.parse(localStorage.getItem("sign-out"));
    let routes = useRoutes([
        { path: "/", element: <Home /> },
        { path: "/store", element: <Store /> },
        { path: "/sign-in", element: <SignIn /> },
        { path: "/my-order", element: <Order /> },
        {
            path: "/account",
            element:
                isUserSignedIn && !isUserSignOut ? (
                    <Account />
                ) : (
                    <Navigate replace to={"/sign-in"} />
                ),
        },
        {
            path: "/my-order/last",
            element:
                isUserSignedIn && !isUserSignOut ? (
                    <Order />
                ) : (
                    <Navigate replace to={"/sign-in"} />
                ),
        },
        {
            path: "/my-order/checkout",
            element:<Order />
        },
        {
            path: "/my-order/:id",
            element:
                isUserSignedIn && !isUserSignOut ? (
                    <Order />
                ) : (
                    <Navigate replace to={"/sign-in"} />
                ),
        },
        {
            path: "/my-orders",
            element:
                isUserSignedIn && !isUserSignOut ? (
                    <Orders />
                ) : (
                    <Navigate replace to={"/sign-in"} />
                ),
        },
    ]);
    return routes;
};

const App = () => {
    return (
        <ShoppingCartProvider>
            <BrowserRouter>
                <Navbar />
                <AppRoutes />
            </BrowserRouter>
        </ShoppingCartProvider>
    );
};

if (document.getElementById("root")) {
    createRoot(document.getElementById("root")).render(<App />);
}
