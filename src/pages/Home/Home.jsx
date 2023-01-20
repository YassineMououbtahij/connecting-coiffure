import Hero from "../../componentes/Hero/Hero";
import home_1 from "../../assets/images/home_1.jpg";
import home_2 from "../../assets/images/home_2.jpg";
import home_3 from "../../assets/images/home_3.png";
import Button from "../../componentes/Button/Button";
import { HiOutlineChevronRight } from "react-icons/hi";
import home_hero from "../../assets/images/home_hero.jpg";
import sponsor_1 from "../../assets/images/sponsor1.png";
import sponsor_2 from "../../assets/images/sponsor2.jpg";
import sponsor_3 from "../../assets/images/sponsor3.jpg";
import barber_1 from "../../assets/images/barber1.jpg";
import barber_2 from "../../assets/images/barber2.jpg";
import barber_3 from "../../assets/images/barber3.jpg";
import { API_TOKEN } from "../../Config/Confix";
import { useEffect, useState } from "react";
import axios from "axios";
import { ImSpinner9 } from "react-icons/im";
import { MdClose } from "react-icons/md";

const Home = () => {
    const [currentImage, setCurrentImage] = useState(null);
    const [loading, setLoading] = useState(true);
    const [galerie, setGalerie] = useState([]);

    useEffect(() => {
        async function getImages() {
            let response = await axios({
                method: "get",
                url: `https://api.unsplash.com/photos/random?query=barber&count=5&client_id=${API_TOKEN}`,
            });

            console.log(response);

            if (response.status == 200) {
                setGalerie(response.data);
                setLoading(false);
            }
        }
        getImages();
    }, []);

    function handleClick(event) {
        setCurrentImage(event.target.src);
    }

    return (
        <div>
            <Hero img={home_hero} />
            <div className="container mx-auto px-8 lg:p-0 lg:grid grid-cols-4 gap-4 my-8">
                <div className="flex flex-col gap-6 col-start-1 col-end-3 py-16">
                    <h2 className=" font-ballantines text-6xl">
                        Connecting Coiffure, votre coiffeur à Villeneuve-d'Ascq
                    </h2>
                    <p className="flex flex-col gap-4 ">
                        <span>
                            Votre salon de coiffure mixte Connecting Coiffure
                            est situé à Villeneuve-d’Ascq. Votre coiffeuse met
                            tout son savoir-faire à votre service pour vous
                            offrir un style à la hauteur de vos attentes et
                            réalise toutes les coiffures, les coupes de cheveux
                            et les colorations souhaitées.
                        </span>
                        <span>
                            Votre professionnel est également en mesure de vous
                            conseiller et d’orienter vos choix en fonction de la
                            forme de votre visage (front, joues, mâchoire,
                            etc.).
                        </span>
                        <span>
                            Le salon de coiffure situé place Salvador Allende
                            vous propose plusieurs prestations de coiffure et
                            veille à répondre à toutes vos envies.
                        </span>
                        <span>
                            Que vos cheveux soient lisses, frisés ou bouclés,
                            vous pouvez aller chez votre coiffeur sans
                            rendez-vous à Villeneuve d’Ascq afin de bénéficier
                            d’un service de qualité.
                        </span>
                    </p>
                </div>
                <div className="col-start-3 col-end-5 relative min-h-[300px] lg:h-auto">
                    <img
                        src={home_1}
                        className="h-full absolute top-0 left-0 w-full object-cover border-4 border-primary"
                        alt=""
                    />
                </div>
            </div>
            <div className="container px-8 lg:px-0 mx-auto my-8">
                <h2 className=" font-ballantines text-5xl text-center">
                    Sponsors
                </h2>
                <div className="grid lg:grid-cols-3">
                    <div className="flex justify-center lg:justify-end">
                        <img src={sponsor_1} alt="" />
                    </div>
                    <div className="flex justify-center">
                        <img src={sponsor_2} alt="" />
                    </div>
                    <div className="flex justify-center lg:justify-start">
                        <img src={sponsor_3} alt="" />
                    </div>
                </div>
            </div>
            <div className="h-96 bg-fixed bg-hero-1 bg-center mb-8"></div>
            <div className="mx-auto container flex flex-col px-8 lg:px-0 gap-8 mb-8">
                <div className="flex justify-center">
                    <h2 className="text-6xl font-ballantines">
                        Connecting Coiffure
                    </h2>
                </div>
                <div className="lg:grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-4 col-start-1 col-end-2">
                        <span>
                            Votre coiffeuse mixte non loin de Lezennes est
                            également apte à prendre en charge votre coiffure
                            lors de votre mariage, d’une soirée, etc. En effet,
                            elle maîtrise parfaitement les chignons, les queues
                            de cheval et autres arrangements capillaires pour
                            les occasions spéciales.
                        </span>
                        <span>
                            Votre coiffeur pour hommes à Villeneuve d’Ascq
                            propose tous types de coupes, allant des coupes
                            classiques aux ciseaux aux coupes et dégradés
                            modernes réalisés à la tondeuse électrique. Il vous
                            propose d’autres prestations comme des colorations,
                            des mèches, du balayage (et balayage californien),
                            du lissage brésilien, des brushings pour les cheveux
                            longs, etc.
                        </span>
                        <span>
                            Pour répondre à tous vos besoins, Connecting
                            Coiffure près de V2 propose aussi des coupes pour
                            vos enfants. Les enfants ont eux aussi des envies
                            variées de coiffure et de coupe, c’est pour cette
                            raison que votre prestataire met un point d’honneur
                            à les écouter et à les chouchouter, mettant tout en
                            œuvre pour les satisfaire autant que vous, les
                            parents. Votre expert coupe les cheveux des enfants
                            avec beaucoup de soin et de patience.
                        </span>
                        <span>
                            Alors, que vous cherchiez un coiffeur pour femmes,
                            pour hommes ou encore un expert en coupes de cheveux
                            pour enfants, n’hésitez pas à solliciter les
                            services de votre salon de coiffure mixte près de
                            Triolo.
                        </span>
                    </div>
                    <div className="col-start-2 col-end-3 relative lg:h-auto min-h-[300px]">
                        <img
                            src={home_1}
                            className="h-full absolute top-0 left-0 w-full object-cover border-4 border-primary"
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <div className="h-96 bg-black relative text-white mb-16">
                <img
                    src={home_2}
                    className="h-full w-full object-cover "
                    alt=""
                />
                <div className="bg-midtransparent w-full h-full absolute top-0 left-0 flex flex-col justify-center items-center text-center">
                    <h2 className=" font-ballantines text-6xl lg:text-8xl my-4">
                        Nos points forts
                    </h2>
                    <div className="flex flex-col gap-2 lg:text-xl">
                        <div>Équipe professionnelle</div>
                        <div>Savoir-faire</div>
                        <div>Coupes de cheveux et colorations</div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto lg:grid grid-cols-2 gap-16 mb-16 px-8 lg:px-0">
                <div className="relative min-h-[300px]">
                    <img
                        src={home_1}
                        className="absolute h-full w-full object-cover min-h-[300px]"
                        alt=""
                    />
                </div>
                <div className="py-8 px-4">
                    <h3 className="font-ballantines text-6xl">Coupe femme</h3>
                    <p className="my-8 ">
                        Alliant technicité et créativité, votre salon Connecting
                        Coiffure reste à votre disposition pour une coupe de
                        cheveux pour femmes, en veillant à ce que celle-ci soit
                        harmonieuse avec vos traits et avec la nature de vos
                        cheveux.
                    </p>
                    <Button variation="contained">
                        <div className="flex items-center">
                            EN SAVOIR PLUS <HiOutlineChevronRight />
                        </div>
                    </Button>
                </div>
                <div className="py-8">
                    <h3 className="font-ballantines text-6xl">Coloration</h3>
                    <p className="my-8 ">
                        Connecting Coiffure est à même d’effectuer des
                        colorations de cheveux, des mèches, des ombrés ainsi que
                        des balayages avec une couleur adaptée à votre teint et
                        à vos envies.
                    </p>
                    <Button variation="contained">
                        <div className="flex items-center">
                            EN SAVOIR PLUS <HiOutlineChevronRight />
                        </div>
                    </Button>
                </div>
                <div className="relative min-h-[300px]">
                    <img
                        src={home_3}
                        className="absolute h-full w-full object-cover min-h-[300px]"
                        alt=""
                    />
                </div>
                <div className="relative min-h-[300px]">
                    <img
                        src={home_1}
                        className="absolute h-full w-full object-cover min-h-[300px]"
                        alt=""
                    />
                </div>
                <div className="py-8">
                    <h3 className="font-ballantines text-6xl">Coupe homme</h3>
                    <p className="my-8 ">
                        Votre coiffeur réalise des coupes de cheveux soignées
                        pour les hommes de tous les âges. Les coupes peuvent
                        être aussi bien classiques que tendances, votre équipe
                        sachant manier les ciseaux comme la tondeuse électrique
                        avec dextérité.
                    </p>
                    <Button variation="contained">
                        <div className="flex items-center">
                            EN SAVOIR PLUS <HiOutlineChevronRight />
                        </div>
                    </Button>
                </div>
                <div className="py-8">
                    <h3 className="font-ballantines text-6xl">Coupe enfant</h3>
                    <p className="my-8 ">
                        Technicité et créativité se conjuguent à merveille dans
                        le salon Connecting Coiffure lorsque votre expert
                        exécute une coupe de cheveux pour enfants qui s’ajuste à
                        la perfection à leur physionomie.
                    </p>
                    <Button variation="contained">
                        <div className="flex items-center">
                            EN SAVOIR PLUS <HiOutlineChevronRight />
                        </div>
                    </Button>
                </div>
                <div className="relative min-h-[300px]">
                    <img
                        src={home_2}
                        className="absolute h-full w-full object-cover min-h-[300px]"
                        alt=""
                    />
                </div>
            </div>
            <div className=" bg-black text-white py-16 px-8 lg:px-0">
                <div className="container mx-auto flex flex-col justify-center h-full">
                    <div className="flex items-center justify-center mb-8">
                        <div className="hidden lg:block h-1 w-full bg-white"></div>
                        <h2 className="whitespace-nowrap px-8 lg:px-0 font-ballantines text-5xl lg:text-6xl">
                            Galerie de photos
                        </h2>
                        <div className="hidden lg:block h-1 w-full bg-white"></div>
                    </div>
                    {loading ? (
                        <div className="flex justify-center">
                            <ImSpinner9 className=" animate-spin" />
                        </div>
                    ) : (
                        <div className="lg:grid grid-cols-5 gap-2">
                            {galerie.map((image) => (
                                <div>
                                    <img
                                        onClick={handleClick}
                                        src={image.urls.regular}
                                        className="h-64 w-full border-2 border-primary cursor-pointer"
                                        alt=""
                                    />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <div className="container mx-auto text-center my-8 px-8 lg:px-0">
                <h2 className="text-center mb-4 font-ballantines text-6xl ">
                    The barbers
                </h2>
                <div className="grid  lg:grid-cols-3 gap-4">
                    <div className=" border-4">
                        <img
                            className="h-full object-cover"
                            src={barber_1}
                            alt=""
                        />
                    </div>
                    <div className=" border-4">
                        <img
                            className="h-full object-cover"
                            src={barber_2}
                            alt=""
                        />
                    </div>
                    <div className=" border-4">
                        <img
                            className="h-full object-cover"
                            src={barber_3}
                            alt=""
                        />
                    </div>
                </div>
            </div>
            {currentImage && (
                <div className="bg-midtransparent text-white fixed top-0 py-32 px-8 left-0 w-full h-screen flex justify-center items-center">
                    <img
                        src={currentImage}
                        className="w-full h-full max-w-6xl object-fit"
                        alt=""
                    />
                    <button
                        className="fixed top-0 right-0  p-8 text-3xl"
                        onClick={() => setCurrentImage(null)}
                    >
                        <MdClose />
                    </button>
                </div>
            )}
        </div>
    );
};

export default Home;
