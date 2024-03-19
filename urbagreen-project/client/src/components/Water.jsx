import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import waste1 from '../pictures/water-waste.png'
import waste2 from '../pictures/wasted-water.png'

function Water() {
  return (
    <>
      <div className='flex justify-evenly mb-10'>
        <div className='w-[60%] ml-10'>
          <div>
            <div className="flex justify-center">
              <h1 className="text-3xl font-bold mt-8 mb-4 text-green-700">Water waste results in carbon emissions</h1>
            </div>
            {/* <div className="flex justify-center">
                        <h1 className="text-2xl font-bold mb-4 text-green-700">Why does it Matter?</h1>
                    </div> */}
            <div className='text-justify mr-8'>
              <p>
                The water systems within the world's building and facilities are a major source of carbon and other greenhouse gas emissions that contribute to the global climate crisis, according to a new white paper released by WINT Water Intelligence.
              </p>
            </div>
            <div className='text-justify mr-8'>
              <p>
                While the availability of clean water has been recognized as an urgent worldwide concern, carbon emissions associated with the production, treatment, and distribution of clean water have often been overlooked. "The Carbon Impact of Water" details the immediate and long-term consequences of current water infrastructure.
              </p>
            </div>

            <div className='text-justify mr-8'>
              <p>
                The paper also highlights the amplifying effect of waste and chronic inefficiency: approximately 25 percent of all water in the built environment is ultimately wasted, driving up water-related energy use and associated greenhouse emissions.
              </p>
            </div>

            <div className='text-justify mr-8'>
              <p>
                "The Carbon Impact of Water" also offers expert guidance on best practices to reduce waste and emissions.
              </p>
            </div>

            <div className='text-justify mr-8'>
              <p>
                The environmental impact of water misuse and waste is a critical challenge, where in the past water was viewed as a scarce resource in some locations and a plentiful asset in others, it can no longer be taken for granted. Inefficient use of this resource creates shortages and increases greenhouse emissions, sometimes more than notorious emitters such as cars or transatlantic flights.
              </p>
            </div>

            <div className='text-justify mr-8'>
              <p>
                While greenhouse emissions vary based on the source and distribution method, the research finds that every cubic meter of water consumed generates 10.5 kg of carbon emissions, or 85 pounds for every 1,000 gallons. For some local U.S. governments where such information is readily available, water and wastewater can account for 30-40 percent or more of public energy consumption. Moreover, potable water ends up in sewage treatment processes that are not only energy-intensive but also release powerful greenhouse gases such as nitrous oxide and methane, which are many times more potent than carbon dioxide.
              </p>
            </div>

            <div className='text-justify mr-8'>
              <p>
                Unfortunately, inefficiencies are rampant in buildings. Approximately 25 percent of the water in the built environment is ultimately wasted through leaks, outdated technology, malfunctions, and human error. As a simple example, a leaking toilet continuously flows at 100-150 gallons per hour, wasting more than 1 million gallons a year and accounting for some 4.5 tons of greenhouse emissions — identical to the total annual emissions from a passenger car. In facilities with multiple restrooms, such as office buildings, sports stadiums, and shopping malls, some 2-3 percent of toilets typically leak at any point in time, creating significant carbon and water footprints.
              </p>
            </div>

            <div className='text-justify mr-8'>
              <p>
                Inefficient use of water is a significant source of carbon and other greenhouse emissions, but a few key actions, such as proper maintenance and installing advanced water intelligence solutions, are highly effective ways of reducing waste, emissions, and overall environmental impact.
              </p>
            </div>

            <div className='text-justify mr-8'>
              <p>
                It is our generation's responsibility to efficiently use the water we've been given, and to identify and curtail the unnecessary, expensive, and environmentally irresponsible waste of this precious resource.
              </p>
            </div>

          </div>
        </div>
        <div className='w-[40%] mt-14 ml-6'>
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
                src={waste1} />
            </SwiperSlide>
          </Swiper>

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
                className='object-contain h-[350px] w-full mx-auto mt-10'
                src={waste2} />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

    </>
  )
}

export default Water;