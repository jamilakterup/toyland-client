import {Outlet} from "react-router-dom";
import NavBar from "../Pages/Shared/NavBar/NavBar";

const Sub = () => {
    return (
        <>
            <NavBar />
            <Outlet />
        </>
    );
};

export default Sub;