import { NavLink } from "react-router-dom";
import { FaHouse, FaLocationPin} from "react-icons/fa6";
import { FaMobileAlt } from "react-icons/fa";
import { GrContact } from "react-icons/gr";
import "./index.css";
const Navbar = () => {
    let activeStyle = "underline underline-offset-4";
    return (
        <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
            <ul className>
                    <li><FaMobileAlt /> (+569)208-44695 </li>
                    <li><GrContact/>info@nutrilicious.cl</li>
                    <li><FaLocationPin/>Chile - Santiago.</li>
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
                        <FaHouse/>
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
                        to="/orders"
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
                <li>
                    <NavLink
                        to="/cart"
                        className={({ isActive }) =>
                            isActive ? activeStyle : ""
                        }
                    >
                        🛒
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
