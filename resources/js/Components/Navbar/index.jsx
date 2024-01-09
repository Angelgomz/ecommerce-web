import React, { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { NavLink } from "react-router-dom";
import {
    InboxIcon,
    DevicePhoneMobileIcon,
    HomeIcon,
    ShoppingBagIcon,
} from "@heroicons/react/24/solid";
import { MapPinIcon } from "@heroicons/react/24/outline";
import "./index.css";
const Navbar = () => {
    const context = useContext(ShoppingCartContext);
    let activeStyle = "underline underline-offset-4";
    return (
        <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
            <ul className>
                <li>
                    <DevicePhoneMobileIcon className="w-4" /> (+569)208-44695{" "}
                </li>
                <li>
                    <InboxIcon className="w-4" />
                    info@nutrilicious.cl
                </li>
                <li>
                    <MapPinIcon className="w-4" />
                    Chile - Santiago.
                </li>
            </ul>
            <ul className="flex items-center gap-3">
                <li className="font-semibold">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        {" "}
                        Nutrilicious
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? activeStyle : ""
                        }
                    >
                        <HomeIcon />
                    </NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-3">
                <li>
                    <NavLink
                        to="/email"
                        className={({ isActive }) =>
                            isActive ? activeStyle : ""
                        }
                    >
                        {" "}
                        angelgomz14@gmail.com{" "}
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/my-orders"
                        className={({ isActive }) =>
                            isActive ? activeStyle : ""
                        }
                    >
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/account"
                        className={({ isActive }) =>
                            isActive ? activeStyle : ""
                        }
                    >
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/login"
                        className={({ isActive }) =>
                            isActive ? activeStyle : ""
                        }
                    >
                        Login
                    </NavLink>
                </li>
                <li className="flex">
                    <NavLink
                        to="/cart"
                        className={({ isActive }) =>
                            isActive ? activeStyle : ""
                        }
                    >
                        <div>
                            {" "}
                            <ShoppingBagIcon className="w-4" />
                        </div>
                        <div> {context.count} </div>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
