import React from "react";
import logo from "../../../public/logo.png";
import { Link } from "react-router-dom";

const Logo = ({ className }) => {
    return (
        <Link to="/" className="">
            <img src={logo} className={`w-40 ${className}`} alt="" />
        </Link>
    );
};

export default Logo;
