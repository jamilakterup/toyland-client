import {Outlet, ScrollRestoration} from "react-router-dom";
import NavBar from "../Pages/Shared/NavBar/NavBar";
import Footer from "../Pages/Shared/Footer/Footer";

const Main = () => {
    return (
        <>
            <NavBar />
            <div className="min-h-[calc(100vh-300px)]">
                <Outlet />
            </div>
            <Footer />
            <ScrollRestoration />
        </>
    );
};

export default Main;