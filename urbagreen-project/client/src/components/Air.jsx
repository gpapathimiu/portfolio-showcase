import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import image5 from '../pictures/aircraft.png'

import { FLIGHTS } from '../data/flights.js';
import FlightsCard from './FlightsCard.jsx';


function Air() {
  return (
    <>
      <div className='flex justify-evenly'>
        <div className='w-[40%] h-[450px] mt-14 mr-6 ml-6'>
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
                src={image5} />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className='w-[60%] h-[450px]'>
          <div>
            <div className="flex justify-center">
              <h1 className="text-3xl font-bold mt-8 mb-4 text-green-600">Air travel and climate change</h1>
            </div>
            {/* <div className="flex justify-center">
                        <h1 className="text-2xl font-bold mb-4 text-green-700">Why does it Matter?</h1>
                    </div> */}
            <div className='text-justify mr-8'>
              <p>
                Flights are energy-intensive and depend on fossil fuels. Subsidies from fuel taxes give the airline industry an unfair advantage over other transportation modes. Consumers don’t see the true environmental costs of their air travel because low flight prices don’t reflect their environmental impact. Emissions from flights stay in the atmosphere and will warm it for several centuries. Because aircraft emissions are released high in the atmosphere, they have a potent climate impact, triggering chemical reactions and atmospheric effects that heat the planet.
              </p>
            </div>
            <div className='text-justify mr-8'>
              <h2 className="font-bold mt-4 mb-4 text-green-700">A quarter of all emissions could be from flying by 2050</h2>
              <p>
                While many sectors are beginning to reduce their emissions, aviation’s have continued to grow. Carbon emissions from the airline industry grew by 75 per cent from 1990 to 2012. It’s expected they will continue to grow rapidly until 2050. If left unchecked, they could consume a full quarter of the available carbon budget for limiting temperature rise to 1.5 C.
              </p>
            </div>

            <div className='text-justify mr-8'>
              <h2 className="font-bold mt-4 mb-4 text-green-700">Do new technologies make flying sustainable?</h2>
              <p>
                Requirements around biofuels and electrification could help. Because of battery weight, electrification fits for flights under 1,500 kilometres. That’s a problem since 80 per cent of flying is for flights longer than that. Some airlines are taking voluntary steps to reduce carbon pollution. Choose airlines that have an efficient fleet and fly their planes with few empty seats. </p>
            </div>

          </div>
        </div>
      </div>

      <div className='w-[90%] flex flex-row ml-10'>
        <h2 className="font-bold flex mt-4 mb-4 text-green-700">What's the best climate response to flying?</h2>
      </div>
      <div className='w-[95%] flex flex-row ml-10 text-justify mr-10'>
        <p>
          Fly only when necessary and stay longer. When flying for work, group meetings together. Take direct flights when possible. Or, skip the flight and use video teleconferencing. If you must travel, offsets are a partial solution to lowering your impact.
        </p>
      </div>

      <div className="bg-gray-100 mt-10 ml-10 mr-10">
        <div className="flex justify-center">
          <h1 className="text-2xl font-bold mt-12 mb-6 text-green-700">Five ways to reduce your carbon footprint</h1>
        </div>
        <div className='flex justify-center'>
          <h1 className="text-xl font-normal mb-12 text-green-700">Here are some meaningful decisions you can make to reduce your carbon footprint when you fly:</h1>
        </div>
      </div>

      <div
        className='flex flex-row my-12 m-10'>
        {FLIGHTS.map((val, key) => (
          <FlightsCard flights={val} key={key} />
        ))}
      </div>

    </>
  )
}

export default Air;