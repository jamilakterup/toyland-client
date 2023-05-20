import {useContext} from "react";
import {AuthContext} from "../Providers/AuthProvider";
import {Navigate, useLocation} from "react-router-dom";
import {Dna} from "react-loader-spinner";


const PrivetRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <Dna
            visible={true}
            height="100"
            width="100"
            ariaLabel="dna-loading"
            wrapperStyle={{margin: 'auto'}}
            wrapperClass="dna-wrapper"
        />
    }

    if (user) {
        return children;
    }

    return <Navigate to='/login' state={{from: location}} replace />;
};

export default PrivetRoute;