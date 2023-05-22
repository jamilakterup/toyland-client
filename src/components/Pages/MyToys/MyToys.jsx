import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../Providers/AuthProvider";
import MyToyDetails from "./MyToyDetails";
import Swal from "sweetalert2";

const MyToys = () => {
    const {user} = useContext(AuthContext);
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/myToys/${user?.email}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [user])

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/toys/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'content-type': 'application/json'
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                        if (data.deletedCount > 0) {
                            const remaining = toys.filter(toy => toy._id !== id);
                            setToys(remaining);
                        }
                    })
            }
        })
    }

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
                                handleDelete={handleDelete}
                            />)
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default MyToys;