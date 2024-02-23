import { formatDate } from "../../utils/dateFormat";

const NewsItem = ({ article }) => {
  return (
    <div className='col-span-12 md:col-span-6 lg:col-span-4'>
      <div className='col-span-12 lg:col-span-4'>
        <a href={article?.url} target='_blank'>
          <h3 className='mb-2.5 text-2xl font-bold lg:text-[28px]'>
            {article?.title}
          </h3>
        </a>
        <p className='text-base text-[#5C5955]'>{article?.description}</p>
        <p className='mt-5 text-base text-[#5C5955]'>
          {formatDate(article?.publishedAt)}
        </p>
      </div>
      {article?.urlToImage && (
        <div className='col-span-12 lg:col-span-8'>
          <img
            className='w-full'
            src={article?.urlToImage}
            alt={article?.title}
          />
          <p className='mt-5 text-base text-[#5C5955]'>
            {article?.source?.name}
          </p>
        </div>
      )}
    </div>
  );
};

export default NewsItem;
