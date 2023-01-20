import React from "react";
import { Link } from "react-router-dom";

const SocialMedia = ({ icon, url }) => {
    return (
        <a
            target={"_blank"}
            href={url}
            className="bg-primary text-lg p-2 text-black rounded-full hover:bg-black hover:text-primary transition-all duration-300"
        >
            {icon}
        </a>
    );
};

export default SocialMedia;
