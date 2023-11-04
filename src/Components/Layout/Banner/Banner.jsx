import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./banner.css"
import { Autoplay, Pagination } from "swiper/modules";
import Slide1 from "./Slide1";
import Slide2 from "./Slide2";
import Slide3 from "./Slide3";


const Banner = () => {
    return (
        <>
            <div className="mt-10">
                <Swiper
                    spaceBetween={10}
                    centeredSlides={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false
                    }}
                    pagination={{
                        clickable: true
                    }}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide><Slide1></Slide1></SwiperSlide>
                    <SwiperSlide><Slide2></Slide2></SwiperSlide>
                    <SwiperSlide><Slide3></Slide3></SwiperSlide>

                </Swiper>
            </div>
        </>
    );
};

export default Banner;