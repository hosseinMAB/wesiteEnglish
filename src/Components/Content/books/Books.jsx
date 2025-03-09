import "./Books.css";
import { HomeJS } from "../Home/HomeJS";
import BooksSwiper from "./BooksSwiper";
import ListTeachers from "./ListTeachers";
import { useState } from "react";
import FeatureList from "./FeatureList";
export const Books = () => {
  const { direction } = HomeJS();

  const [OpenList, SETopenList] = useState(false);
  const handelListItem = () => {
    SETopenList(!OpenList);
  };
  return (
    <div className="Container_Book">
      <button className="openList " onClick={handelListItem}>
        <i className="fa-solid  fa-bars"></i>
      </button>
      <div
        className="container_Teacher"
        style={{ direction: "ltr", left: OpenList && "0px" }}
      >
        <div className="title_list">المدربين</div>
        <button type="button" className="colseOPEN " onClick={handelListItem}>
          <i className="fa-solid  fa-times"></i>
        </button>
        <ListTeachers />
      </div>

      <div className="containerComponent">
        <div className="Component" style={{ direction }}>
          <div>
            <FeatureList />
          </div>
          <div>
            <BooksSwiper />
          </div>
        </div>
      </div>
    </div>
  );
};
