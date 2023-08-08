import useTitle from "../../../../Hooks/useTitle";
import Banner from "../Banner/Banner";
import Extra from "../Extra/Extra";
import Gallery from "../Extra/Gallery";
import Modals from "../Modals/Modals";
import Products from "../Products/Products";

const Home = () => {
    useTitle('Toyland-Home')
    return (
        <div>
            <Banner />
            <Gallery />
            <Products />
            <Extra />
            <Modals />
        </div>
    );
};

export default Home;