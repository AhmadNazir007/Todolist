import React from 'react'
import { IoMdCheckmarkCircle } from "react-icons/io";
import { MdDelete } from "react-icons/md";

const Todolist = ({ key, currele, HandleDelete}) => {

  return (
    <li key={key} className='todo-item'>
    <span> {currele} </span>
    <button className='check-btn'><IoMdCheckmarkCircle /></button>
    <button className='delete-btn' onClick={(data)=> HandleDelete(data)}> <MdDelete /> </button>
  </li>
  )
}

export default Todolist