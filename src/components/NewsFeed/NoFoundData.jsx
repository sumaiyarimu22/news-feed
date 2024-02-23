import { useContext } from "react";
import { SearchContext } from "../../context";

const NoFoundData = () => {
  const { searchText } = useContext(SearchContext);

  return (
    <div
      className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative m-10'
      role='alert'
    >
      {!searchText ? (
        <>
          <strong className='mb-2.5 text-xl font-bold lg:text-2xl'>
            No news found!
          </strong>
          <span className='block sm:inline'>
            {" "}
            Make sure your api server is running properly.
          </span>
        </>
      ) : (
        <>
          <strong className='mb-2.5 text-xl font-bold lg:text-2xl'>
            No news found with the keyword {searchText}
          </strong>
          .
          <span className='block sm:inline'>
            {" "}
            Try searching with different keywords.
          </span>
        </>
      )}
    </div>
  );
};

export default NoFoundData;
