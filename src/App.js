
import { useState } from 'react';
import './App.css';
import InputComponet from './components/InputComponet';
import { ResultComponents } from './components/ResultComponents';

function App() {

  const [subject,setsubject] = new useState([]);
  const [hours,sethours]=new useState([]);
  
  console.log(hours);
  console.log(subject);


  return (
    <div className="App bg-green-100">
        <h1 class="text-3xl font-bold underline text-center">Study Planner</h1>
        <InputComponet  subject={setsubject} sethours={sethours} />

     {

      subject.map((sub,index)=>{
        return(<ResultComponents subject={sub} hour={hours[index]}/>)   
      })
     }

        
    </div>
  );
}

export default App;
