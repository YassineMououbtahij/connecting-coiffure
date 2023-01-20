import { useState } from "react";
import SocialMedia from "../SocialMedia/SocialMedia";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import { GrClose } from "react-icons/gr";
import { HiMenuAlt3 } from "react-icons/hi";

const Nav = () => {
    const [isShown, setIsShown] = useState(false);

    return (
        <nav className="h-24 bg-black ">
            <div className="container mx-auto h-full flex justify-center items-center relative">
                <div
                    className={`fixed lg:static z-50 lg:z-0 top-0 w-full text-black lg:text-white bg-primary h-screen flex items-center justify-center lg:h-auto lg:bg-transparent  ${
                        isShown ? "" : "hidden lg:flex"
                    }`}
                >
                    <button
                        onClick={() => setIsShown(false)}
                        className=" fixed top-0 right-0 p-8 text-2xl lg:hidden"
                    >
                        <GrClose />
                    </button>
                    <ul className="flex flex-col lg:flex-row items-center gap-8">
                        <li className="transition-all duration-300 lg:text-white lg:hover:text-primary before:content-[''] before:absolute before:-bottom-1 before:left-0 relative before:h-1 before:w-0 before:bg-primary hover:before:w-full before:transition-all before:duration-300">
                            <Link to="/">ACCUEIL</Link>
                        </li>
                        <li className="transition-all duration-300 lg:text-white lg:hover:text-primary before:content-[''] before:absolute before:-bottom-1 before:left-0 relative before:h-1 before:w-0 before:bg-primary hover:before:w-full before:transition-all before:duration-300">
                            <Link to="/coiffure-femme">COUPE FEMME</Link>
                        </li>
                        <div className="w-60 hidden lg:block"></div>
                        <li className="transition-all duration-300 lg:text-white lg:hover:text-primary before:content-[''] before:absolute before:-bottom-1 before:left-0 relative before:h-1 before:w-0 before:bg-primary hover:before:w-full before:transition-all before:duration-300">
                            <Link to="/coiffure-homme">COUPE HOMME</Link>
                        </li>
                        <li className="transition-all duration-300 lg:text-white lg:hover:text-primary before:content-[''] before:absolute before:-bottom-1 before:left-0 relative before:h-1 before:w-0 before:bg-primary hover:before:w-full before:transition-all before:duration-300">
                            <Link to="/contact">CONTACT</Link>
                        </li>
                    </ul>
                </div>
                <div className="absolute px-8 lg:px-0 flex justify-between lg:justify-center w-full lg:w-fit">
                    <Logo />
                    <button
                        className="text-2xl lg:hidden"
                        onClick={() => setIsShown(true)}
                    >
                        <HiMenuAlt3 />
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
