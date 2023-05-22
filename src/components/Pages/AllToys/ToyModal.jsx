

const ToyModal = ({toy}) => {
    console.log(toy);
    const {toyName, price, availableQuantity, seller, img, email, ratings} = toy;
    return (
        <>
            <label htmlFor="my-modal" className="btn">open</label>
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-center">{toyName}</h3>
                    <img className="w-1/2 mx-auto" src={img} alt="" />
                    <div className="flex items-center gap-40">
                        <p className="py-4 font-bold">Price: $ {price}</p>
                        <p> Available: {availableQuantity}</p>
                    </div>
                    <p className="py-4">Seller: {seller}</p>
                    <div className="flex items-center gap-28">
                        <p> Ratings: {ratings}</p>
                        <p> Email: {email}</p>
                    </div>
                    <div className="modal-action">
                        <label htmlFor="my-modal" className="btn">{'_id'}</label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ToyModal;