import ToyModal from "./ToyModal";


const AllToysTable = ({toy, i}) => {
    const {toyName, subcategory, price, availableQuantity, seller} = toy;

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
                <ToyModal toy={toy} />
            </td>
        </tr>
    );
};

export default AllToysTable;