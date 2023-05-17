import {Outlet, ScrollRestoration} from "react-router-dom";
import NavBar from "../Pages/Shared/NavBar/NavBar";
import Footer from "../Pages/Shared/Footer/Footer";

const Main = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
            <Footer />
            <ScrollRestoration />
        </div>
    );
};

export default Main;