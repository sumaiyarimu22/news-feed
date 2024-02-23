import { NewsContext } from "../context";
import { useNewsQuery } from "../hooks";

const NewsDataProvider = ({ children }) => {
  const { newsData, error, loading } = useNewsQuery();
  return (
    <NewsContext.Provider value={{ newsData, error, loading }}>
      {children}
    </NewsContext.Provider>
  );
};

export default NewsDataProvider;
