import {useEffect, useState} from "react";
import AllToysTable from "./AllToysTable";
import useTitle from "../../../Hooks/useTitle";

const AllToys = () => {
    const [toys, setToys] = useState([]);
    const [searchText, setSearchText] = useState('');
    useTitle('Toyland-All Toys');

    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then(res => res.json())
            .then(data => {
                setToys(data);
            })
    }, [])

    const handleSearch = () => {
        fetch(`http://localhost:5000/toySearch/${searchText}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }



    return (
        <>
            <h1 className="text-5xl text-center mt-12">All Toys</h1>
            <div className="flex justify-center mt-12">
                <div className="form-control">
                    <div className="input-group">
                        <input onChange={(e) => setSearchText(e.target.value)} type="text" placeholder="Search toy name…" className="input input-bordered" />
                        <button onClick={handleSearch} className="btn btn-square">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>
            </div>

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