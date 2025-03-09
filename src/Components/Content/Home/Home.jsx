import "./Home.css";
import Buttons from "../../Bottons/Buttons";
import { HomeJS } from "./HomeJS";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ListHome } from "./Components/ListHome";
import { SwiperHome } from "./Components/SwiperHome";

export const Home = () => {
  const { t, isArabic, direction } = HomeJS();

  const [scrollingDown, setScrollingDown] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setScrollingDown(true);
      } else {
        setScrollingDown(false);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const animationProps = {
    initial: { opacity: 1, y: 0 },
    animate: { opacity: scrollingDown ? 0 : 1, y: scrollingDown ? -20 : 0 },
    transition: { duration: 0.5 },
  };

  return (
    <motion.div className="container_home" style={{ direction }}>
      <ListHome />
      <motion.div className="container_text" {...animationProps}>
        <h1
          style={{ fontFamily: isArabic === "ar" ? "Readex Pro" : "DM Sans" }}
        >
          {t("title")}
        </h1>
        <p
          style={{
            fontFamily: isArabic === "ar" ? "Amiri" : "Playfair Display",
          }}
        >
          {t("description")}
        </p>
        <SwiperHome />
        <div className="container_butto">
          <p
            style={{
              fontFamily: isArabic === "ar" ? "Amiri" : "Playfair Display",
            }}
          >
            {t("textIN_UO")}
          </p>
          <div>
            <Buttons>{t("logIn")}</Buttons>
            <Buttons>{t("signUp")}</Buttons>
          </div>
        </div>
      </motion.div>
      <motion.div {...animationProps}>
        <div
          className="container_image"
          style={{
            transform: isArabic === "ar" ? "scaleX(-1)" : "none",
          }}
        >
          <img src="src/assets/images_backGROUND/image1_0.png" alt="" />
        </div>
      </motion.div>
    </motion.div>
  );
};
