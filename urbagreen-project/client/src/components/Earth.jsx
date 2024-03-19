import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Earth() {
  return (
    <div className='w-full text-green-800 px-8 text-center py-12 text-justify'>

      <div className="max-w-3xl mx-auto mb-12">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-10 uppercase flex justify-center">Is carbon dioxide harmful to the environment?</h1>
          <p className="text-lg leading-relaxed">
            We hear a lot about carbon dioxide and how it’s the main driver behind climate change. But do you know why carbon dioxide is harmful to the environment, and why it’s good for the environment too? Let’s find out.
          </p>
        </div>

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
              className='object-contain h-[450px] w-full mx-auto mb-10'
              src={`https://s31888.pcdn.co/wp-content/uploads/2022/05/GettyImages-1371910917-1568x910.jpg.optimal.jpg`} />
          </SwiperSlide>
        </Swiper>

        <div className="mb-8">
          <h1 className="text-xl font-bold mb-4">Why is carbon dioxide helpful to the environment?</h1>
          <p className="text-lg leading-relaxed">
            Before we look at why carbon dioxide is harmful to the environment, let’s first consider why it’s helpful to the environment. The greenhouse effect keeps our planet at a balmy 15°C – a temperature ideal for humans and other species to live and thrive in. Without gases such as carbon dioxide to create the greenhouse effect, the Earth’s average temperature would be -18°C. The world would be covered in ice, and life wouldn’t be as we know it. The greenhouse effect is a good thing when it’s in balance. Here is where the problem lies.
          </p>
        </div>

        <div className="mb-8">
          <h1 className="text-xl font-bold mb-4">Why is carbon dioxide harmful to the environment?</h1>
          <p className="text-lg leading-relaxed">
            The problem is that carbon dioxide is tipping the greenhouse effect out of balance. Before the 1700s, the Earth was happily regulating the greenhouse effect – absorbing solar energy and emitting greenhouse gases at a steady rate. Then, the Industrial Revolution happened. Emissions of greenhouse gases, predominantly carbon dioxide, have been steadily increasing and kicking the greenhouse effect out of balance. What does this mean? Essentially, there are too many greenhouse gases absorbing the sun’s energy, which means our planet is slowly warming up. We know this as climate change. And there doesn’t appear to be an end in sight. Between 2000 and 2020, the Earth’s emissions more than quadrupled from the previous decade.
          </p>
        </div>

        <div className="mb-8">
          <h1 className="text-xl font-bold mb-4">What are the effects of climate change?</h1>
          <p className="text-lg leading-relaxed">
            Experts predict that if our greenhouse gases continue to rise as they have done over the last half-century, the world will be 4°C warmer than before the Industrial Revolution by 2099.
          </p>
          <h2 className="text-xl font-semibold mt-4">These rising average temperatures could cause:</h2>
          <ul className="list-disc pl-6 mt-2">
            <li>Ice caps to melt and oceans to warm, causing sea levels to rise.</li>
            <li>Extreme weather events such as heatwaves, heavy downpours and wildfires.</li>
            <li>Changes to where different wildlife populations can live and survive.</li>
            <li>Disrupted access to food.</li>
            <li>Increased spreading of diseases such as malaria.</li>
          </ul>
        </div>


        <div>
          <h1 className="text-2xl font-bold mb-4">What can we do to minimize the harmful effects of carbon dioxide?</h1>

          <p className="text-lg leading-relaxed">
            While we can’t turn back time, we can take action now to avoid irreversible damage to the planet.
          </p>

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
                className='object-contain h-[450px] w-full mx-auto mb-6 mt-8'
                src={`https://www.green.earth/hs-fs/hubfs/10%20easy%20ways%20to%20reduce%20your%20carbon%20footprint.jpg?width=1200&height=698&name=10%20easy%20ways%20to%20reduce%20your%20carbon%20footprint.jpg`} />
            </SwiperSlide>
          </Swiper>

          <h2 className="text-xl font-semibold mt-4">1. Limit your use of fossil fuels</h2>
          <p className="text-lg leading-relaxed">
            First, it’s crucial to limit the amount of carbon dioxide being released into the atmosphere. You can do this in a variety of ways, for example:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>Using renewable and clean energy sources.</li>
            <li>Buying long-lasting products.</li>
            <li>Shopping seasonally and locally.</li>
          </ul>
          <h2 className="text-xl font-semibold mt-4">2. Offset your carbon emissions</h2>
          <p className="text-lg leading-relaxed">
            After you’ve reduced your carbon emissions as much as possible, you can offset any unavoidable emissions to compensate. You do this by purchasing Carbon Credits from projects that have already captured or avoided CO2 emissions.
          </p>
        </div>
      </div>

    </div>
  )
}

export default Earth;
