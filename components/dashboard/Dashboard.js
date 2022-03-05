import React, { useState } from 'react'
import './Dashboard.css'
import {useNavigate} from 'react-router-dom'

function Dashboard() {

    const navigate = useNavigate();

    const getData = () => {

        // some pieces of code here then execute navigate
        navigate('/');
    }

    const [text, setText] = useState("");
    const [array, setArray] = useState([]);
    
    function addText() {
        if (text === "")
            return;
        
        setArray((arr) => [...array, text]);
        setText("");
       
    }

    function del (index){
        array.splice(index, 1);
        setArray((arr)=>[...arr])
    }
  return (
      <div >

          <h1>Hello you have been routed to dashboard page</h1><br/>
          <button onClick={getData}>Navigate to home</button>
          <textarea placeholder='write some text here' id="textarea" value={text} onChange={(e) => setText(e.target.value)}></textarea><br />
          <button id='add-button'onClick={addText}>Add</button>

          <div className='dashboard-container'>
          {array.map((item, index) => (
               <div className='text-display' key={index}>
                  {item}
                  <button id="button-close" onClick={() => del(index)}>X</button>
                  
               </div>
              
              
          ))}
        </div>
         
    </div>
  )
}

export default Dashboard