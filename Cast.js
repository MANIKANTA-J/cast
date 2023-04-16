import { useState } from "react"
import Draganddrop from "./Draganddrop"

export default function Cast(props){
    const castnames=[{label:'ram',label_te:'ram'},{label:'sai',label_te:'sai'}]
    const {inputdata,sendinputdata}=props
    const [casten,setcasten]=useState([])
    const [castenvalue,setcastenvalue]=useState('')
    const [castcharen,setcastcharen]=useState([])
    const [castcharenvalue,setcastcharenvalue]=useState('')
    const [castte,setcastte]=useState([])
    const [casttevalue,setcasttevalue]=useState('')
    const [castcharte,setcastcharte]=useState([])
    const [castchartevalue,setcastchartevalue]=useState('')
    const [finalcastname,setfinalcastname]=useState([])
    const [array1,setarray1]=useState('')
    const [searchtrue,setsearchtre]=useState(false)

    const selectsuggestion=(event,index)=>{
        const regex = /Create [A-Za-z]+/i;
        if(regex.test(event.target.innerText === false)){
        setcastenvalue(event.target.innerText)
        const idx=castnames.map((e,index)=>{if(e.label===event.target.innerText)
        {return index
        }})
        const index1=idx.filter(function( element ) {
            return element !== undefined;
         });
        console.log(index1[0])
        setcasttevalue(castnames[index1[0]].label_te)
        const array2=[...array1]
        array2.push(castnames[index1[0]])
        }else{
            setsearchtre(true)
        }
    }
    
    const sendcastenvalue=(data)=>{
        setcastenvalue(data)
    }
    const sendcasttevalue=(data)=>{
        setcasttevalue(data)
    }
    const sendcastcharen=(data)=>{
        setcastcharen(data)
    }
    const sendcastcharte=(data)=>{
        setcastcharte(data)
    }
    const sendcasten=(data)=>{
        setcasten(data)
    }
    const sendcastte=(data)=>{
        setcastte(data)
    }
    const sendcastchartevalue=(data)=>{
        setcastchartevalue(data)
    }
    const sendcastcharenvalue=(data)=>{
        console.log(data,'-------------------------')
        setcastcharenvalue(data)
    }
    const handlechangete=(value)=>{
        setcasttevalue(value)
    }
    const handlechangecharacterte=(value)=>{
        setcastchartevalue(value)
    }
    const handlechange=(value)=>{
        setcastenvalue(value)
    }
    const handlechangecharacter=(value)=>{
        setcastcharenvalue(value)
    }
    const handlechangefilter=(value)=>{
        setcastenvalue(value)
        //auto suggestions code//
        const finalname=[...castnames].map(e=>e.label)
    finalname.unshift(`Create ${castenvalue}`)
    setfinalcastname(finalname)
   }
    const okclick=()=>{
        const casten1=[...casten]
        casten1.push(castenvalue)
        console.log(casten1)
        setcasten(casten1)
        const castcharen1=[...castcharen]
        castcharen1.push(castcharenvalue)
        console.log(castcharen1)
        setcastcharen(castcharen1)
        const castas1=casten1.map((e,index)=>`${e} as ${castcharen1[index]}`)
        const inputdata1={...inputdata}
        inputdata1.inputFieldscast=castas1
        console.log(castas1)
        sendinputdata(inputdata1)
        setcastcharenvalue('')
        setcastenvalue('')
        const castte1=[...castte]
        castte1.push(casttevalue!==''?casttevalue:`(${castenvalue})*`)
        console.log(castte1)
        setcastte(castte1)
        const castcharte1=[...castcharte]
        castcharte1.push(castchartevalue!==''?castchartevalue:`(${castcharenvalue})*`)
        console.log(castcharte1)
        setcastcharte(castcharte1)
        const castaste1=castte1.map((e,index)=>`${e} as ${castcharte1[index]}`)
        inputdata1.inputFieldscastte=castaste1
        console.log(castaste1)
        sendinputdata(inputdata1)
        setcastchartevalue('')
        setcasttevalue('')
        setfinalcastname([])
    }
   
return (
    <div>
    <div>
        <label>Cast</label>
        <Draganddrop castas={inputdata.inputFieldscast}
        sendcasten={sendcasten}
        sendcastte={sendcastte}
        castaste={inputdata.inputFieldscastte}
        sendinputdata={sendinputdata}
        sendcastchartevalue={sendcastchartevalue} 
        sendcastcharenvalue={sendcastcharenvalue}
        inputdata={inputdata}
        casten={casten}
        castte={castte} 
        castcharen={castcharen} 
        castcharte={castcharte}
        sendcastcharen={sendcastcharen}
        sendcastcharte={sendcastcharte}
        sendcastenvalue={sendcastenvalue}
        sendcasttevalue={sendcasttevalue}
        />
       {!searchtrue && <input onChange={(event)=>handlechangefilter(event.target.value)} value={castenvalue}/>}
        { !searchtrue && <div>
        
        {finalcastname.map((item, index) => (
            <div  key={index}>
       <label  onClick={(event)=>selectsuggestion(event,index)}>
          {item}
          </label>    
          </div>
      ))}
      </div>}
    
       {searchtrue && <input onChange={(event)=>handlechange(event.target.value)} value={castenvalue}/>}
        <label>as</label>
        <input onChange={(event)=>handlechangecharacter(event.target.value)} value={castcharenvalue}/>
    </div>
    <div>
        <label>Cast_te</label>
        {inputdata.inputFieldscastte.length >=1 &&
            <div>
            {inputdata.inputFieldscastte.map((e,index)=><span>{e}</span>)}
        </div>}
        <input onChange={(event)=>handlechangete(event.target.value)} value={casttevalue}/>
        <label>as</label>
        <input onChange={(event)=>handlechangecharacterte(event.target.value)} value={castchartevalue}/>
    </div>
    <button type="button" disabled={!(castenvalue && castcharenvalue)} onClick={okclick}>ok</button>
    </div>
)
}