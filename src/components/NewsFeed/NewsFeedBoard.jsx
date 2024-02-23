import { Fragment, useContext } from "react";
import { NewsContext } from "../../context";
import NewsWithImage from "./NewsWithImage";
import NewsWithText from "./NewsWithText";
import NoFoundData from "./NoFoundData";

const NewsFeedBoard = () => {
  const { newsData, error, loading } = useContext(NewsContext);
  const { articles } = newsData;
  console.log(newsData);
  return (
    <main className='my-10 lg:my-14'>
      {loading?.state ? (
        <p>{loading.message}</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : articles?.length > 0 ? (
        <div className='container mx-auto grid grid-cols-12 gap-8'>
          {articles?.map((article) => (
            <Fragment key={article?.title}>
              {article?.urlToImage ? (
                <NewsWithImage article={article} />
              ) : (
                <NewsWithText article={article} />
              )}
            </Fragment>
          ))}
        </div>
      ) : (
        <NoFoundData />
      )}
    </main>
  );
};

export default NewsFeedBoard;
