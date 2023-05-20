import {useEffect, useState} from "react";
import AllToysTable from "./AllToysTable";

const AllToys = () => {
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then(res => res.json())
            .then(data => {
                setToys(data);
            })
    }, [])


    return (
        <>
            <h1 className="text-5xl text-center mt-12">All Toys</h1>
            <div className="overflow-x-auto w-full container mx-auto my-12">
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
                            toys.map((toy, i) => <AllToysTable
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

export default AllToys;