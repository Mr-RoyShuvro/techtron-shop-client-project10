import AboutProduct from "../About/AboutProduct";
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
            <AboutProduct></AboutProduct>
            <AboutUs></AboutUs>
            <Contact></Contact>
        </div>
    );
};

export default Home;