
const ProductCard = ({product}) => {
    const {img, toyName, price, ratings} = product || {};
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img className="h-52" src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{toyName}</h2>
                <div className="flex">
                    <p>Price: {price}</p>
                    <p>Ratings: {ratings}</p>
                </div>
                <div className="card-actions justify-end">
                    <button className="btn bg-[#0B2F20]">View details</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;