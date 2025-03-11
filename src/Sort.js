import React, { useState } from 'react'
// import { Outlet } from 'react-router-dom';÷

function Sort() {
    const [selectedSortOption, setSelectedSortOption] = useState('');
    const [selectedOrderOption, setSelectedOrderOption] = useState('');
    let handleSubmit = (e)=>{
        e.preventDefault();
        console.log(selectedSortOption,selectedOrderOption);
    }
    let handleChange = (e)=>{
        // console.log(selectedOption);
        setSelectedSortOption(e.target.value);
        // handleSubmit(e);
    }
    let handleChange2 = (e) =>{
        setSelectedOrderOption(e.target.value);
        // handleSubmit(e);
    }
  return (
    <div>
      <form onSubmit={handleSubmit} className='sort'>
        <label>Sort by: </label>
        <select value={selectedSortOption} onChange={handleChange}> 
            {/* <option value="" selected disabled>Sort by</option> */}
            <option value="name">name</option>
            <option value="cuisine">cuisine</option>
        </select>
        <label htmlFor="">Order:</label>
        <select value={selectedOrderOption} onChange={handleChange2}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
      </select>
        <input type="submit" value={"Go"} />
      </form>
      {/* <Outlet /> */}
      
    </div>
  )
}

export default Sort
