import{useState} from 'react'
import Employee from './Employee'
function App() {
  const [count,setCount] =useState(0);
 const addCount=()=>{
    setCount(count+1) 
  }
  let emp = [
  {name:"vishnu",age:28},
  {name:"pranav",age:24},
  {name:"jithin",age:21},
  {name:"prajith",age:26}
]
  return (
    <div className="App">
     <center><button onClick={addCount}>Add</button></center> 
    {
      emp.map((obj,index)=>
        
          <Employee key={index} {...obj} />
        
      )
    }
    </div>
  );
  
}

export default App;
