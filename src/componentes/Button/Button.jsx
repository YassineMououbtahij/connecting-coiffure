import React, { useState } from "react";

const Button = ({ children, variation }) => {
    const [classN, setClassN] = useState(
        "py-2 border-2 px-4 transition-all duration-300 rounded-none"
    );

    switch (variation) {
        case "contained":
            return (
                <button
                    className={`${classN} bg-primary text-white font-semibold tracking-wider hover:bg-black`}
                >
                    {children}
                </button>
            );
        default:
            return (
                <button className={`${classN} hover:bg-white hover:text-black`}>
                    {children}
                </button>
            );
    }
};

export default Button;
