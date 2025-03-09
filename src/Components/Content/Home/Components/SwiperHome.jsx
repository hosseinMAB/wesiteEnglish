import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../Home.css";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";
import { Pagination, Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";
import { useLanguage } from "../../../Context/LanguageContext";
export const SwiperHome = () => {
  const [swiperKey, setSwiperKey] = useState(0);
  const { isArabic } = useLanguage();

  useEffect(() => {
    setSwiperKey((prevKey) => prevKey + 1);
  }, [isArabic]);

  return (
    <div className="swier_container">
      <Swiper
        key={swiperKey}
        slidesPerView={4}
        spaceBetween={10}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          // عند عرض الشاشة أقل من أو يساوي 600px، سيظهر سلايد واحد
          500: {
            slidesPerView: 1,
          },
          501: {
            slidesPerView: 3,
            spaceBetween: 1,
          },
          800: {
            slidesPerView: 4,
            spaceBetween: 5,
          },
          0: {
            slidesPerView: 1, // إذا كنت ترغب في تعيين مستوى افتراضي لـ 1 عند عدم وجود عرض محدد
          },
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="src\assets\images_backGROUND\i1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src="src\assets\images_backGROUND\i2.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src="src\assets\images_backGROUND\i3.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src="src\assets\images_backGROUND\i4.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="src\assets\images_backGROUND\i1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src="src\assets\images_backGROUND\i2.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src="src\assets\images_backGROUND\i3.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src="src\assets\images_backGROUND\i4.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
