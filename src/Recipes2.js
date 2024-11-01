import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import spine from './spine.svg'


function Recipes2() {
   let [data, setData] = useState([])
   const [isLoading, setIsLoading] = useState(false) 
   let [link,setLink] = useState('https://dummyjson.com/recipes?skip=30') 
   const location = useLocation()
   useEffect(()=>{
    setIsLoading(true)
    try {
      axios.get(link)
       .then(res => res.data)
       .then(res2 =>{
        // console.log(res2.recipes);
        setData(res2.recipes)
        setIsLoading(false)
      })
    } catch (error) {
      console.log(error);
      
    }}, [])
  return (
    <div>
      {
        isLoading? <div className='load'> <img src={spine} alt='loading'/><p>Loading some interesting recipes...</p></div> :
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
        
    </div>
  )
}

export default Recipes2
