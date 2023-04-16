import { useState } from "react";
import Cast from "./Cast";


function App() {
  let initialData={
    inputFieldscast:[],
    inputFieldscastte:[],
  }
  const [inputdata,setinputdata]=useState(initialData)
  const [totaldata,settotaldata]=useState([])
  const sendinputdata=(data)=>{
    setinputdata(data)
  }
  const submit=()=>{
    console.log('ok')
    console.log(inputdata,'inputdata after submit')
    let totaldata1=[...totaldata]
    totaldata1.push(inputdata)
    settotaldata(totaldata1)
    setinputdata(initialData)
  }
  return (
    <div className="App">
     <form>
      <Cast sendinputdata={sendinputdata} inputdata={inputdata}/>
     </form>
     <button type="button" onClick={()=>submit()}>submit</button>
    </div>
  );
}

export default App;
