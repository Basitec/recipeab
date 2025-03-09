import React, { useEffect, useLayoutEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import { Link } from 'react-router-dom'
import Paginate from './Paginate'
// import load from './loading.gif'
import spinn from './spinn.gif'
import spine from './spine.svg'

function Recipes() {
    let [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [page,setPage] = useState(1)
  const limit = 30
  const totalRecipes = 50
  const totalPages = Math.ceil(totalRecipes / limit);
  // let [link,setLink] = useState('https://dummyjson.com/recipes')
  useEffect(()=>{
    setIsLoading(true)
    try {
      const skip = (page-1)*limit
        axios.get(`https://dummyjson.com/recipes?limit=${limit}&skip=${skip}`)
         .then(res => res.data)
         .then(res2 =>{
          // console.log(res2.recipes);
          setData(res2.recipes)
          setIsLoading(false)
        })
      } catch (error) {
        console.log(error);
        
      }}, [page])
    
  return (
    <div>
      {
        isLoading? <div className='load'> 

    <div className="loader"></div> 
        {/* <img src={spine} alt='loading'/> */}
        <p>Loading some interesting recipes...</p></div> :
        <>
          <div className='recipes'>
        {
            data.map((eachData, index) =>(
                <div className='eachFood'>
                <img src={eachData.image} alt={eachData.image} key={index}/>
                <div>
                <h2 key={index+1}>Name: {eachData.name}</h2>
                <h3 key={index +2}>Difficulty : {eachData.difficulty}</h3>
                <h4 key={index +3}>Cuisine : {eachData.cuisine}</h4>
                <Link to={`/eachrecipe/${eachData.id}`}>learn more</Link>
                </div>
                </div>
            ))
        }
        </div>
         </>
        }
        <Paginate
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
        />
            </div>
  )
}

export default Recipes
