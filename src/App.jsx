import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Womens_barber from "./pages/Woman's_barber/Womens_barber";
import Mens_barber from "./pages/Men's_barber/Mens_barber";
import Contact from "./pages/Contact/Contact";
import Map from "./componentes/Map/Map";
import Footer from "./componentes/Footer/Footer";

const App = () => {
    return (
        <div className="font-raleway ">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/coiffure-femme" element={<Womens_barber />} />
                <Route path="/coiffure-homme" element={<Mens_barber />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Map />
            <Footer />
        </div>
    );
};

export default App;
