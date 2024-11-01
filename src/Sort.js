import React, { useState } from 'react'
import { Outlet } from 'react-router-dom';

function Sort() {
    const [selectedOption, setSelectedOption] = useState('');
    let handleSubmit = (e)=>{
        e.preventDefault();
    }
    let handleChange = (e)=>{
        console.log(selectedOption);
        setSelectedOption(e.target.value);
        // handleSubmit(e);
    }
  return (
    <div>
      {/* <form onSubmit={handleSubmit} className='sort'> */}
        <label>Sort by: </label>
        <select value={selectedOption} onChange={handleChange}> 
            {/* <option value="" selected disabled>Sort by</option> */}
            <option value="name">name</option>
            <option value="cuisine">cuisine</option>
        </select>
        <p></p>
      {/* </form> */}
      {/* <Outlet /> */}
      {/* <select>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
      </select> */}
    </div>
  )
}

export default Sort
