import AboutProduct from "../About/AboutProduct";
import AboutClients from "./AboutClients";
import AboutUs from "./AboutUs";
import Banner from "./Banner";
import BrandCart from "./BrandCart";
import Contact from "./Contact";
import Sale from "./Sale";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BrandCart></BrandCart>
            <Sale></Sale>
            <AboutUs></AboutUs>
            <AboutProduct></AboutProduct>
            <AboutClients></AboutClients>
            <Contact></Contact>
        </div>
    );
};

export default Home;