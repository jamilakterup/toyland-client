import './Banner.css';
import banner from '../../../../assets/banner.png';

const Banner = () => {
    return (
        <main className="md:flex bg-[#DCE2CB] h-[75vh]">
            <div className="md:w-1/2 flex justify-center items-center md:mx-0 mx-3">
                <div>
                    <h1 className='text-5xl md:text-7xl font-bold md:text-justify text-center text-[#0B2F20]'>A new box of toy <br /> every month</h1>
                    <p className='my-6 text-xl text-[#0B2F20]'>
                        We {"don't"} just deliver toys, We deliver happiness to our children</p>
                </div>
            </div>
            <div className="md:w-1/2 flex md:justify-end justify-center">
                <img className='md:h-full h-[18em]' src={banner} alt="" />
            </div>
        </main>
    );
};

export default Banner;