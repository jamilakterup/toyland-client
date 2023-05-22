import img1 from '../../../../assets/g4.jpeg'
import img2 from '../../../../assets/g2.jpg'
import img3 from '../../../../assets/g3.jpg'
import img4 from '../../../../assets/imp1.jpg'
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';


const Gallery = () => {
    return (
        <section className='my-36 container mx-auto'>
            <h1 className='text-5xl font-bold text-[#0B2F20] text-center mb-20'>Most Popular Toys</h1>
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide><img className='h-[300px]' src={img1} alt="" /></SwiperSlide>
                <SwiperSlide><img className='h-[300px]' src={img3} alt="" /></SwiperSlide>
                <SwiperSlide><img className='h-[300px]' src={img4} alt="" /></SwiperSlide>
                <SwiperSlide><img className='h-[300px]' src={img2} alt="" /></SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Gallery;