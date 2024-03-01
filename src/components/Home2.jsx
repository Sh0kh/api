import React, { useEffect, useState } from 'react'
import '../Style/Style.css'
function Home2() {
 useEffect(()=>{

 },[])
async function gettApi(){
  let fetchApi = await fetch("https://jsonplaceholder.typicode.com/users")
  let jsonApi = await fetchApi.json()
  console.log(jsonApi);
}

  return (
    <div className='home2'>
        <div className='container'>
            <div className='wrapper'>
              <div className='card'> 
                <h2>
                </h2>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Home2