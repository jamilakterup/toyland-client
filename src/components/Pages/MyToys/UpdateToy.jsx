import {useLoaderData} from "react-router-dom";
import gif from '../../../assets/gif.gif';
import {useForm} from "react-hook-form";
import toast from "react-hot-toast";

const UpdateToy = () => {
    const toy = useLoaderData();

    const {register, handleSubmit} = useForm();
    const onSubmit = data => {
        console.log(data);
        fetch(`http://localhost:5000/update/${data._id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Toy Added Successful!')
                }
                console.log(data)
            })

    };

    return (
        <>
            <h1 className="text-center text-5xl my-12 font-bold text-[#0B2F20]">Add a Toy</h1>
            {
                toy.map(t => <div key={t._id}>
                    <div className="flex flex-col-reverse md:flex-row container mx-auto mb-20">
                        <form className="w-full md:w-2/3" onSubmit={handleSubmit(onSubmit)}>
                            <div className="flex gap-6 my-6">
                                <input className="input input-bordered w-full" placeholder="toy name" {...register("toyName")} defaultValue={t.toyName} />
                                <input placeholder="id" className="hidden" {...register("_id")} defaultValue={t._id} />
                                <input className="input input-bordered w-full"  {...register("email", {required: true})} defaultValue={t.email} readOnly />
                            </div>
                            <div className="flex gap-6 my-6">
                                <select defaultValue={t.subcategory} className="input input-bordered w-full" {...register("subcategory")}>
                                    <option value="cargo">Cargo</option>
                                    <option value="Boeing">Boeing</option>
                                    <option value="fighter">Fighter</option>
                                </select>
                                <input className="input input-bordered w-full"  {...register("ratings", {required: true})} placeholder="ratings" defaultValue={t.ratings} />
                            </div>
                            <div className="flex gap-6 my-6">
                                <input className="input input-bordered w-full" placeholder="price" {...register("price")} defaultValue={t.price} />
                                <input className="input input-bordered w-full"  {...register("availableQuantity", {required: true})} placeholder="quantity" defaultValue={t.availableQuantity} />
                            </div>
                            <div className="flex gap-6 my-6">
                                <input type="url" className="input input-bordered w-full" placeholder="img url" {...register("img")} defaultValue={t.img} />
                                <input className="input input-bordered w-full" placeholder="Seller name" {...register("seller")} defaultValue={t.seller} />
                            </div>
                            <textarea className="input input-bordered w-full " name="" id="" cols="30" rows='30' {...register("description")} defaultValue={t.description} />
                            <br />
                            <input className="btn w-full bg-[#0B2F20]" type="submit" />
                        </form>
                        <div className="w-full md:w-1/3 flex justify-center">
                            <img className="w-1/2 h-2/3" src={gif} alt="" />
                        </div>
                    </div>
                </div>)
            }

        </>
    );
};

export default UpdateToy;