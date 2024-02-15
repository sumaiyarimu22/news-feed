import { useContext } from "react";
import { NewsContext } from "../../context";
import formatDate from "../../utils/dateFormat";

const LeftSideNews = () => {
  const { newsData, error, loading } = useContext(NewsContext);

  return (
    <div className='col-span-12 grid grid-cols-12 gap-6 self-start xl:col-span-8'>
      {loading?.state ? (
        <p>{loading.message}</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        newsData.articles?.map((article) => (
          <div
            key={article?.title}
            className='col-span-12 md:col-span-6 lg:col-span-4'
          >
            {/* <!-- info --> */}
            <div className='col-span-12 md:col-span-4'>
              <a href='#'>
                <h3 className='mb-2.5 text-xl font-bold lg:text-2xl'>
                  {article?.title}
                </h3>
              </a>
              <p className='text-base text-[#292219]'>{article?.description}</p>
              <p className='mt-5 text-base text-[#94908C]'>
                {" "}
                {formatDate(article.publishedAt)}
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default LeftSideNews;
