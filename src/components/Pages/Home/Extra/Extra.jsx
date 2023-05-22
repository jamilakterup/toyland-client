import img from '../../../../assets/parallax.jpg';
import img1 from '../../../../assets/off.png';
import {Link} from 'react-router-dom';
import Marquee from "react-fast-marquee";
import p1 from '../../../../assets/p1.png'
import p2 from '../../../../assets/p2.png'
import p3 from '../../../../assets/p3.png'
import p4 from '../../../../assets/p4.png'
import p5 from '../../../../assets/p5.png'


const Extra = () => {
    return (
        <>
            <div className="card lg:card-side bg-base-100 shadow-xl container mx-auto my-20">
                <figure className='md:w-2/3'><img src={img} alt="Album" /></figure>
                <div className="card-body md:w-2/6">
                    <img className='md:w-[230px] md:h-[200px] w-full' src={img1} alt="" />
                    <p>{"Don't"} miss this wonderful opportunity. show all toys and select your one!! </p>
                    <div className="card-actions justify-end">
                        <Link to='/all-toys' className='btn bg-[#0B2F20]'>All toy</Link>
                    </div>
                </div>
            </div>
            <h2 className='text-5xl font-bold text-center text-[#0B2F20] mt-48 mb-20'>Associated With</h2>
            <Marquee className='mb-48'>
                <img src={p1} alt="" />
                <img src={p2} alt="" />
                <img src={p3} alt="" />
                <img src={p4} alt="" />
                <img src={p5} alt="" />
            </Marquee>
        </>
    );
};

export default Extra;