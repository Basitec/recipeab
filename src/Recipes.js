import React, { useEffect, useLayoutEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import { Link } from 'react-router-dom'
// import load from './loading.gif'
import spinn from './spinn.gif'
import spine from './spine.svg'

function Recipes() {
    let [data, setData] = useState([])
    // let [skip, setSkip] = useState(0)
    // let [pagination, setPagination] = useState([])
    // let [eachPageno, setEachpageno] = useState([1])
    // const [currentPage, setCurrentPage] = useState(1); // Start at page 1
  // const [totalPages, setTotalPages] = useState(0);
  // let [total, setTotal] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
    // const [itemsPerPage, setItemsPerPage] = useState(0)
    let [link,setLink] = useState('https://dummyjson.com/recipes')
    // let numbers = []
    // for (let i = 1; i < 5; i++) {
    //     setEachpageno([...eachPageno,i])
    //     // console.log(i);
    //     // const element = array[i];
    //     console.log(eachPageno);
        
    // }
    // let handlePageChange = (pageNumber)=>{
    //     if(pageNumber === 2){
    //       setLink('https://dummyjson.com/recipes?skip=30')
    //     }
    //   setCurrentPage(pageNumber.number);
    //   console.log(pageNumber.number);
    // }
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
          // let total = res2.total
          // let currlimit = res2.limit
          // setItemsPerPage(res2.limit)
          // setTotal(res2.total)
          // let newTotalpages =Math.ceil(total/currlimit) 
          // setTotalPages(newTotalpages);
          // for (let i = 1; i <=newTotalpages; i++) {
          //   // const element = array[i];
          //   // setEachpageno([...eachPageno,i])
          //   numbers.push(i); 
          // }
      // setPagination(Array.from({ length: newTotalpages }, (_, i) => i + 1));
          
       
        //  console.log(numbers);
         
     
        // const fetchData = async ()=>{
        //   setIsLoading(true)
        //     try {
        //         const response = await fetch('https://dummyjson.com/recipes')
        //         const res = await response.json()
        //         setData(res.recipes)
        //           setIsLoading(false)
        //                 let total = res.total
        //                 let currlimit = res.limit
        //                 setItemsPerPage(res.limit)
        //                 setTotal(res.total)
        //                 let newTotalpages =Math.ceil(total/currlimit) 
        //                 setTotalPages(newTotalpages);
        //                 // for (let i = 1; i <= newTotalpages; i++) {
        //                 //     setPagination([...pagination,3])
        //                 //     numbers.push(i); 
        //                 // }
        //                 console.log(numbers);
        //             } catch (error) {
        //                 console.log(error);
      
                        
        //             }
        //         }
                // fetchData()
            // console.log(itemsPerPage);
            
            // const indexOfLastItem = currentPage * itemsPerPage;
            // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
            // const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
            
            // console.log(pagination);
            
            // let newTotalpages = total-itemsPerPage
            // for (let i = 1; i <=newTotalpages; i++) {
                // setPagination([...pagination,i+1])
                // numbers.push(i);
                
            // }
    // console.log(itemsPerPage);
    // console.log(pagination);
    
    
    // useEffect(()=>{
    //     fetch('https://dummyjson.com/recipes')
    //     .then(res => res.json())
    //     .then( res2 =>{
    //         console.log(res2); 
    //         // console.log(typeof(newTotalpages));
            
    //         // for (let i = 1; i <= 5; i++) {
    //         //     numbers.push(<p>{i}</p>)
    //         //     // console.log(numbers);
                
                
                
    //         // }
    //         // const itemsPerPage = res2.limit;
    //         // const indexOfLastItem = currentPage * itemsPerPage;
    //         // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    //         // const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
            
    //         setData(res2.recipes)
    //     });
    // }, [])

    // const handlePageChange = (pageNumber) => {
    //     setCurrentPage(pageNumber);
    //   };
    // const totalPages = Math.ceil(data.length / itemsPerPage);
    // console.log(totalPages);
    
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
        {/* <div className='Pagination'>
          {
            pagination.map((number, index)=> (
                <button key={index} onClick={()=>handlePageChange({number})}>{number}</button>
            ))
          }
                </div> */}
       
      
                {/* { */}
                    {/* // eslint-disable-next-line array-callback-return
                    // numbers.map((eachNumber)=>(
                    //   <p>{eachNumber}</p>
                    // ))
                  // } */}
        {/* {
            totalPages
        } */}
        {/* {
            numbers
        } */}
        {/* {
            eachPageno.map((number, index)=> (
                <>
                <p>{number}</p>
                </>
            ))
        } */}
        {/* {
            skip
        } */}
    </div>
  )
}

export default Recipes
