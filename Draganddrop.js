import React, { useRef } from 'react'; 
 
const Draganddrop = (props) => {
  const {castas,sendinputdata,
    inputdata,castaste,
    sendcastcharenvalue,sendcastchartevalue,
    sendcasten,sendcastte,
    casten,castte,
    sendcastenvalue,sendcasttevalue,
    castcharen,castcharte,
    sendcastcharen,sendcastcharte}=props
  const dragItem = useRef();
  const dragOverItem = useRef();
  
 
  const dragStart = (e, position) => {
    dragItem.current = position;
    console.log(e.target.innerHTML);
  };
 
  const dragEnter = (e, position) => {
    dragOverItem.current = position;
    console.log(e.target.innerHTML);
  };
 
const drop = (e) => {
    const copycastasItems = [...castas];
    const dragItemContent = copycastasItems[dragItem.current];
    copycastasItems.splice(dragItem.current, 1);
    copycastasItems.splice(dragOverItem.current, 0, dragItemContent);
//
    const copycastasteItems = [...castaste];
    const dragItemContentte = copycastasteItems[dragItem.current];
    copycastasteItems.splice(dragItem.current, 1);
    copycastasteItems.splice(dragOverItem.current, 0, dragItemContentte);
//
    const casten1=[...casten]
    const dragcasten=casten1[dragItem.current]
    casten1.splice(dragItem.current, 1);
    casten1.splice(dragOverItem.current, 0, dragcasten);
    sendcasten(casten1)
//
    const castte1=[...castte]
    const dragcastte=castte1[dragItem.current]
    castte1.splice(dragItem.current, 1);
    castte1.splice(dragOverItem.current, 0, dragcastte);
    sendcastte(castte1)
 //
    const castcharen1=[...castcharen]
    const dragcastcharen=castcharen1[dragItem.current]
    castcharen1.splice(dragItem.current,1)
    castcharen1.splice(dragOverItem.current,0,dragcastcharen)
    sendcastcharen(castcharen1)
 //
    const castcharte1=[...castcharte]
    const dragcastcharte=castcharte1[dragItem.current]
    castcharte1.splice(dragItem.current,1)
    castcharte1.splice(dragOverItem.current,0,dragcastcharte)
    sendcastcharen(castcharte1)
 //
    dragItem.current = null;
    dragOverItem.current = null;
    const inputdata1={...inputdata}
    inputdata1.inputFieldscast=copycastasItems
    inputdata1.inputFieldscastte=copycastasteItems
    sendinputdata(inputdata1)
  };
  const remove=(event,index)=>{
    const castas1=[...castas]
    const castaste1=[...castaste]
    castas1.splice(index,1)
    castaste1.splice(index,1)
    const inputdata1={...inputdata}
    inputdata1.inputFieldscast=castas1
    inputdata1.inputFieldscastte=castaste1
    sendinputdata(inputdata1)
    const casten1=[...casten]
    casten1.splice(index, 1);
    sendcasten(casten1)
    const castte1=[...castte]
    castte1.splice(index, 1);
    sendcastte(castte1)
    const castcharen1=[...castcharen]
    castcharen1.splice(index,1)
    sendcastcharen(castcharen1)
    const castcharte1=[...castcharte]
    castcharte1.splice(index,1)
    sendcastcharte(castcharte1)
  }

  const editcast=(event,index)=>{
    const castas1=[...castas]
    const castaste1=[...castaste]
    const castcharen1=[...castcharen]
    const castcharte1=[...castcharte]
    const casten1=[...casten]
    const castte1=[...castte]
    sendcastenvalue(casten1[index])
    sendcasttevalue(castte1[index])
    console.log(casten1[index],castte1[index])
    sendcastcharenvalue(castcharen1[index])
    sendcastchartevalue(castcharte1[index])
    console.log(castcharte1,index,'castcharte1')
    castas1.splice(index,1)
    castaste1.splice(index,1)
    casten1.splice(index,1)
    castte1.splice(index,1)
    castcharen1.splice(index,1)
    castcharte1.splice(index,1)
    sendcasten(casten1)
    sendcastte(castte1)
    const inputdata1={...inputdata}
    inputdata1.inputFieldscast=castas1
    inputdata1.inputFieldscastte=castaste1
    sendinputdata(inputdata1)

  }
 
  return (
    <>
    {
    castas&&
    castas.map((item, index) => (
      <div style={{display:'flex'}}
        onDragStart={(e) => dragStart(e, index)}
        onDragEnter={(e) => dragEnter(e, index)}
        onDragEnd={drop}
        key={index}
        draggable>
            <div style={{display:'flex' ,border:'1px solid black',borderRadius:'1rem'}} 
            >
<div onClick={(event)=>editcast(event,index)}>
          {item}
</div>     
          <button onClick={(event)=>remove(event,index)} type='button'>X</button>
          </div>
      </div>
      ))}
    </>
  );
};
export default Draganddrop;