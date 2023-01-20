import { HiPhone, HiLocationMarker, HiMail } from "react-icons/hi";
import Logo from "../../componentes/Logo/Logo";
import Button from "../Button/Button";

const Footer = () => {
    return (
        <div className="bg-black text-white">
            <div className="container mx-auto py-24 px-8 lg:px-0 gap-24 lg:grid grid-cols-2">
                <div>
                    <Logo className={"w-80"} />
                    <div>
                        <div className="flex items-center gap-4">
                            <HiMail className="text-lg text-primary" />
                            contact@example.fr
                        </div>
                        <div className="flex items-center gap-4">
                            <HiPhone className="text-lg text-primary" />{" "}
                            07.67.40.xx.xx
                        </div>
                        <div className="flex items-center gap-4">
                            <HiLocationMarker className="text-lg text-primary" />
                            30 Place xx location, 59xx0 Villen
                        </div>
                    </div>
                </div>
                <div>
                    <form>
                        <h2 className="text-5xl font-ballantines text-white mb-8">
                            NewsLetter
                        </h2>
                        <div className="flex flex-col gap-4">
                            <input
                                placeholder="Email Address..."
                                type="text"
                                className="bg-gray  p-2 w-full border-2 outline-none border-primary"
                            />
                            <div>
                                <Button>Send</Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Footer;
