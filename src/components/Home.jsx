import React, { useState } from 'react'
import { useEffect } from 'react';
import '../Style/Style.css'
function Home() {
    const [user, setUser] = useState([])
useEffect(()=>{
    gettApi()
},[])
    async function gettApi(){
        let fetchData = await fetch("https://jsonplaceholder.typicode.com/users")
        let jsonData = await fetchData.json()
        setUser(jsonData)
    }
  return (
    <div className='home'>
        <div className='container'>
        <div className='wrapper'>
            {user?.map((item)=>{
                return(
                    <div className='card' key={item.id}>
                <h2>
                    {item.name}
                </h2>
                <h3>
                    {item.email}
                </h3>
                <h3>
                    {item.address.zipcode}
                </h3>
            </div>
                )
            })}
            <div className='card2 card'>
                <h2>
                    {user.length > 0 ? user[0].name : "Loadin..."}
                </h2>
                <h3>
                    {user.length > 0 ? user[0].email : "Loading..."}
                </h3>
                <h3>
                    {user.length > 0 ? user[0].address.zipcode : "Loading..."}
                </h3>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Home