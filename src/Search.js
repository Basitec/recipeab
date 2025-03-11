import React, { useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import './App.css'
import Sort from './Sort'
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
        e.preventDefault();
        // console.log(inputValue);
        if(inputValue){
          navigate(`/search?searchquery=${inputValue}`)

        }
        setInputValue('')
    }
  return (
    <div className='searching '>
        <form onSubmit={handleSearch} className='search ' role='search'>
          <input  type="search"
  name="search"
  placeholder="Search for your desired recipe"
  value={inputValue}
  onChange={handleChange}
  className='bg-black'
  aria-label="Search" />
        <input type="submit" value="Search" />
        </form>
<Outlet/>
    </div>
  )
}

export default Search
