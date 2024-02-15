import { useContext } from "react";
import { NewsContext } from "../../context";
import formatDate from "../../utils/dateFormat";
import thumb from "../../assets/thumb.png";

const RightSideNews = () => {
  const { newsData, error, loading } = useContext(NewsContext);

  // Function to render error message
  const renderError = () => (
    <div className='col-span-12 mb-6'>
      <p className='text-red-500'>Error: {error.message}</p>
    </div>
  );

  return (
    <div className='col-span-12 self-start xl:col-span-4'>
      <div className='space-y-6 divide-y-2 divide-[#D5D1C9]'>
        {/* <!-- news item --> */}
        {loading?.state ? (
          <p>{loading.message}....</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          newsData.articles?.slice(0, 10).map((article, index) => (
            <div key={index} className='col-span-12 mb-6 md:col-span-8'>
              <img
                className='w-full'
                src={article?.urlToImage || thumb}
                alt='thumb'
              />
              {/* <!-- info --> */}
              <div className='col-span-12 mt-6 md:col-span-4'>
                <a href='#'>
                  <h3 className='mb-2.5 text-xl font-bold lg:text-[20px]'>
                    {article.title}
                  </h3>
                </a>
                <p className='text-base text-[#292219]'>
                  {article?.description}
                </p>
                <p className='mt-5 text-base text-[#94908C]'>
                  {" "}
                  {formatDate(article.publishedAt)}
                </p>
              </div>
            </div>
          ))
        )}
        {/* <!-- news item ends --> */}
      </div>
    </div>
  );
};

export default RightSideNews;