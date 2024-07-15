import About from "../About/About";
import Banner from "./Banner";
import BrandCart from "./BrandCart";
import Contact from "./Contact";
import Sale from "./Sale";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <BrandCart></BrandCart>
            <Sale></Sale>
            <Contact></Contact>
        </div>
    );
};

export default Home;