import React, { useEffect, useLayoutEffect, useState } from 'react'
import axios from 'axios'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import './App.css'
import { Link } from 'react-router-dom'
import Paginate from './Paginate'
// import load from './loading.gif'
import spinn from './spinn.gif'
import './index.css'
import styles from './h2.module.css'
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
          <div className='recipes max-sm:grid-cols-1'>
        {
            data.map((eachData, index) =>(
                <Link to={`/eachrecipe/${eachData.id}`} className='eachFood '>
                  <div
                  style={{
                    all:"revert",
                    backgroundImage:`url(${eachData.image})`,
                    width:"8em",
                    height:"7em",
                    backgroundSize:"contain",
                    borderRadius:"999px",
                    backgroundPosition:"center",
                    margin:"0 10px"
                    // borderRadius:"5px",
                    // border:"1px solid black",
                  }}
                  ></div>
                {/* <img 
                src={eachData.image} 
                className={styles.img} 
                alt={eachData.image} key={index}/> */}
                <div className='text-white'>
                <h2 key={index+1} className={styles.h2} >Name: {eachData.name}</h2>
                {/* <h2 key={index +2}>Difficulty : {eachData.difficulty}</h2> */}
                <h2 key={index +3} className={styles.h2} >Cuisine : {eachData.cuisine}</h2>
                <h2 className={styles.h2} >Rating <Stack><Rating name="half-rating-read" defaultValue={eachData.rating} precision={0.5} readOnly /></Stack></h2>
                {/* <Link to={`/eachrecipe/${eachData.id}`}>learn more</Link> */}
                </div>
                </Link>
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
        {/* <div className='w-[5em] h-[5em] bg-white rounded-full'></div> */}
            </div>
  )
}

export default Recipes
