import { useContext } from "react";
import { NewsContext } from "../../context";
import NewsItem from "./NewsItem";
import NoFoundData from "./NoFoundData";

const NewsFeedBoard = () => {
  const { newsData, error, loading } = useContext(NewsContext);
  const { articles } = newsData;

  return (
    <main className='my-10 lg:my-14'>
      {loading?.state ? (
        <p>{loading.message}</p>
      ) : error ? (
        <p className='m-auto text-red-600'>Error: {error}</p>
      ) : articles?.length > 0 ? (
        <div className='container mx-auto grid grid-cols-12 gap-8'>
          {articles?.map((article) => (
            <NewsItem key={crypto.randomUUID()} article={article} />
          ))}
        </div>
      ) : (
        <NoFoundData />
      )}
    </main>
  );
};

export default NewsFeedBoard;
