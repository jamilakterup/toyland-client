import {Link} from 'react-router-dom';
import error from '../../../assets/error.jpg'
const Error = () => {
    return (
        <div className='flex justify-center items-center h-screen bg-[#8BACC7]'>
            <img className='w-[60em]' src={error} alt="" />
            <Link className='btn bg-[#0B2F20] absolute top-[420px] right-[210px]' to='/'>Back To Home</Link>
        </div>
    );
};

export default Error;