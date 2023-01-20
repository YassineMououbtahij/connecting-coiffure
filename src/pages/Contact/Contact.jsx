import { useState } from "react";
import Hero from "../../componentes/Hero/Hero";
import hero_img from "../../assets/images/home_1.jpg";
import Button from "../../componentes/Button/Button";

const Contact = () => {
    let [errors, setErrors] = useState({
        nom: null,
        email: null,
        sujet: null,
        message: null,
    });
    let [touched, setTouched] = useState({
        nom: false,
        email: false,
        sujet: false,
        message: false,
    });
    let [data, setData] = useState({
        nom: null,
        email: null,
        sujet: null,
        message: null,
    });

    function handleSubmition(event) {
        event.preventDefault();

        let errors_copy = { ...errors };
        let touched_copy = { ...touched };

        Object.entries(data).forEach(([key, value]) => {
            if (!value) {
                errors_copy[key] = "This field is required";
                touched_copy[key] = true;
            } else {
                errors_copy[key] = null;
            }
        });

        setTouched(touched_copy);
        setErrors(errors_copy);

        console.log(errors);
        console.log(touched);
    }

    function handleChange(event) {
        setTouched({ ...touched, [event.target.name]: true });
        setData({ ...data, [event.target.name]: event.target.value });
    }

    return (
        <div>
            <Hero img={hero_img} />
            <div className="px-8 lg:px-0 py-16 container mx-auto text-center flex flex-col gap-8">
                <h2 className=" font-ballantines text-5xl">
                    Contactez dès maintenant Connecting Coiffure, votre salon de
                    coiffure à Villeneuve-d'Ascq
                </h2>
                <p className="text-gray font-semibold">Connecting Coiffure</p>
                <p className="flex flex-col">
                    <span className="text-gray font-semibold">Adresse :</span>
                    <span>30 Place Salvador Allende</span>
                    <span>59650 Villeneuve-d’Ascq</span>
                </p>
                <p className="flex flex-col">
                    <span className="text-gray font-semibold">
                        Téléphone :{" "}
                        <span className="text-primary font-semibold">
                            07.67.40.58.49
                        </span>
                    </span>
                    <span className="text-gray font-semibold">
                        Email :{" "}
                        <span className="text-primary font-semibold">
                            connecting.coiffure@gmail.com
                        </span>
                    </span>
                </p>
                <form
                    onSubmit={handleSubmition}
                    className="flex flex-col max-w-xl mx-auto gap-8 text-start"
                >
                    <input
                        name="nom"
                        onChange={handleChange}
                        placeholder="Nom*"
                        className="border p-2 border-black"
                        type="text"
                    />
                    {touched.nom && errors.nom ? (
                        <p className="text-red">{errors.nom}</p>
                    ) : (
                        ""
                    )}
                    <input
                        name="email"
                        onChange={handleChange}
                        placeholder="Email*"
                        className="border p-2 border-black"
                        type="text"
                    />
                    {touched.email && errors.email ? (
                        <p className="text-red">{errors.email}</p>
                    ) : (
                        ""
                    )}
                    <input
                        name="sujet"
                        onChange={handleChange}
                        placeholder="Sujet*"
                        className="border p-2 border-black"
                        type="text"
                    />
                    {touched.sujet && errors.sujet ? (
                        <p className="text-red">{errors.sujet}</p>
                    ) : (
                        ""
                    )}
                    <textarea
                        name="message"
                        onChange={handleChange}
                        placeholder="Message*"
                        className="border p-2 border-black"
                    ></textarea>
                    {touched.message && errors.message ? (
                        <p className="text-red">{errors.message}</p>
                    ) : (
                        ""
                    )}
                    <p>
                        <input type="checkbox" /> En soumettant ce formulaire,
                        j’accepte que les informations saisies soient exploitées
                        dans le strict cadre de ma demande.
                    </p>
                    <div className="flex justify-start">
                        <Button variation={"contained"}>ENVOYER</Button>
                    </div>
                    <p>
                        <span>* Ces champs sont obligatoires</span>
                        Nous nous engageons à ce que la collecte et le
                        traitement de vos données effectuées à partir du présent
                        site internet soit conforme à la loi informatique et
                        libertés et au règlement général sur la protection des
                        données personnelles (RGPD). Afin d’exercer vos droits,
                        notamment d’accès, de correction ou de retrait de vos
                        données personnelles collectées via ce formulaire,
                        consultez notre Politique de confidentialité.
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Contact;
