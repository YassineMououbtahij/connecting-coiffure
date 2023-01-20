import Hero from "../../componentes/Hero/Hero";
import Table from "../../componentes/Table/Table";
import women_hero from "../../assets/images/women_hero.jpg";
import women1 from "../../assets/images/women1.jpg";

const Womens_barber = () => {
    return (
        <div>
            <Hero img={women_hero} />
            <div className="container mx-auto p-8 lg:px-0 text-center flex flex-col gap-4">
                <h2 className=" font-ballantines text-5xl">
                    Connecting Coiffure, votre salon de coiffure pour femmes à
                    Villeneuve-d'Ascq
                </h2>
                <p className="flex flex-col text-sm  text-gray">
                    <span>
                        Votre coiffeur à Villeneuve-d’Ascq vous propose une
                        large sélection de coupe, pour tous types de cheveux.
                    </span>
                    <span>
                        Il maîtrise également plusieurs méthodes de coloration
                        et vous garantit un résultat impeccable, tout en prenant
                        en considération vos envies, la nature de vos cheveux
                        ainsi que les tendances actuelles.
                    </span>
                </p>
            </div>
            <div className="py-16 px-8 lg:px-0 container mx-auto lg:grid gap-8 grid-cols-2">
                <div className="relative min-h-[300px]">
                    <img
                        src={women1}
                        className="absolute top-0 w-full h-full object-cover"
                        alt=""
                    />
                </div>
                <div className="flex flex-col gap-8 py-8">
                    <h2 className=" font-ballantines text-5xl">
                        Coupes de cheveux pour femmes près de Lezennes à des
                        prix abordables réalise un diagnostic
                    </h2>
                    <p className="flex flex-col gap-6 text-gray text-sm">
                        <span>
                            Dans le but de vous faciliter les choses et de
                            styliser vos cheveux de manière tendance, votre
                            salon de coiffure vous propose un forfait coiffeur à
                            Villeneuve d’Ascq. Votre salon est apte à réaliser
                            plusieurs coupes dédiées aux femmes telles que le
                            carré plongeant, le dégradé, la coupe à la garçonne,
                            etc.
                        </span>
                        <span>
                            En effet, il vous propose une prestation shampoing
                            coupe brushing à un prix abordable, pour des cheveux
                            splendides.
                        </span>
                        <span>
                            De plus, si vous cherchez une coiffure qui convient
                            à la forme de votre visage, à la nature de vos
                            cheveux, tout en vous apportant nouveauté et
                            changement, Connecting Coiffure, salon non loin de
                            Triolo, réalise un diagnostic sur place,
                            gratuitement, avant votre prestation de coupe.
                        </span>
                        <span>
                            Grâce à son expertise, que ce soit pour une coupe de
                            cheveux mi-longs ou une coupe courte pour femmes,
                            Connecting Coiffure vous guide dans votre choix et
                            vous propose des solutions adaptées à vos attentes
                            et à vos envies.
                        </span>
                        <span>
                            Pour une allure aussi féminine que trendy, optez
                            pour les prestations de votre salon de coiffure
                            (création d’effet de volume, d’effet de longueur,
                            lissage brésilien…) et bénéficiez des forfaits
                            abordables de Connecting Coiffure.
                        </span>
                    </p>
                </div>
            </div>
            <div className="py-16 px-8 lg:px-0 container mx-auto flex flex-col gap-8">
                <h2 className=" font-ballantines text-center text-4xl lg:text-5xl">
                    Prestations supplémentaires
                </h2>
                <div className=" overflow-x-scroll lg:overflow-x-auto">
                    <Table
                        headings={[
                            "PRESTATIONS",
                            "CHEVEUX COURT",
                            "CHEVEUX MI-LONG",
                            "CHEVEUX LONG",
                        ]}
                        data={[
                            {
                                PRESTATIONS: "PATINE/PASTEL",
                                "CHEVEUX COURT": "17€",
                                "CHEVEUX MI-LONG": "25€",
                                "CHEVEUX LONG": "30€",
                            },
                            {
                                PRESTATIONS: "PATINE/PASTEL",
                                "CHEVEUX COURT": "17€",
                                "CHEVEUX MI-LONG": "25€",
                                "CHEVEUX LONG": "30€",
                            },
                            {
                                PRESTATIONS: "SOINS",
                                "CHEVEUX COURT": "6€",
                                "CHEVEUX MI-LONG": "6€",
                                "CHEVEUX LONG": "6€",
                            },
                            {
                                PRESTATIONS: "SHAMPOING AMERICAIN",
                                "CHEVEUX COURT": "25€",
                                "CHEVEUX MI-LONG": "25€",
                                "CHEVEUX LONG": "25€",
                            },
                            {
                                PRESTATIONS: "CHIGNON & EXTENSION",
                                "CHEVEUX COURT": "SUR DEVIS",
                            },
                        ]}
                    />
                </div>
            </div>
            <div className="py-16 container mx-auto  flex flex-col gap-8 px-8 lg:px-0">
                <h2 className=" font-ballantines text-center text-5xl">
                    Prestations supplémentaires
                </h2>
                <div className=" overflow-x-scroll lg:overflow-x-auto">
                    <Table
                        headings={[
                            "Prestations",
                            "Cheveux court",
                            "Cheveux mi-long",
                            "Cheveux long",
                        ]}
                        data={[
                            {
                                Prestations: "SHAMPOING + BRUSHING\n",
                                "Cheveux court": "20€",
                                "Cheveux mi-long": "25€",
                                "Cheveux long": "30€",
                            },
                            {
                                Prestations: "SHAMPOING + COUPE + BRUSHING\n",
                                "Cheveux court": "30€",
                                "Cheveux mi-long": "35€",
                                "Cheveux long": "45€",
                            },
                            {
                                Prestations:
                                    "SHAMPOING + COUPE + COLORATION + BRUSHING\n",
                                "Cheveux court": "60€",
                                "Cheveux mi-long": "75€",
                                "Cheveux long": "85€",
                            },
                            {
                                Prestations:
                                    "SHAMPOING + COUPE + COLORATION SANS AMMONIAQUE + BRUSHING\n",
                                "Cheveux court": "65€",
                                "Cheveux mi-long": "70€",
                                "Cheveux long": "80€",
                            },
                            {
                                Prestations:
                                    "SHAMPOING + COUPE + MÈCHES + BRUSHING\n",
                                "Cheveux court": "65€",
                                "Cheveux mi-long": "80€",
                                "Cheveux long": "100€",
                            },
                            {
                                Prestations:
                                    "SHAMPOING + COUPE + BALAYAGE + BRUSHING",
                                "Cheveux court": "70€",
                                "Cheveux mi-long": "90€",
                                "Cheveux long": "110€",
                            },
                            {
                                Prestations:
                                    "SHAMPOING + COUPE + BALAYAGE CALIFORNIEN + BRUSHING",
                                "Cheveux court": "75€",
                                "Cheveux mi-long": "90€",
                                "Cheveux long": "120€",
                            },
                            {
                                Prestations:
                                    "SHAMPOING + COUPE + OMBRÉ HAIR + BRUSHING",
                                "Cheveux court": "85€",
                                "Cheveux mi-long": "100€",
                                "Cheveux long": "130€",
                            },
                            {
                                Prestations: "SHAMPOING + COUPE + PERMANENTE\n",
                                "Cheveux court": "80€",
                                "Cheveux mi-long": "100€",
                                "Cheveux long": "120€",
                            },
                            {
                                Prestations: "SOIN BOTOX",
                                "Cheveux court": "60€",
                                "Cheveux mi-long": "80€",
                                "Cheveux long": "100€",
                            },
                            {
                                Prestations: "DECOLORATION TOTALE",
                                "Cheveux court": "85€",
                                "Cheveux mi-long": "110€",
                                "Cheveux long": "130€",
                            },
                            {
                                Prestations: "LISSAGE BRESILIEN ",
                                "Cheveux court": "120€",
                                "Cheveux mi-long": "130€",
                                "Cheveux long": "150€",
                            },
                            {
                                Prestations: "LISSAGE SANS FORMOL",
                                "Cheveux court": "130€",
                                "Cheveux mi-long": "160€",
                                "Cheveux long": "180€",
                            },
                            {
                                Prestations: "LISSAGE FRANCAIS MYRIAM K ",
                                "Cheveux court": "160€",
                                "Cheveux mi-long": "200€",
                                "Cheveux long": "250€",
                            },
                        ]}
                    />
                </div>
            </div>
            <div className="text-center bg-primary text-white py-12">
                Pour de plus amples informations sur les prestations de coupe
                pour femmes, vous pouvez contacter Connecting Coiffure au
                07.67.40.58.49.
            </div>
        </div>
    );
};

export default Womens_barber;
