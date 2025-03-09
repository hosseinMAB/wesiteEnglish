import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Books.css";

// import required modules
import { Parallax, Pagination, Navigation } from "swiper/modules";
import { HomeJS } from "../Home/HomeJS";
import { useEffect, useState } from "react";

const BooksSwiper = () => {
  const [swiperKey, setSwiperKey] = useState(0);
  const { t, isArabic } = HomeJS();
  const courses = t("courses", { returnObjects: true });

  useEffect(() => {
    setSwiperKey((prevKey) => prevKey + 1);
  }, [isArabic]);

  return (
    <>
      <div className="containerSwiper">
        <Swiper
          key={swiperKey}
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          loop={true}
          speed={2000}
          parallax={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Parallax, Pagination, Navigation]}
          className="mySwiper"
        >
          <div
            slot="container-start"
            className="parallax-bg"
            data-swiper-parallax="-23%"
          ></div>
          {courses.map((course, index) => {
            return (
              <SwiperSlide key={index}>
                <div
                  className="title"
                  data-swiper-parallax="-300"
                  style={{
                    fontFamily: isArabic === "ar" ? "Readex Pro" : "DM Sans",
                  }}
                >
                  {course.name}
                </div>
                <div
                  className="text"
                  data-swiper-parallax="-100"
                  style={{
                    fontFamily: isArabic === "ar" ? "Readex Pro" : "DM Sans",
                  }}
                >
                  <p
                    style={{
                      fontFamily:
                        isArabic === "ar" ? "Amiri" : "Playfair Display",
                    }}
                  >
                    {course.information}
                  </p>
                </div>
                <div className="container_span">
                  <span>{course.duration}</span>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default BooksSwiper;
