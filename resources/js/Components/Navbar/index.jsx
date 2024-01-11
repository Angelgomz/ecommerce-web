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
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import Logo from "./../../../images/logo_nutri.png";
import "./index.css";
const Navbar = () => {
  const context = useContext(ShoppingCartContext);
  let activeStyle = "underline underline-offset-4";
  return (
    <>
      <div className="flex justify-between items-center fixed z-10 top-0 w-full py-0.5 px-1 text-sm font-light info-social-media">
        <div className="flex">
          <div className="m-2">
            <span className="flex">
              <DevicePhoneMobileIcon className="w-3 m-1" />
              (+569)208-44695
            </span>
          </div>
          <div className="m-2">
            <span className="flex">
              <InboxIcon className="w-3 m-1" />
              info@nutrilicious.cl
            </span>
          </div>
          <div className="m-2">
            <span className="flex">
              <MapPinIcon className="w-3 m-1" />
              Chile - Santiago.
            </span>
          </div>
        </div>
        <div className="flex">
          <FaFacebookF className="w-5 h-5 cursor-pointer" />
          <FaInstagram className="w-5 h-5 cursor-pointer" />
        </div>
      </div>
      <nav className="flex justify-between items-center fixed z-10 top-10 w-full py-3 px-4 text-sm font-light">
        <ul className="flex items-center gap-3">
          <li className="font-semibold">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <img src={Logo} className="w-20" alt="logo"></img>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? activeStyle : "")}
            >
              <HomeIcon />
            </NavLink>
          </li>
        </ul>
        <ul className="flex items-center gap-3">
          <li>
            <NavLink
              to="/email"
              className={({ isActive }) => (isActive ? activeStyle : "")}
            >
              angelgomz14@gmail.com
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-orders"
              className={({ isActive }) => (isActive ? activeStyle : "")}
            >
              My Orders
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/account"
              className={({ isActive }) => (isActive ? activeStyle : "")}
            >
              My Account
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/register"
              className={({ isActive }) => (isActive ? activeStyle : "")}
            >
              Register
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              to="/cart"
              className={({ isActive }) => (isActive ? activeStyle : "")}
            >
              <div className="flex">
                <ShoppingBagIcon className="w-4 m-1" />
                {context.count}
              </div>
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
