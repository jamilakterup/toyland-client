import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../Providers/AuthProvider";
import MyToyDetails from "./MyToyDetails";

const MyToys = () => {
    const {user} = useContext(AuthContext);
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/myToys/${user?.email}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [user])
    return (
        <>
            <h1 className="text-5xl text-center mt-12">My Toys</h1>
            <div className="container mx-auto my-12">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Toy Name</th>
                            <th>Seller</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>View Details button</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            toys.map((toy, i) => <MyToyDetails
                                key={toy._id}
                                i={i}
                                toy={toy}
                            />)
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default MyToys;