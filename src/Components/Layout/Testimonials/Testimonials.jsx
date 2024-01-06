import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Testimonial.css";
import { Pagination, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/public.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setDatas(data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <div>
        <p className="my-8 text-center text-2xl lg:text-4xl font-semibold">
          Testimonials
        </p>
      </div>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {datas.map((data, index) => (
          <SwiperSlide key={index}>
            <TestimonialCard data={data}></TestimonialCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Testimonials;
