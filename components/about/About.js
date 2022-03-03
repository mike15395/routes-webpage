import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './About.css'
function About() {
 
    const [display, setDisplay] = useState("");
    console.log(display);
    const url = "https://jsonplaceholder.typicode.com/users";

    useEffect(()=>{
         getSampleData()
    }, [])

    async function getSampleData() {
        await axios.get(url).then((res)=>setDisplay(res)).catch((err)=>console.log(err));
    }


  return (
      <div className='about'>
          <h1>Hello you have been routed to about page </h1>
          <p>This is sample example of fetching data of users from API</p>

          <div className='display-container'>
                {display.data?.map((item,index) => (
                <div className='display-box' key={index}>
                    <p><strong>Name:</strong> {item.name}</p><br/>
                    <p><strong>Email:</strong> {item.email}</p><br/>
                    <p><strong>Phone:</strong> {item.phone}</p><br/>
                    <p><strong>Website:</strong> {item.website}</p>
                    </div>
                ))}
          </div>
          

    </div>
  )
}

export default About