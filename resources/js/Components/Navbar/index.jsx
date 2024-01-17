import React, { Fragment, useContext, useState } from "react";
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
    const [openNavbarMobile, setOpenNavbarMobile] = useState(false);
    const context = useContext(ShoppingCartContext);
    const isUserSignedIn = context.account && Object.keys(context.account).length > 0;
    const isUserSignOut = context.signOut || JSON.parse(localStorage.getItem("sign-out"));

    const handleSignOut = () => {
        localStorage.setItem("sign-out", JSON.stringify(true));
        localStorage.setItem("account", JSON.stringify([]));
        context.setSignOut(!context.setSignOut);
        context.setAccount([]);
    };

    const renderView = () =>
        isUserSignedIn && !isUserSignOut ? (
            <>
                <NavLink to="/my-orders" className={({ isActive }) => (isActive ? activeStyle : "")}>
                    My Orders
                </NavLink>
                <NavLink to="/account" className={({ isActive }) => (isActive ? activeStyle : "")}>
                    My Account
                </NavLink>
                <li className="text-white mr-2">
                    <strong>{context.account?.email}</strong>
                </li>
                <NavLink
                    to="/sign-in"
                    className={({ isActive }) => (isActive ? activeStyle : undefined)}
                    onClick={handleSignOut}
                >
                    Cerrar Sesión
                </NavLink>
            </>
        ) : (
            <NavLink
                to="/sign-in"
                className={({ isActive }) => (isActive ? activeStyle : undefined)}
                onClick={handleSignOut}
            >
                Ingresar
            </NavLink>
        );

    return (
        <Fragment>
            <div className="flex justify-between items-center fixed z-10 top-0 w-full py-3 text-sm font-light info-social-media text-white md:h-15em md:py-1 md:px-1">
                <div className="flex gap-2 md:m-2 md:gap-4">
                    <span className="flex md:gap-1">
                        <DevicePhoneMobileIcon className="w-4 md:w-4" />
                        (+569)208-44695
                    </span>
                    <span className="flex md:gap-1">
                        <InboxIcon className="w-4 md:w-4" />
                        info@nutrilicious.cl
                    </span>
                    <span className="flex md:gap-1">
                        <MapPinIcon className="w-4 md:w-4" />
                        Chile - Santiago
                    </span>
                </div>
                <div className="flex cursor-pointer">
                    <FaFacebookF className="w-4 h-4 md:w-6 md:h-6" />
                    <FaInstagram className="w-4 h-4 md:w-6 md:h-6" />
                </div>
            </div>
            <nav className="fixed z-10 top-10 w-full text-green text-sm font-light cursor-pointer flex flex-col bg-nutri px-0 py-3 md:flex-row md:justify-between md:px-2 md:text-white">
                <ul className="flex items-center gap-3">
                    <li>
                        <NavLink to="/" className={(isActive) => (isActive ? activeStyle : "")}>
                            <img src={Logo} className="w-20" alt="logo" />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/" className={(isActive) => (isActive ? activeStyle : "")}>
                            <HomeIcon />
                        </NavLink>
                    </li>
                    <li className={`text-white text-lg absolute right-0 ${!openNavbarMobile ? 'visible' : ''} md:hidden`}>
                        {openNavbarMobile ? (
                            <XMarkIcon
                                onClick={() => setOpenNavbarMobile(!openNavbarMobile)}
                                className="w-10"
                            />
                        ) : (
                            <Bars3Icon
                                onClick={() => setOpenNavbarMobile(!openNavbarMobile)}
                                className="w-10"
                            />
                        )}
                    </li>
                </ul>
                <ul className={`flex flex-col gap-3 ul-mobile ${openNavbarMobile ? 'navbar-open' : 'navbar-close'} md:text-white md:bg-nutri md:visible md:items-center md:flex-row`}>
                    {renderView()}
                    <li>
                        <NavLink to="/cart" className={(isActive) => (isActive ? activeStyle : "")}>
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
