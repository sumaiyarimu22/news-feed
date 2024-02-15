import { useState } from "react";
import searchImg from "../../assets/icons/search.svg";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className='flex items-center space-x-3 lg:space-x-8'>
      <input
        type='text'
        className='outline-none border-b border-gray-200 mr-2'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder='Type your search here...'
      />
      <img src={searchImg} />
    </div>
  );
};

export default Search;
