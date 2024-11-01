import React, { useEffect, useState } from 'react'

function User() {
    let [users, setUsers] = useState([])
    let number = 5
    let numbers = []
    useEffect(()=>{
      setUsers(Array.from({ length: number }, (_, i) => i + 1));
      // for (let i = 1; i <=number; i++) {
      //   numbers.push(i)
        
      //   setUsers((prevUser ) => [...prevUser , i]);
      //   // console.log(users)
  
      //   // const element = array[i];
        
      // }
    }, [])
    // console.log(numbers)
    console.log(users);
    
  return (
    <div>
      <h1>I am a boy</h1>
      {
        users.map((eachNum)=>{
          return <p key={eachNum}>{eachNum}</p>
        })
      }
      {/* {
        // eslint-disable-next-line array-callback-return
        numbers.map((eachNumber)=>(
          <p>{eachNumber}</p>
        ))
      } */}
    </div>
  )
}

export default User
