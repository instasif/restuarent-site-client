import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import slide1 from "../../../Assets/home/slide1.jpg";
import slide2 from "../../../Assets/home/slide2.jpg";
import slide3 from "../../../Assets/home/slide3.jpg";
import slide4 from "../../../Assets/home/slide4.jpg";
import slide5 from "../../../Assets/home/slide5.jpg";
import SectionTitle from "../../../Componants/SectionTitle/SectionTitle";

export default function Category() {
  return (
    <section>
      <SectionTitle
        heading={"Order Online"}
        subHeading={"From 11.00am to 10.00pm"}
      />
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <h3 className=" text-3xl text-center text-white -mt-16">Salads</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <h3 className=" text-3xl text-center text-white -mt-16">Pizzas</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <h3 className=" text-3xl text-center text-white -mt-16">Soups</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <h3 className=" text-3xl text-center text-white -mt-16">Deserts</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <h3 className=" text-3xl text-center text-white -mt-16">Salads</h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
