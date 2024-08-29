import React, { useState} from 'react'
import  './Todo.css'
import TodoForm from './TodoForm';
import Todolist from './Todolist';
import TodoDate from './TodoDate';




const Todo = () => {

    const [arrydata, setarrydata]= useState([]);
    

    const formsubmit=(inputdata)=>{
        if(!inputdata) return;
        if(arrydata.includes(inputdata)) return;
        setarrydata((prevdata) => [...prevdata,inputdata]);
    }

    const handledelete = (value) =>{
       const updatelist =arrydata.filter((data) => data !== value )
       setarrydata(updatelist);
    }

  return (
    <>
    <section className='todo-container'>

      <header>
        <h1> Todo List </h1>
        <TodoDate />
      </header>

          <TodoForm  FormSubmit={formsubmit} />

            <section className='myUnOrdList'>
              <ul className='todo-list'>
              {
                arrydata.map((currele, index)=>{
                    return(
                        <Todolist key={index} data={currele} HandleDelete={handledelete} />
                    )
                })
              }
              </ul>
            </section>
       
        </section>
    </>
  )
}

export default Todo