import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { Slide } from '../Slide/Slide';
import './Slider.scss';
import { ArrowRightIcon } from '../icons';

const slidesData = [
  {
    image: "slider-image-1.webp",
    title: "250+ Корпоративних сайтів",
    list: [
      "стартапи",
      "фінансові та юридичні послуги",
      "медичні послуги",
      "бізнес-конференції",
      "туристичні послуги",
      "сільськогосподарська продукція"
    ]
  },
  {
    image: "slider-image-2.webp",
    title: "150+ Інтернет-магазинів",
    list: [
      "одяг та взуття",
      "побутова техніка",
      "косметика та парфумерія",
      "бізнес-конференції",
      "електроніка",
      "продукти харчування"
    ]
  },
  {
    image: "slider-image-3.webp",
    title: "300+ Лендінгів",
    list: [
      "інтернет-маркетинг",
      "вебінари",
      "онлайн-тренінги",
      "IT-послуги",
      "освітні програми та івенти"
    ]
  }
];

export const Slider: React.FC = () => {
  return (
    <section className="pt-10 pl-10 laptop:pl-20 pb-40 laptop:pb-20">
      <Swiper
        modules={[Navigation, Scrollbar]}
        spaceBetween={6}
        slidesPerView={1.05}
        breakpoints={{
          1024: {
            slidesPerView: 1.1,
            spaceBetween: 20
          },
        }}
        loop
        navigation={{
          prevEl: '.swiper-custom-button-prev',
          nextEl: '.swiper-custom-button-next',
        }}
        scrollbar={{ draggable: true }}
        className="h-full pb-30 laptop:pb-[92px]"
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index} className="h-auto">
            <Slide
              image={slide.image}
              title={slide.title}
              list={slide.list}
            />
          </SwiperSlide>
        ))}

        <div className="swiper-custom-navigation">
          <div className="swiper-custom-button-prev">
            <ArrowRightIcon className="laptop:w-24 laptop:h-24 rotate rotate-180" />
          </div>
          <div className="swiper-custom-button-next">
            <ArrowRightIcon className="laptop:w-24 laptop:h-24" />
          </div>
        </div>
      </Swiper>
    </section>
  );
};
