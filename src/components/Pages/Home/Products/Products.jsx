import {useEffect, useState} from "react";
import ProductCard from "../ProductCard/ProductCard";
// import {useForm} from "react-hook-form";


const Products = () => {
    const [products, setProducts] = useState([]);
    const [activeTab, setActiveTab] = useState('cargo');
    const [activeButton, setActiveButton] = useState(1);


    useEffect(() => {
        fetch(`https://toyland-server-red.vercel.app/toys/${activeTab}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [activeTab])

    const handleButtonClick = (buttonId) => {
        setActiveButton(buttonId);
    };


    return (
        <section className="my-24 container mx-auto">
            <div>
                <h1 className="text-center font-bold text-5xl my-12 text-[#0B2F20]">Shop by category</h1>
            </div>

            <div className="flex justify-center mb-12">
                <div>
                    <button className={`py-1 px-4 font-semibold ${activeButton === 1 ? 'bg-[#0B2F20] text-white' : 'bg-[#DCE2CB]'}`}
                        onClick={() => handleButtonClick(1, setActiveTab('cargo'))}
                    >
                        Cargo
                    </button>
                    <button className={`py-1 px-4 font-semibold ${activeButton === 2 ? 'bg-[#0B2F20] text-white' : 'bg-[#DCE2CB]'}`}
                        onClick={() => handleButtonClick(2, setActiveTab('fighter'))}
                    >
                        Fighter
                    </button>
                    <button className={`py-1 px-4 font-semibold ${activeButton === 3 ? 'bg-[#0B2F20] text-white' : 'bg-[#DCE2CB]'}`}
                        onClick={() => handleButtonClick(3, setActiveTab('Boeing'))}
                    >
                        Boeing
                    </button>
                </div>
            </div>



            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {
                    products.map(product => <ProductCard
                        key={product._id}
                        product={product}
                    />)
                }
            </div>
        </section>
    );
};

export default Products;