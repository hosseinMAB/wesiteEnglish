import { useNews } from "../../../Context/NewsPapareProvaider";
import "./ListCss.css";
const ItemList = () => {
  const { NewsData } = useNews();

  return (
    <>
      <div>
        {NewsData.map((news) => {
          return (
            <div key={news.id} className="Container">
              <div className="content2"></div>
              <div className="Container_News">
                <p> {news.news}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ItemList;
