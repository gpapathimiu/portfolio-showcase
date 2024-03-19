import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Animals() {
  return (
    <div className='w-full text-green-800 px-8 text-center py-12 text-justify'>

      <div className="max-w-3xl mx-auto mb-12">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-10 uppercase flex justify-center">Half of plant and animal species at risk from climate change in world’s most important natural places</h1>
          <p className="text-lg leading-relaxed">
            The Amazon, Miombo Woodlands in Southern Africa, and southwest Australia
            will be among the most affected places in the world
          </p>
        </div>

        <div className="mb-8">
          <p className="text-lg leading-relaxed">
            Up to half of plant and animal species in the world’s most naturally rich areas, such as the Amazon and the Galapagos, could face local extinction by the turn of the century due to climate change if carbon emissions continue to rise unchecked. Even if the Paris Climate Agreement 2°C target is met, these places could lose 25 percent of their species according to a landmark new study by the University of East Anglia, the James Cook University, and WWF.
          </p>
        </div>

        <div className="mb-8">
          <p className="text-lg leading-relaxed">
            “Hotter days, longer periods of drought, and more intense storms are becoming the new normal, and species around the world are already feeling the effects,” said Nikhil Advani, lead specialist for climate, communities, and wildlife at WWF. “While we work to ratchet down emissions, it’s critical we also improve our understanding of species’ response to climate change and develop strategies to help them adapt.”
          </p>
        </div>

        <div className="mb-8">
          <p className="text-lg leading-relaxed">
            Published in the journal Climatic Change and just ahead of Earth Hour, the world’s largest environmental event, researchers examined the impact of climate change on nearly 80,000 plant and animal species in 35 of the world’s most diverse and naturally wildlife-rich areas. It explores a number of different climate change futures – from a no-emissions-cuts case in which global mean temperatures rise by 4.5°C, to a 2°C rise, the upper limit for temperature in the Paris Agreement. Each area was chosen for its uniqueness and the variety of plants and animals found there.
          </p>

          <p className="text-xl font-semibold mt-4">The report finds that the Miombo Woodlands, home to African wild dogs, southwest Australia and the Amazon-Guianas are projected to be some the most affected areas. If there was a 4.5°C global mean temperature rise, the climates in these areas are projected to become unsuitable for many the plants and animals that currently live there, meaning:</p>
          <ul className="list-disc pl-6 mt-4">
            <li>Up to 90 percent of amphibians, 86 percent of birds and 80 percent of mammals could potentially become locally extinct in the Miombo Woodlands in Southern Africa.</li>
            <li>Extreme weather events such as heatwaves, heavy downpours and wildfires.</li>
            <li>The Amazon could lose 69 percent of its plant species.</li>
            <li>In southwest Australia 89 percent of amphibians could become locally extinct.</li>
            <li>60 percent of all species are at risk of localised extinction in Madagascar. </li>
            <li>The Fynbos in the Western Cape Region of South Africa, which is experiencing a drought that has led to water shortages in Cape Town, could face localized extinctions of a third of its species, many of which are unique to that region.</li>
          </ul>
        </div>


        <div className="mb-8">
          <p className="text-lg leading-relaxed">
            Additionally, increased average temperatures and more erratic rainfall could become be the “new normal” according to the report - with significantly less rainfall in the Mediterranean, Madagascar and the Cerrado-Pantanal in Argentina. Potential effects include:          </p>

          <ul className="list-disc pl-6 mt-4">
            <li>Pressure on the water supplies of African elephants – who need to drink 150 to 300 litres of water per day.</li>
            <li>96 percent of the breeding grounds of Sundarbans tigers could become submerged by sea-level rise.</li>
            <li>Comparatively fewer male marine turtles due to temperature-induced sex assignment of eggs.</li>
          </ul>
        </div>



        <div>
          <p className="text-lg leading-relaxed mt-4">
            “Our research quantifies the benefits of limiting global warming to 2°C for species in 35 of the world’s most wildlife-rich areas,” said Rachel Warren, lead researcher from the Tyndall Centre for Climate Change Research. “We studied 80,000 species of plants, mammals, birds, reptiles and amphibians and found that 50 percent of species could be lost from these areas without climate policy. However, if global warming is limited to 2°C above pre-industrial levels, this could be reduced to 25 percent. Limiting warming to within 1.5°C was not explored but would be expected to protect even more wildlife.”
          </p>

          <p className="text-lg leading-relaxed mt-4">
            Overall the research shows that the best way to protect against species loss is to keep global temperature rise as low as possible. The Paris Agreement pledges to reduce the expected level of global warming from 4.5°C to around 3°C, which reduces the impacts, but we see even greater improvements at 2°C; and it is likely that limiting temperature rise to 1.5°C would protect more wildlife.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            This is why on March 24 millions of people across the world will come together for Earth Hour, to show their commitment to reducing global emissions and protecting people and wildlife from the impacts of climate change. The event also sends a clear message to business and government that there is a global will to change this trajectory.
          </p>
        </div>
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
            className='object-contain h-[450px] w-full mx-auto mb-6 mt-8'
            src={`https://img.freepik.com/premium-photo/carbon-footprint-concept-with-stylized-feet-air-pollution-water-conservation-efforts-need-sustainable-power-sources-generative-ai_856846-56.jpg`} />
        </SwiperSlide>
      </Swiper>

    </div>
  )
}

export default Animals;
