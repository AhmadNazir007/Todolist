import React, {useEffect, useState} from 'react'

const TodoDate = () => {

    const [datetime, setdatetime]=useState();

    useEffect(() => {
        const interval= setInterval(() => {

           const now= new Date();
           const formatedate =now.toLocaleDateString();
           const formatetime=now.toLocaleTimeString();

             setdatetime(`${formatedate} - ${formatetime}`);
         }, 1000);
 
     return () => clearInterval(interval);
 
     }, [])
     
  return (
    <h2 className='date-time'> {datetime} </h2>
  )
}

export default TodoDate