import {Link} from "react-router-dom";


const AllToysTable = ({toy, i}) => {
    const {toyName, subcategory, price, availableQuantity, seller, _id} = toy;

    // const handleDetails = (toy) => {
    //     // const {toyName, price, availableQuantity, seller, img, email, ratings, _id} = toy;
    //     console.log(toy);
    // }


    return (
        <tr>
            <th>{i + 1}</th>
            <td>{toyName}</td>
            <td>{seller}</td>
            <td>{subcategory}</td>
            <td>$ {price}</td>
            <td>{availableQuantity}</td>
            <td>
                <Link className="btn btn-ghost btn-xs" to={`/modal/${_id}`}>Details</Link>
            </td>
        </tr>
    );
};

export default AllToysTable;