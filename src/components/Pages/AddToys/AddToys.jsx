import {useContext} from "react";
import {AuthContext} from "../../Providers/AuthProvider";
import {useForm} from "react-hook-form";
import gif from '../../../assets/gif.gif';

const AddToys = () => {
    const {user} = useContext(AuthContext);
    console.log(user);


    const {register, handleSubmit} = useForm();
    const onSubmit = data => console.log(data);

    return (
        <>
            <h1 className="text-center text-5xl my-12 font-bold text-[#0B2F20]">Add a Toy</h1>
            <div className="flex flex-col-reverse md:flex-row container mx-auto mb-20">
                <form className="w-full md:w-2/3" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex gap-6 my-6">
                        <input className="input input-bordered w-full" placeholder="toy name" {...register("name")} required />
                        <input className="input input-bordered w-full"  {...register("email", {required: true})} defaultValue={user?.email} />
                    </div>
                    <div className="flex gap-6 my-6">
                        <input className="input input-bordered w-full" placeholder="toy category"{...register("category")} required />
                        <input className="input input-bordered w-full"  {...register("subcategory", {required: true})} placeholder="sub-category" required />
                    </div>
                    <div className="flex gap-6 my-6">
                        <select className="input input-bordered w-full" {...register("gender")}>
                            <option value="cargo">Cargo</option>
                            <option value="Boeing">Boeing</option>
                            <option value="fighter">Fighter</option>
                        </select>
                        <input className="input input-bordered w-full"  {...register("ratings", {required: true})} placeholder="ratings" required />
                    </div>
                    <div className="flex gap-6 my-6">
                        <input type="url" className="input input-bordered w-full" placeholder="img url" {...register("img")} required />
                        <input className="input input-bordered w-full"  {...register("availableQuantity", {required: true})} placeholder="quantity" required />
                    </div>
                    <div className="flex gap-6 my-6">
                        <input className="input input-bordered w-full" placeholder="Seller name" {...register("seller")} />
                        <textarea className="input input-bordered w-full " name="" id="" cols="30" rows="10" {...register("description")}></textarea>
                    </div>
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