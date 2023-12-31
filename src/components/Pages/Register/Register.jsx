import {Link, useLocation, useNavigate} from "react-router-dom";
import frame from '../../../assets/Frame.png';
import {useContext, useState} from "react";
import {AuthContext} from "../../Providers/AuthProvider";
import {updateProfile} from "firebase/auth";
import {FaRegEye, FaRegEyeSlash} from 'react-icons/fa';
import toast from "react-hot-toast";
import useTitle from "../../../Hooks/useTitle";

const Register = () => {
    const [pass, setPass] = useState(false);
    const [confirm, setConfirm] = useState(false);
    useTitle('Toyland-register')
    const {signUpUser} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const pic = form.pic.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        if (password.length < 6) {
            toast.error('Use at-list 6 characters');
        }

        if (password !== confirm) {
            toast.error("Please enter same password")
            return;
        }

        signUpUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(result.user, name, pic)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const updateUserProfile = (user, name, pic) => {
        updateProfile(user, {
            displayName: name,
            photoURL: pic
        })
            .then(() => {
                toast.success('User sign up Successful!');
                navigate(from, {replace: true})
            })
            .catch(err => {
                console.log(err)
                toast.error(err.message);
            });
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row justify-between w-[70%]">
                <div className="text-center lg:text-left md:w-1/2">
                    <img src={frame} alt="" />
                </div>
                <div className="card flex-shrink-0 max-w-sm shadow-2xl bg-base-100 md:w-1/2">
                    <h3 className="text-center text-3xl font-bold mt-3 text-[#0B2F20]">Register</h3>
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="url" name="pic" placeholder="Photo url" className="input input-bordered" />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={confirm ? 'text' : 'password'} name="password" placeholder="6 characters password" className="input input-bordered" required />
                            <button className="absolute right-2 bottom-4" onClick={() => setConfirm(!confirm)}>{confirm ? <FaRegEye /> : <FaRegEyeSlash />}</button>
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type={pass ? 'text' : 'password'} name="confirm" placeholder="Confirm password" className="input input-bordered" required />
                            <button className="absolute right-2 bottom-12" onClick={() => setPass(!pass)}>{pass ? <FaRegEye /> : <FaRegEyeSlash />}</button>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-5">
                            <button type="submit" className="btn bg-[#0B2F20]">Register</button>
                        </div>
                        <label className="label my-4 ms-10">
                            <p className="label-text-alt">Already have an account? <Link className="link link-hover" to='/login'>Login</Link></p>
                        </label>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Register;