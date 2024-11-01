import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './App.css'
// import load from './loading.gif'
import spinn from './spinn.gif'
import spine from './spine.svg'




function EachRecipe() {
    const params = useParams()
    const id = params.id
    let [eachRecipe, setEachRecipe] = useState({})
    let [isLoading, setIsLoading] = useState(false)
    let [ingredients,setIngredients] = useState([])
    let [instructions,setInstructions] = useState([])
    let baseUrl = "https://dummyjson.com/recipes"
    useEffect(()=>{
        setIsLoading(true)
        axios.get(`${baseUrl}/${id}`)
        .then(res => res.data)
        .then(res2 =>{
            // console.log(res2.ingredients);
        
            setIngredients(res2.ingredients)
            setInstructions(res2.instructions)
            setEachRecipe(res2)
            setIsLoading(false)
        })
    },[])
    // console.log(eachRecipe);
    
  return (
    <>
    {
        isLoading? <><div className='load'> <img src={spine} alt='loading'/><p>Getting more info...</p></div> </>: <>
         <div className='EachRecipe'>

{/* <h1>I am a boy</h1>
<h2>The recipe id is: {id}</h2> */}
<div className='desleft'>
  <Link to='/'>Go back to recipe page</Link>
  <img src={eachRecipe.image} alt={eachRecipe.image} />
    <h1>{eachRecipe.name}</h1>
  <h4>Ingredients needed to make this</h4>
<ol>
  {
      ingredients.map((eachIngredient, index) =>(
          <li key={index}>{eachIngredient}</li>
      ))

  }
  </ol>
  {/* <p>{eachRecipe.description}</p> */}
</div>
<div className='desright'>

  <h3>How to prepare:</h3>
  <ul>
      {
          instructions.map((eachInstructions, index) => (
              <li key={index}><span>Step {index+1} : </span>{eachInstructions}</li>
          ))
      }
  </ul>
  
  <p>Preparation time : {eachRecipe.prepTimeMinutes} minutes</p>
  <p>Cooking time : {eachRecipe.cookTimeMinutes} minutes</p>
  </div>

{/* {
  (eachRecipe.ingredients).map((eachIngredient, index) =>(
      <li>{eachIngredient}</li>
  //   <p key={index}></p>
  ))
} */}

{/* {
  JSON.stringify(eachRecipe)
}
{
  eachRecipe.id
} */}
</div>
        </>
    }
   </>
  )
}

export default EachRecipe
