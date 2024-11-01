import React, { useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import './App.css'
import Sort from './Sort'
import Pagination from './Pagination'
function Search() {
    let [inputValue, setInputValue] = useState('')
    const navigate = useNavigate()
   const location = useLocation()
    
    let handleChange = (e)=>{
        setInputValue(e.target.value)
        // console.log(inputValue);
        // handleSearch()  // call the function when the input changes, not on every keystroke.  This will improve performance.
    }
    let handleSearch = (e)=>{
        // e.preventDefault();
        // console.log(inputValue);
        navigate(`/search/${inputValue}`)
        setInputValue('')
    }
  return (
    <div className='searching'>
        <form onSubmit={handleSearch} className='search'>
        <input type='text' value={inputValue} onChange={handleChange} placeholder='search for your desired recipe' required/>
        <button type='submit'>Search for any recipe</button>
        </form>
        {/* <Sort /> */}
<Outlet/>
{
  (location.pathname.includes('/search/')) ? "":
   <>
<Pagination/>
  </>
}
    </div>
  )
}

export default Search
