import { useNewsQuery } from "../components/hooks/useNewsQuery";
import { NewsContext } from "../context";

const NewsDataProvider = ({ children }) => {
  const { newsData, error, loading } = useNewsQuery();
  return (
    <NewsContext.Provider value={{ newsData, error, loading }}>
      {children}
    </NewsContext.Provider>
  );
};

export default NewsDataProvider;
