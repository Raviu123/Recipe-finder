import React, { useEffect, useState } from 'react';
import searchimg from '../assets/search.png';

const SearchBar = ({SetsearchInput}) => {
  const [input, setInput] = useState('');


  function search() {
    SetsearchInput(input)
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
        SetsearchInput(input)
    }
  }

  

  return (
    <div className='mt-4 h-14 flex items-center justify-center'>
      <input
        className="shadow-md w-[400px] focus:border-yellow-400 focus:border-2 border-2 border-yellow-400 h-10 rounded-l-xl outline-none"
        type="text" value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown} // Pass the function reference
      />
      <button onClick={search} className='shadow-md w-10 h-10 bg-yellow-400 rounded-r-xl'>
        <img className='p-2' src={searchimg} alt="Search" />
      </button>
    </div>
  );
};

export default SearchBar;
