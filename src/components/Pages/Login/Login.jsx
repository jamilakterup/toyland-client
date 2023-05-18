import {Link} from "react-router-dom";
import frame from '../../../assets/Frame.png';
import {useContext} from "react";
import {AuthContext} from "../../Providers/AuthProvider";

const Login = () => {
    const {signInUser} = useContext(AuthContext)

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
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
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-5">
                            <button type="submit" className="btn bg-[#0B2F20]">Login</button>
                            <label className="label mt-4">
                                <p className="label-text-alt">New to this site? <Link className="link link-hover" to='/user/register'>Register</Link></p>
                            </label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;