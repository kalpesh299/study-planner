import React, { useState } from 'react'
import { ResultComponents } from './ResultComponents'


const InputComponet = ({subject,sethours}) => {
  

  const[inputsubject,setinputsubject]=useState();
  const[hour,sethour]=useState(0);
  

 

  const handelchange=(e)=>{
   
        setinputsubject(e.target.value);
       
        
     
  }
  const handlehourchange=(e)=>{
    // console.log(typeof(e.target.value))
    let num=parseInt(e.target.value)
    
    sethour(num);
  }

  const handleesumit=()=>{
   
  
    // console.log(inputsubject);
    subject((prvData)=>[inputsubject,...prvData]);//data we will add will be come to the first of the array
    sethours((prvData)=>[hour,...prvData])
    console.log("data added");
    setinputsubject("");
    sethour(0)
    
  }

       

 
  
  return (
    <div>
      <div className='flex justify-center items-center m-10' >
        <input type='text' placeholder='type anything' value={inputsubject}  onChange={handelchange} className='border-2 border-black m-3 p-2 rounded' />
        <input type='number' placeholder='0' className='border-2 border-black m-3 p-2 rounded' value={hour} onChange={handlehourchange} />
        <button type='submit' className='bg-red-200 border-2 border-black m-3 p-2 rounded' onClick={handleesumit} >Add Your Activity</button>
    </div>
   
   

    </div>
    
  )
}

export default InputComponet

