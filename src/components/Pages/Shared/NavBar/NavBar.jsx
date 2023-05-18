import {Link} from 'react-router-dom';
import logo from '../../../../assets/logo.png';

const NavBar = () => {
    // const {user, loading} = 
    const user = 'jamil';
    const navItems = <>
        <li><Link className='text-xl text-[#0B2F20] font-semibold' to='/'>Home</Link></li>
        <li><Link className='text-xl text-[#0B2F20] font-semibold' to='/'>About</Link></li>
        <li><Link className='text-xl text-[#0B2F20] font-semibold' to='/'>Blog</Link></li>
        {
            user?.email ?
                <>
                    <li><Link className='text-xl' to='/'>Orders</Link></li>
                </>
                :
                ''
        }
    </>

    return (
        <div className="bg-[#DCE2CB]">
            <div className="navbar relative z-10 container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <Link to='/'>
                        <img className='h-16' src={logo} alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user?.email ?
                            <>
                                <button className='btn bg-[#0B2F20]'>Log out</button>
                            </>
                            :
                            <Link className='btn bg-[#0B2F20]' to='/user/login'>Login</Link>
                    }
                    {/* <a className="btn bg-[#406147]">Get started</a> */}
                </div>
            </div>
        </div>
    );
};

export default NavBar;