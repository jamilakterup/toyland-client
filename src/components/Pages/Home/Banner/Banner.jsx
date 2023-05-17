import './Banner.css';
import banner from '../../../../assets/banner.png';

const Banner = () => {
    return (
        <section className='banner md:flex relative'>
            <div className='md:w-1/2 flex items-center mx-5 md:mx-16 relative z-10'>
                <div>
                    <h1 className='text-5xl md:text-7xl font-bold'>A new box of toy every month</h1>
                    <p className='my-6 text-xl'>
                        We {"don't"} just deliver toys, We deliver happiness to our children</p>
                </div>
            </div>
            <div className='md:w-1/2 flex justify-end'>
                <img className='md:h-[32em] absolute bottom-0' src={banner} alt="" />
            </div>
        </section>
    );
};

export default Banner;