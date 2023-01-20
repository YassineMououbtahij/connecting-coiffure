import React from "react";

const CovideInformation = () => {
    return (
        <div className="container mx-auto px-8 my-16 lg:px-0 ">
            <div className="bg-gray text-white text-center p-4 flex flex-col gap-4 border-2  border-primary">
                <h2 className="text-primary font-ballantines text-4xl">
                    Information Covid-19
                </h2>
                <marquee>
                    <p className="flex flex-col">
                        <span>
                            La réservation sur notre site internet vous permet
                            de profiter des meilleurs tarifs et de la
                            possibilité d’annulation sans frais.
                        </span>
                        <span>
                            Notre équipe reste mobiliser pour vous offrir une
                            protection adaptée aux fluctuations de la pandémie.
                        </span>
                    </p>
                </marquee>
            </div>
        </div>
    );
};

export default CovideInformation;
