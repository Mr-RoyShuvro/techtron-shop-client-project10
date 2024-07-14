import About from "../About/About";
import Banner from "./Banner";
import BrandCart from "./BrandCart";
import Sale from "./Sale";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <BrandCart></BrandCart>
            <Sale></Sale>
        </div>
    );
};

export default Home;