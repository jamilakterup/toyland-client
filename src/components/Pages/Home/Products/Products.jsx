import {useEffect, useState} from "react";
import ProductCard from "../ProductCard/ProductCard";


const Products = () => {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    const categorySelect = e => {
        e.preventDefault();
        const form = e.target;
        const value = form.value;
        console.log(value);
    }

    const subCategorySelect = e => {
        e.preventDefault();
        const form = e.target;
        const value = form.value;
        console.log(value);
    }


    return (
        <section className="my-24 container mx-auto">
            <div>
                <h1 className="text-center font-bold text-5xl my-12">All toys</h1>
            </div>
            {/* form select */}

            <form className="my-24 flex justify-center gap-12">
                <select onChange={categorySelect} className="input input-bordered p-2 w-1/3" >
                    <option value="all">All Category</option>
                    <option value="vintage">Vintage</option>
                    <option value="electric">Electric</option>
                    <option value="remote">Remote</option>
                </select>
                <select onChange={subCategorySelect} className="input input-bordered p-2 w-1/3" >
                    <option value="all">All Sub-Category</option>
                    <option value="boeing">Boeing</option>
                    <option value="cargo">Cargo</option>
                    <option value="fighter">Fighter</option>
                </select>
            </form>




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