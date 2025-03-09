import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  useMemo,
} from "react";

const news = createContext();

const NewsPapareProvider = ({ children }) => {
  const [NewsData, setNews] = useState([]);
  const isLoading = useRef(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch("src/Components/Json/newsPapare.json");
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        setNews(data);
      } catch (error) {
        console.error("Failed to fetch news:", error);
      }
    };
    if (isLoading.current) {
      fetchNews();
      isLoading.current = false;
    }
  }, []);
  const value = useMemo(() => ({ NewsData }), [NewsData]);

  console.log(NewsData);
  return <news.Provider value={value}>{children}</news.Provider>;
};

export default NewsPapareProvider;

// eslint-disable-next-line react-refresh/only-export-components
export const useNews = () => {
  return useContext(news);
};
