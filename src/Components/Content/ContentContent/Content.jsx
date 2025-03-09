// Components/Content/ContentContent/Content.js
import React from "react";
import "./Content.css";
import { Home } from "../Home/Home";
import { Books } from "../books/Books";
import { Envelope } from "../envelope/Envelope";
import Buttons from "../../Bottons/Buttons";
import { useLanguage } from "../../Context/LanguageContext";

export const Content = () => {
  const { isArabic, handleLanguageChange } = useLanguage();

  return (
    <div>
      <div className="button_er">
        <Buttons onClick={handleLanguageChange}>
          {isArabic == "ar" ? (
            <i className="fas fa-globe"></i>
          ) : (
            <i className="fas fa-flag-usa"></i>
          )}
        </Buttons>
      </div>

      <div className={"scroll-container"}>
        <div>
          <section id="home" className="page">
            <Home />
          </section>
          <section id="books" className="page">
            <Books />
          </section>

          <section id="envelope" className="page">
            <Envelope />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Content;
