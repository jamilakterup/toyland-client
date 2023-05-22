import {Link, useRouteError} from 'react-router-dom';
import img from '../../../assets/error.jpg'
const Error = () => {
    const {error} = useRouteError();
    return (
        <div className='flex justify-center items-center h-screen bg-[#8BACC7]'>
            <img className='w-[60em]' src={img} alt="" />
            <Link className='btn bg-[#0B2F20] absolute top-[420px] right-[210px]' to='/'>Back To Home</Link>
            <p className='text-xl bottom-[150px] absolute'>{error.message}</p>
        </div>
    );
};

export default Error;