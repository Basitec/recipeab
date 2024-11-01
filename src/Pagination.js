import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Pagination() {
    let [link,setLink] = useState('https://dummyjson.com/recipes')
   const location = useLocation()

    let [pagination, setPagination] = useState([])
    useEffect(()=>{
        axios.get(link)
        .then(res => res.data)
        .then(res2 => {
            let total = res2.total
          let currlimit = res2.limit
        let newTotalpages =Math.ceil(total/currlimit)
        setPagination(Array.from({ length: newTotalpages }, (_, i) => i + 1));
        })
    },[])
    // (location.pathname[1]) === '' || 
  return (
    <div className='Pagination'>
    {
      pagination.map((number, index)=> (
          <>
          {/* <button key={index}>{number}</button> */}
          <Link to={number === 1 ? '/' : `/${number}`}
        //   to={`/${number}`} 
          className={location.pathname === `/${number === 1 ? '' : number}` ? 'active' : ''}
          >{number}</Link>
          </>
      ))
    }
          </div>
  )
}

export default Pagination
// <button onClick={()=>setLink(`https://dummyjson.com/recipes?page=${number}`)} key={index}>{number}</button>
