import { useRef, useState } from 'react';
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import image1 from '../pictures/air.png';
import image2 from '../pictures/water.png';
import image3 from '../pictures/earth.png';
import image4 from '../pictures/animals.png';

function Info() {
  return (
    <>
      <div className='flex justify-evenly'>
        <div className='w-[40%] h-[450px] mt-14 mr-6'>
          <Swiper
            spaceBetween={60}
            centeredSlides={true}
            autoplay={{
              delay: 2700,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: false,
            }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper">
            <SwiperSlide>
              <img
                className='object-contain h-[350px] w-full mx-auto'
                src={`https://d3hnfqimznafg0.cloudfront.net/images/Article_Images/ImageForArticle_912(1).jpg`} />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className='object-contain h-[350px] w-full mx-auto'
                src={`https://www.greenyellow.vn/wp-content/uploads/2023/02/Reducing-our-personal-carbon-footprint.webp`} />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className='w-[60%] h-[450px]'>
          <div>
            <div className="flex justify-center">
              <h1 className="text-3xl font-bold mt-8 mb-4 text-green-600">What is a Carbon Footprint?</h1>
            </div>
            {/* <div className="flex justify-center">
                        <h1 className="text-2xl font-bold mb-4 text-green-700">Why does it Matter?</h1>
                    </div> */}
            <div className='text-justify mr-8'>
              <p>
                Whenever we use our phones, computers, switch on the lights & heat our homes we use energy.
                Most of the energy we use – electricity, gas and petrol- comes from fossil fuels, such as coal and gas, that are mined from the ground.
                When these are used to make energy, they release greenhouse gases that are harmful to our planet.
                The most common greenhouse gas is CO2 though there are a set of other gases that also harm our environment.
              </p>
            </div>
            <div className='text-justify mr-8 mt-4'>
              <p>
                A Carbon Footprint is a measure of the amount of greenhouse gases that we cause and is measured in units of tonnes of CO2 (carbon dioxide).
              </p>
            </div>
            <div className='text-justify mr-8'>
              <h2 className="font-bold mt-4 mb-4 text-green-700">Why we Need to Reduce our Carbon Footprint…</h2>
              <p>
                Greenhouse gases trap heat into our planet’s air making it hotter.
                This process is called global warming.
                But this doesn’t mean we get nicer summers!
                When the air heats up it has more energy.
                When the air has more energy, it causes more hurricanes, tornadoes and other extreme weather conditions.
                It also causes the loss of natural habitats for many species of animals and plants, leading to loss of biodiversity.
                If we don’t reduce the rate of global warming, our planet may never recover from this damage.
              </p>
            </div>
          </div>
        </div>
      </div>


      <div className="bg-gray-200 w-full h-[200px]">
        <div className="flex justify-center">
          <h1 className="text-3xl font-bold mt-8 mb-12 text-green-600">Want to find out if you are a UrbaGreen Hero?</h1>
        </div>
        <div className='flex justify-center'>
          <Link to="/quiz"><button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Take Our Quiz!</button></Link>
        </div>
      </div>


      <div className='w-full flex flex-row my-12 justify-evenly'>
        <div className='flex flex-col items-center'>
          <Link to="/air">
            <img
              className='h-52 w-74 hover:cursor-pointer border-y-4 '
              src={image1} />
          </Link>
          <Link to="/air" className='tracking-tight hover:tracking-wide text-xl my-2 font-serif font-bold text-green-700 hover:text-green-800'>AIR</Link>
        </div>
        <div className='flex flex-col items-center'>
          <Link to="/water">
            <img
              className='h-52 w-74 hover:cursor-pointer border-y-4 '
              src={image2} />
          </Link>
          <Link to="/water" className='tracking-tight hover:tracking-wide text-xl my-2 font-serif font-bold text-green-700 hover:text-green-800'>WATER</Link>
        </div>
        <div className='flex flex-col items-center'>
          <Link to="/earth">
            <img
              className='h-52 w-74 hover:cursor-pointer border-y-4 '
              src={image3} />
          </Link>
          <Link to="/earth" className='tracking-tight hover:tracking-wide text-xl my-2 font-serif font-bold text-green-700 hover:text-green-800'>EARTH</Link>
        </div>
        <div className='flex flex-col items-center'>
          <Link to="/animals">
            <img
              className='h-52 w-74 hover:cursor-pointer border-y-4 '
              src={image4} />
          </Link>
          <Link to="/animals" className='tracking-tight hover:tracking-wide text-xl my-2 font-serif font-bold text-green-700 hover:text-green-800'>ANIMALS</Link>
        </div>
      </div>
    </>
  )
}

export default Info;