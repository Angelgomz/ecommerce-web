import React, { Fragment, useContext, useState } from "react";
import AxiosInstance from "../AxiosInstance";
import { ShoppingCartContext } from "../../Context";
import { NavLink } from "react-router-dom";
import {
    InboxIcon,
    DevicePhoneMobileIcon,
    HomeIcon,
    ShoppingBagIcon,
    Bars3Icon,
    XMarkIcon,
} from "@heroicons/react/24/solid";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import Logo from "./../../../images/logo_nutri.png";
import "./index.css";

const Navbar = () => {
    const activeStyle = "underline underline-offset-4";
    const context = useContext(ShoppingCartContext);
    const [openNavbarMobile, setOpenNavbarMobile] = useState(false);
    const isUserSignedIn =
        context.account && Object.keys(context.account).length > 0;
    const isUserSignOut =
        context.signOut || JSON.parse(localStorage.getItem("signOut"));
    const isAdmin =
        context.isAdmin || JSON.parse(localStorage.getItem("isAdmin"));
    const handleSignOut = () => {
        const { setSignOut, setAccount, plainText_token } = context;
        AxiosInstance.defaults.headers.common[
            "Authorization"
        ] = `Bearer ${context.plainTextToken}`;
        AxiosInstance.post("api/auth/logout").then(() => {
            localStorage.setItem("signOut", JSON.stringify(true));
            localStorage.setItem("account", JSON.stringify([]));
            localStorage.setItem("isAdmin", false);
            localStorage.setItem("plainTextToken", "");
            setSignOut(!setSignOut);
            setAccount([]);
        });
    };

    const renderView = () => {
        if (isUserSignedIn && !isUserSignOut) {
            return (
                <>
                    <NavLink
                        to="/my-orders"
                        className={({ isActive }) =>
                            isActive ? activeStyle : ""
                        }
                    >
                        Mis compras
                    </NavLink>
                    <NavLink
                        to="/account"
                        className={({ isActive }) =>
                            isActive ? activeStyle : ""
                        }
                    >
                        <strong>{context.account?.email}</strong>
                    </NavLink>
                    <li
                        onClick={handleSignOut}
                    >
                        Cerrar Sesión
                    </li>
                </>
            );
        } else {
            return (
                <NavLink
                    to="/sign-in"
                    className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }
                    onClick={handleSignOut}
                >
                    Ingresar
                </NavLink>
            );
        }
    };

    const toggleNavbarMobile = () => {
        setOpenNavbarMobile(!openNavbarMobile);
    };

    return (
        <Fragment>
            <div className="flex justify-between items-center fixed z-10 top-0 w-full py-3 text-sm font-light info-social-media text-white md:h-15em md:py-1 md:px-1">
                <div className="flex gap-1 md:m-2 md:gap-4">
                    <span className="flex md:gap-1">
                        <DevicePhoneMobileIcon className="w-4" />
                        <p className="text-sm md:text-md">+569208-44695</p>
                    </span>
                    <span className="flex md:gap-1">
                        <InboxIcon className="w-4" />
                        <p className="text-sm md:text-md">
                            info@nutrilicious.cl
                        </p>
                    </span>
                    <span className="flex md:gap-1">
                        <MapPinIcon className="w-4" />
                        <p className="text-sm md:text-md">Chile - Santiago</p>
                    </span>
                </div>
                <div className="cursor-pointer flex">
                    <FaFacebookF className="w-0 h-0 md:w-6 md:h-6" />
                    <FaInstagram className="w-0 h-0 sm:w-6 md:h-6" />
                </div>
            </div>
            <nav className="fixed z-10 top-10 w-full text-green text-sm font-light cursor-pointer flex flex-col bg-nutri px-0 py-3 md:flex-row md:justify-between md:px-2 md:text-white">
                <ul className="flex items-center gap-3">
                    <li>
                        <NavLink
                            to="/"
                            className={(isActive) =>
                                isActive ? activeStyle : ""
                            }
                        >
                            <img src={Logo} className="w-20" alt="logo" />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/"
                            className={(isActive) =>
                                isActive ? activeStyle : ""
                            }
                        >
                            <HomeIcon />
                        </NavLink>
                    </li>
                    <li
                        className={`text-white text-lg absolute right-0 ${
                            !openNavbarMobile ? "visible" : ""
                        } md:hidden`}
                        onClick={toggleNavbarMobile}
                    >
                        {openNavbarMobile ? (
                            <XMarkIcon className="w-10" />
                        ) : (
                            <Bars3Icon className="w-10" />
                        )}
                    </li>
                </ul>
                <ul
                    className={`flex flex-col gap-3 ul-mobile ${
                        openNavbarMobile ? "navbar-open" : "navbar-close"
                    } md:text-white md:bg-nutri md:visible md:items-center md:flex-row`}
                >
                    {isAdmin  == true ? (
                        <li>
                            <NavLink to="/adminProducts">Productos</NavLink>
                        </li>
                    ) : (
                        ""
                    )}
                    <li>
                        <NavLink to="/store">Tienda</NavLink>
                    </li>
                    {renderView()}
                    <li>
                        <NavLink
                            to="/cart"
                            className={(isActive) =>
                                isActive ? activeStyle : ""
                            }
                        >
                            <div className="flex">
                                <ShoppingBagIcon className="w-4 m-1" />
                                {context.count}
                            </div>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </Fragment>
    );
};
export default Navbar;
