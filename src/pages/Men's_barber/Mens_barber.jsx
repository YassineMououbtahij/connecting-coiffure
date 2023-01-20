import Hero from "../../componentes/Hero/Hero";
import mens_hero from "../../assets/images/mens_hero.jpg";
import Table from "../../componentes/Table/Table";
import menHero from "../../assets/images/menHero.jpg";

const Mens_barber = () => {
    return (
        <div>
            <Hero img={menHero} />
            <div className="container mx-auto p-8 lg:px-0 text-center flex flex-col gap-4">
                <h2 className=" font-ballantines text-5xl">
                    Connecting Coiffure, votre salon de coiffure pour hommes à
                    Villeneuve-d'Ascq
                </h2>
                <p className="flex flex-col text-sm  text-gray">
                    <span>
                        Vous avez envie d’une coupe de cheveux qui reflète votre
                        style et votre personnalité ? Sollicitez l’expertise de
                        votre coiffeur à Villeneuve-d’Ascq. Il est en mesure
                        d’assurer des prestations à la hauteur de vos attentes.
                    </span>
                    <span>
                        Votre spécialiste est aussi apte à vous orienter dans
                        vos choix selon votre type et couleur de cheveux, votre
                        teint ainsi que votre physionomie.
                    </span>
                </p>
            </div>
            <div className="py-16 px-8 lg:px-0 container mx-auto lg:grid gap-8 grid-cols-2">
                <div className="relative min-h-[300px]">
                    <img
                        src={mens_hero}
                        className="absolute top-0 w-full h-full object-cover"
                        alt=""
                    />
                </div>
                <div className="flex flex-col gap-8 py-8">
                    <h2 className=" font-ballantines text-5xl">
                        Coupe pour hommes
                    </h2>
                    <p className="flex flex-col gap-6 text-gray text-sm">
                        <span>
                            Toujours à votre disposition et à l’écoute, votre
                            coiffeur réalise toutes sortes de coiffures pour
                            hommes
                        </span>
                        <span>
                            De la plus classique à la plus tendance, Connecting
                            Coiffure est en mesure de réaliser les meilleures
                            coupes de cheveux pour hommes à proximité de
                            Lezennes, Villeneuve d’Ascq, Auchan V2 et aux
                            alentours. Il est également en mesure de vous aider
                            à trouver la coupe de cheveux qui s’adapte le mieux
                            à la forme de votre visage.
                        </span>
                        <span>
                            De plus, votre coiffeur vous propose une prestation
                            shampoing-coupe-brushing à des prix abordables.
                        </span>
                        <span>
                            Vous avez envie d’une nouvelle coupe pour hommes,
                            courte ou dégradée progressivement à Villeneuve
                            d’Ascq et aux alentours ?
                        </span>
                        <span>
                            Votre salon de coiffure vous propose différentes
                            coupes de cheveux simples ou tendances pour un
                            résultat moderne, conforme à vos attentes en maniant
                            avec précision et dextérité les ciseaux comme la
                            tondeuse électrique.
                        </span>
                        <span>
                            Soucieux de vous offrir un service de qualité, votre
                            salon de coiffure s’occupe de vos cheveux et vous
                            offre un moment de bien-être. Toujours à l’affût des
                            dernières tendances, il prend en charge tant les
                            coupes courtes que les coupes de cheveux longs pour
                            hommes, tout en assurant des tarifs de coiffure
                            abordables.
                        </span>
                    </p>
                </div>
            </div>
            <div className="py-16 px-8 lg:px-0 container mx-auto flex flex-col gap-8">
                <h2 className=" font-ballantines text-center text-4xl lg:text-5xl">
                    Tarifs homme
                </h2>
                <div className="overflow-x-scroll lg:overflow-x-auto">
                    <Table
                        headings={["SHAMPOING + COUPE + COIFFAGE", "Prix"]}
                        data={[
                            {
                                "SHAMPOING + COUPE + COIFFAGE": "Homme",
                                "": "25€",
                            },
                            {
                                "SHAMPOING + COUPE + COIFFAGE":
                                    "Lissage brésilien",
                                "": "80€",
                            },
                            {
                                "SHAMPOING + COUPE + COIFFAGE": "Coloration",
                                "": "55€",
                            },
                        ]}
                    />
                </div>
            </div>
            <div className="text-center bg-primary text-white py-12">
                Pour de plus amples informations concernant les coupes de
                cheveux pour hommes, vous pouvez contacter Connecting Coiffure
                au 07.67.40.58.49.
            </div>
        </div>
    );
};

export default Mens_barber;
