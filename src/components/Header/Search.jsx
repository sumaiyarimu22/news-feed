import { useContext } from "react";
import searchImg from "../../assets/icons/search.svg";
import { SearchContext } from "../../context";
import { useDebounce } from "../../hooks";

const Search = () => {
  const { setSearchText } = useContext(SearchContext);

  const doSearch = useDebounce((term) => {
    setSearchText(term);
    console.log(term);
  }, 1000);

  const handleChange = (e) => {
    const value = e.target.value;
    doSearch(value);
  };

  return (
    <div className='flex items-center space-x-3 lg:space-x-8'>
      <input
        type='text'
        name='search'
        className='outline-none border-b border-gray-200 mr-2'
        onChange={handleChange}
        placeholder='Type your search here...'
      />
      <img src={searchImg} />
    </div>
  );
};

export default Search;
