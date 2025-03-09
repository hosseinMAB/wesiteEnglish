import React from "react";
import { HomeJS } from "../HomeJS";
import Buttons from "../../../Bottons/Buttons";
import ItemList from "./ItemList";
import "./ListCss.css";
import { useNews } from "../../../Context/NewsPapareProvaider";
export const ListHome = () => {
  const { Open, handelAdvertisementslist, isArabic, t } = HomeJS();
  const { NewsData } = useNews();
  return (
    <div
      className={`Advertisements_list ${Open ? "active" : ""}  ${
        isArabic === "ar" ? "ltr_list" : "rtl_list"
      }`}
    >
      <div className="list_advert">
        {" "}
        <div className="headar_list">
          <h2
            style={{ fontFamily: isArabic === "ar" ? "Readex Pro" : "DM Sans" }}
          >
            {" "}
            {t("news")}
          </h2>
        </div>
        <ItemList />
      </div>

      <Buttons onClick={handelAdvertisementslist}>
        <i className="fa-solid fa-newspaper"></i>
        <div
          className="content_button"
          style={{ left: isArabic == "ar" ? "20px" : "" }}
        >
          {NewsData.length}
        </div>
      </Buttons>
    </div>
  );
};
