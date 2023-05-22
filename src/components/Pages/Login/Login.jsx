import {Link, useLocation, useNavigate} from "react-router-dom";
import frame from '../../../assets/Frame.png';
import {useContext, useState} from "react";
import {AuthContext} from "../../Providers/AuthProvider";
import {FaRegEye, FaRegEyeSlash} from 'react-icons/fa';
import toast from "react-hot-toast";
import SocialMedia from "../Register/SocialMedia";
import useTitle from "../../../Hooks/useTitle";



const Login = () => {
    const [pass, setPass] = useState(false);
    const {signInUser} = useContext(AuthContext);
    useTitle('Toyland-Login')
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser.email);
                if (loggedUser.email) {
                    toast.success('Login Successful!')
                }
                navigate(from, {replace: true})
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row justify-between w-[70%]">
                <div className="text-center lg:text-left md:w-1/2">
                    <img src={frame} alt="" />
                </div>
                <div className="card flex-shrink-0 max-w-sm shadow-2xl bg-base-100 md:w-1/2">
                    <h3 className="text-center text-3xl font-bold mt-3 text-[#0B2F20]">Login</h3>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={pass ? 'text' : 'password'} name="password" placeholder="password" className="input input-bordered" required />
                            <button className="absolute right-2 bottom-12" onClick={() => setPass(!pass)}>{pass ? <FaRegEye /> : <FaRegEyeSlash />}</button>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-5">
                            <button type="submit" className="btn bg-[#0B2F20]">Login</button>
                        </div>
                        <div className="form-control">
                            <p className="divider">or</p>
                            <SocialMedia />
                        </div>
                        <label className="label mt-4">
                            <p className="label-text-alt">New to toyland? <Link className="link link-hover" to='/register'>Register</Link></p>
                        </label>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;