import {Link} from "react-router-dom";
import frame from '../../../assets/Frame.png';
import {useContext, useState} from "react";
import {AuthContext} from "../../Providers/AuthProvider";
import {updateProfile} from "firebase/auth";
import SocialMedia from "./SocialMedia";
import {FaRegEye, FaRegEyeSlash} from 'react-icons/fa';

const Register = () => {
    const [pass, setPass] = useState(false);
    const [confirm, setConfirm] = useState(false);
    const {signUpUser} = useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const pic = form.pic.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        if (password !== confirm) {
            alert("Please enter your password")
            return;
        }

        signUpUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(result.user, name, pic)
            })
            .catch(err => console.log(err))
    }

    const updateUserProfile = (user, name, pic) => {
        updateProfile(user, {
            displayName: name,
            photoURL: pic
        })
            .then(() => {
                console.log('updated profile');
            })
            .catch(err => console.log(err));
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
                        {/* <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={pass ? 'text' : 'password'} name="password" placeholder="password" className="input input-bordered" required />
                            <button className="absolute right-2 bottom-12" onClick={() => setPass(!pass)}>{pass ? <FaRegEye /> : <FaRegEyeSlash />}</button>
                        </div> */}
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={confirm ? 'text' : 'password'} name="password" placeholder="password" className="input input-bordered" required />
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
                    </form>
                    <div className="form-control">
                        <p className="divider">or</p>
                        <SocialMedia />
                        <label className="label my-4 ms-10">
                            <p className="label-text-alt">Already have an account? <Link className="link link-hover" to='/user/login'>Login</Link></p>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;