import {useContext} from "react";
import {AuthContext} from "../../Providers/AuthProvider";
import {useForm} from "react-hook-form";
import gif from '../../../assets/gif.gif';
import toast from "react-hot-toast";
import useTitle from "../../../Hooks/useTitle";

const AddToys = () => {
    const {user} = useContext(AuthContext);
    useTitle('Toyland-Add A Toy')


    const {register, handleSubmit} = useForm();
    const onSubmit = data => {

        fetch('https://toyland-server-red.vercel.app/toys', {
            method: 'POST',
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
            <div className="flex flex-col-reverse md:flex-row container mx-auto mb-20">
                <form className="w-full md:w-2/3" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex gap-6 my-6">
                        <input className="input input-bordered w-full" placeholder="toy name" {...register("toyName")} />
                        <input className="input input-bordered w-full"  {...register("email", {required: true})} defaultValue={user?.email} readOnly />
                    </div>
                    <div className="flex gap-6 my-6">
                        <select className="input input-bordered w-full" {...register("subcategory")}>
                            <option value="cargo">Cargo</option>
                            <option value="Boeing">Boeing</option>
                            <option value="fighter">Fighter</option>
                        </select>
                        <input className="input input-bordered w-full"  {...register("ratings", {required: true})} placeholder="ratings" />
                    </div>
                    <div className="flex gap-6 my-6">
                        <input className="input input-bordered w-full" placeholder="price" {...register("price")} />
                        <input className="input input-bordered w-full"  {...register("availableQuantity", {required: true})} placeholder="quantity" />
                    </div>
                    <div className="flex gap-6 my-6">
                        <input type="url" className="input input-bordered w-full" placeholder="img url" {...register("img")} />
                        <input className="input input-bordered w-full" placeholder="Seller name" {...register("seller")} />
                    </div>
                    <textarea className="input input-bordered w-full " name="" id="" cols="30" rows='30' {...register("description")}></textarea>
                    <br />
                    <input className="btn w-full bg-[#0B2F20]" type="submit" />
                </form>
                <div className="w-full md:w-1/3 flex justify-center">
                    <img className="w-1/2 h-2/3" src={gif} alt="" />
                </div>
            </div>
        </>
    );
};

export default AddToys;