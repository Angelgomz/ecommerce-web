import React from "react";
import Logo from "./../../../images/logo_nutri.png";
import Flower from "./../../../images/flornutri.png";
import { FaWhatsapp } from "react-icons/fa";
const Footer = () => {
    return (
        <div className="flex flex-col justify-between items-center footer bg-nutri text-white p-[4%] md:p-[2%] md:mt-[2%]%">
            <div className="mt-1">
                <p className="text-md">nutrilicious © 2024</p>
                <div className="flex items-center mt-1 p-2 gap-2 info-social-media rounded-md">
                    <FaWhatsapp className=""></FaWhatsapp>
                    <p>SOPORTE</p>
                </div>
            </div>
            <div className="footer-links flex gap-1 mt-1">
                <a href="#">Términos y condiciones</a>|
                <a href="#">Políticas de privacidad</a>
            </div>
            <div className="footer-right flex flex-col justify-center items-center p-1 mt-1">
                <img className="w-16" src={Flower} />
                <img className="w-14" src={Logo} />
            </div>
        </div>
    );
};
export { Footer };
