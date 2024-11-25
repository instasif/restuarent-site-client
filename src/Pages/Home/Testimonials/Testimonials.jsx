import SectionTitle from "../../../Componants/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Link } from "react-router-dom";

export default function Testimonials() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <section className="my-20">
      <SectionTitle
        subHeading={"What Our Client Say"}
        heading={"Testimonials"}
      />
      {reviews.length > 1 ? (
        <Swiper
          navigation={true}
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={reviews.length > 2} 
          className="mySwiper"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="mx-24 my-16 flex flex-col items-center">
                <Rating
                  style={{ maxWidth: 250 }}
                  value={review.rating}
                  readOnly
                />
                <p className="py-8">{review.details}</p>
                <h3 className="text-2xl text-orange-400">{review.name}</h3>
              </div>
              <Link to={"/order/salad"}>
                <button className="btn btn-outline border-0 border-b-4 mt-4 flex mx-auto">
                  View Full Menu
                </button>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p className="text-center text-gray-500">No reviews available</p>
      )}
    </section>
  );
}
