import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import InfoCard from './InfoCard';
import { INFO } from '../data/info.js';

export default function Dashboard({ user }) {
  return (
    <div className='container mx-auto px-4 py-8'>
      <Swiper
        spaceBetween={60}
        centeredSlides={true}
        autoplay={{
          delay: 2700,
          disableOnInteraction: false,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper mb-6"
      >
        <SwiperSlide>
          <img 
            className='object-contain h-[500px] rounded-md w-full mx-auto'
            src={`https://cdn.shopify.com/s/files/1/0526/1914/9488/files/eco_friendly.png?v=1659684379`} alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img 
            className='object-contain h-[500px] w-full rounded-md  mx-auto'
            src={`https://th.bing.com/th/id/R.ac1a82b628f43858f83f63a7f2e95966?rik=f%2f7EqPcUORGrRw&pid=ImgRaw&r=0`} alt="Slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img 
            className='object-contain h-[500px] w-full rounded-md mx-auto'
            src={`https://static.vecteezy.com/system/resources/previews/038/007/996/non_2x/ai-generated-iguana-high-quality-image-free-photo.jpg`} alt="Slide 3" />
        </SwiperSlide>
      </Swiper>

<div className='text-5xl text-green-500 flex items-center justify-center'>
  <h1>Welcome to UrbaGreen!</h1>
  <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="currentColor" className="bi bi-tree-fill ml-1" viewBox="0 0 16 16">
  <path d="M8.416.223a.5.5 0 0 0-.832 0l-3 4.5A.5.5 0 0 0 5 5.5h.098L3.076 8.735A.5.5 0 0 0 3.5 9.5h.191l-1.638 3.276a.5.5 0 0 0 .447.724H7V16h2v-2.5h4.5a.5.5 0 0 0 .447-.724L12.31 9.5h.191a.5.5 0 0 0 .424-.765L10.902 5.5H11a.5.5 0 0 0 .416-.777z"/>
</svg>
</div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 m-12'>
        {INFO.map((val, key) => (
          <InfoCard info={val} key={key}/>
        ))}
      </div>

      <div className="mt-8">
        <iframe
          className='mx-auto rounded-lg shadow-lg'
          width="1000" height="500"
          src='https://www.youtube.com/embed/Np0AktXU178'
          title="Embedded Video"
        ></iframe>
      </div>
    </div>
  );
}
