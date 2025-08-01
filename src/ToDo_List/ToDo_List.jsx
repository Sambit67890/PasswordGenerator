import React from 'react'
import { useState } from 'react'
import './ToDo_List.css';

const ToDo_List = () => {
     let [ToDo_List, setToDo_List] = useState([]);
     let saveToDoList = (e) => {
            let toName=e.target.toName.value;
            if(!ToDo_List.includes(toName)){
                let finalDolist=([...ToDo_List, toName]);
                setToDo_List(finalDolist);
            }else{
                alert("Already exists");
            }
            e.preventDefault();
     }

     let list=ToDo_List.map((item, index) => {
        return(
            <ToDo_ListItems value={item} indexNumber={index} ToDo_List={ToDo_List} setToDo_List={setToDo_List}/>
        )
     }) 
  return (
    <div className='todo-list'>
       <h1>To Do List</h1>
         <form onSubmit={saveToDoList}>
                <input type="text" name="toName" placeholder='Enter To Do' required/>
                <button type='submit'>Add</button>
        </form>
        <div className='todo-list-items'>
            <ul>
              {list}
            </ul>
        </div>
    </div>
  )
}

export default ToDo_List

function ToDo_ListItems({value,indexNumber, ToDo_List, setToDo_List}) {
    let [status,setStatus]=useState(false);
    let deleteRow=()=>{
       let finalData=ToDo_List.filter((value,i)=>i!==indexNumber)
       setToDo_List(finalData);
    }
    let checkStatus=()=>{
        setStatus(!status);
    }
    return(
        <li onClick={checkStatus}> {indexNumber+1} {value}<span onClick={deleteRow}>&times;</span></li>
    )  
}