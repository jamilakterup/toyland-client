import {Link} from "react-router-dom";

const MyToyDetails = ({toy, i, handleDelete}) => {
    const {_id, toyName, category, subcategory, price, availableQuantity, seller, img} = toy;

    return (
        <tr>
            <th>{i + 1}</th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{toyName}</div>
                        <div className="text-sm opacity-50">{category}</div>
                    </div>
                </div>
            </td>
            <td>{seller}</td>
            <td>{subcategory}</td>
            <td>$ {price}</td>
            <td>{availableQuantity}</td>
            <th>
                <Link className="btn btn-ghost btn-xs" to={`/update/${_id}`}>Update</Link>
                {/* <button  className="btn btn-ghost btn-xs">Update</button> */}
                <button onClick={() => handleDelete(_id)} className="btn btn-ghost btn-xs hover:bg-red-400 hover:text-white">delete</button>
            </th>
        </tr>
    );
};

export default MyToyDetails;