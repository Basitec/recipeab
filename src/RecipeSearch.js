import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from'react-router-dom'
// import load from './loading.gif'
import spinn from './spinn.gif'
import spine from './spine.svg'



function RecipeSearch() {
    let baseUrl = 'https://dummyjson.com/recipes/search'
    let [data , setData] = useState([])
    let params = useParams()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(false);

    let id = params.id
    useEffect(()=>{
        setIsLoading(true)
        axios.get(`${baseUrl}?q=${id}`)
         // eslint-disable-next-line no-unused-expressions

         .then(res => res.data)
         .then(res2 =>{
            // if(res2.status === 200){
            //     console.log("couldn't find it");
                
            // }
            if (res2.recipes && res2.recipes.length > 0) {
              
              setData(res2.recipes)
              setIsLoading(false)
              console.log('Found');
              
              setError(false); // Reset error if data exists
            } else {
              console.log("couldn't find it");
              
              setIsLoading(false)
              setError(true); // Set error if no recipes found
              setData(null);
            }
         }).catch(err => {
          setError(true);
            
            console.log('Could not find what you were looking for');
            
         })
    }, [id])
  return (
    <>
  <Link to='/' className='goback'>Go back to recipe page</Link>
 
  {
    isLoading ? <><div className='load'> 
    <div className="loader"></div> 
    {/* <img src={spine} alt='loading'/> */}
    <p>Searching for the food...</p></div> </>:
   
    <>
     {
      error?<h1>Please don't be annoyed we don't have a recipe for {id} available</h1> :
    
     <div className='recipes'>
     {
        data.map((eachData, index) =>(
            <div key={index} className='eachFood'>
                <img src={eachData.image} alt={eachData.image}/>
                <div>
                <h2>{eachData.name}</h2>
                <h3>Difficulty : {eachData.difficulty}</h3>
                <h4>Cuisine : {eachData.cuisine}</h4>
                <Link to={`/eachrecipe/${eachData.id}`}>learn more</Link>
                 </div>
            </div>
        ))  || <h2>Recipe not found</h2>  // if data is empty, display a message to the user.  || is a logical OR operator in JavaScript. If the first operand is truthy, it returns that operand; otherwise, it returns the second operand.  In this case, it checks if data is empty before rendering the map.  If it is empty, it renders a message saying "Recipe not found".  Otherwise, it renders the mapped data.  If you want to display a different message when data
      }

    </div>
    // <h1></h1>
    }
    </>
  }
       </>
  )
}

export default RecipeSearch
