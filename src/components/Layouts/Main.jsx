import {Outlet, ScrollRestoration} from "react-router-dom";
import NavBar from "../Pages/Shared/NavBar/NavBar";
import Footer from "../Pages/Shared/Footer/Footer";

const Main = () => {
    return (
        <>
            <NavBar />
            <Outlet />
            <Footer />
            <ScrollRestoration />
        </>
    );
};

export default Main;