import {FaGithub} from 'react-icons/fa';
import google from '../../../assets/Google.png';
import {useContext} from 'react';
import {AuthContext} from '../../Providers/AuthProvider';

const SocialMedia = () => {
    const {googleSIgnIn, githubSignIn} = useContext(AuthContext);

    const handleGoogleLogin = () => {
        googleSIgnIn()
            .then(result => {
                const googleUser = result.user;
                console.log(googleUser);
            })
            .catch(err => console.log(err))
    }

    const handleGithubLogin = () => {
        githubSignIn()
            .then(result => {
                const googleUser = result.user;
                console.log(googleUser);
            })
            .catch(err => console.log(err))
    }




    return (
        <div className='mx-auto flex items-center'>
            <button onClick={handleGoogleLogin} className="me-5 rounded-full outline">
                <img className='w-11' src={google} alt="" />
            </button>
            <button onClick={handleGithubLogin} className="btn btn-circle text-xl bg-gray-900">
                <FaGithub />
            </button>
        </div>
    );
};

export default SocialMedia;