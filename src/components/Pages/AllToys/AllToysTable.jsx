
const AllToysTable = ({toy, i}) => {
    const {toyName, subcategory, price, availableQuantity, seller} = toy;
    return (
        <tr>
            <th>{i + 1}</th>
            <td>{toyName}</td>
            <td>{seller}</td>
            <td>{subcategory}</td>
            <td>$ {price}</td>
            <td>{availableQuantity}</td>
            <th>
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    );
};

export default AllToysTable;