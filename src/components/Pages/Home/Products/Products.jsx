import {useEffect, useState} from "react";
import ProductCard from "../ProductCard/ProductCard";
// import {useForm} from "react-hook-form";


const Products = () => {
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState('vintage');

    // const {register, handleSubmit} = useForm();
    // const onSubmit = data => console.log(data);


    useEffect(() => {
        fetch(`http://localhost:5000/toys/${category}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [category])

    const [activeButton, setActiveButton] = useState(1);

    const handleButtonClick = (buttonId) => {
        setActiveButton(buttonId);
        if (buttonId === 1) {
            setCategory('vintage')
        }
        if (buttonId === 2) {
            setCategory('remote controlled')
        }
        if (buttonId === 3) {
            setCategory('electric')
        }
    };
    console.log(category);

    return (
        <section className="my-24 container mx-auto">
            <div>
                <h1 className="text-center font-bold text-5xl my-12">Toys Category </h1>
            </div>

            <div className="flex justify-center mb-12">
                <div>
                    <button className={`py-1 px-4 font-semibold ${activeButton === 1 ? 'bg-[#0B2F20] text-white' : 'bg-[#DCE2CB]'}`}
                        onClick={() => handleButtonClick(1)}
                    >
                        Vintage
                    </button>
                    <button className={`py-1 px-4 font-semibold ${activeButton === 2 ? 'bg-[#0B2F20] text-white' : 'bg-[#DCE2CB]'}`}
                        onClick={() => handleButtonClick(2)}
                    >
                        Remote Controlled
                    </button>
                    <button className={`py-1 px-4 font-semibold ${activeButton === 3 ? 'bg-[#0B2F20] text-white' : 'bg-[#DCE2CB]'}`}
                        onClick={() => handleButtonClick(3)}
                    >
                        Electric
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