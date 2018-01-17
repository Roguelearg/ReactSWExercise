import React from 'react';

const SearchBox = ({searchfield, searchChange, typeArray}) => {
  return (
    <div className='pa2'>
      <input
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        placeholder={'Search ' + typeArray}
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;
