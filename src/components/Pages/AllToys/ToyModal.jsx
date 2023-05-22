import {Link, useLoaderData} from "react-router-dom";


const ToyModal = () => {
    const toy = useLoaderData();

    return (
        <>
            {
                toy.map(t => <div key={t._id} className="container mx-auto flex justify-center my-20">
                    <div className="card w-1/2 glass">
                        <figure><img src={t.img} alt="car!" /></figure>
                        <div className="card-body">
                            <h2 className="text-4xl font-bold text-center">{t.toyName}</h2>
                            <div className="flex items-center gap-40">
                                <p className="py-4 font-bold">Price: $ {t.price}</p>
                                <p> Available: {t.availableQuantity}</p>
                            </div>
                            <p>Seller: {t.seller}</p>
                            <div className="flex items-center gap-28 mb-5">
                                <p> Ratings: {t.ratings}</p>
                                <p> E-mail: {t.email}</p>
                            </div>
                            <p className="mb-5">{t.description}</p>
                            <div className="card-actions justify-end">
                                <Link className="btn btn-wide btn-outline" to='/all-toys'>Go back</Link>
                                <Link className="btn btn-wide bg-[#0B2F20]" to='/all-toys'>Confirm order</Link>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </>
    );
};

export default ToyModal;