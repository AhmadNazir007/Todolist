import React,{useState} from 'react'

const TodoForm = ( {FormSubmit} ) => {

    const [inputdata, setinputdata]=useState("");

    const formsubmit =(event)=>{
        event.preventDefault();
        FormSubmit();
        setinputdata("");
    }

  return (
        <section className='form'>
            <form onSubmit={formsubmit}>
                <div>
                    <input type='text' 
                    className='todo-input' placeholder='Enter Todo' value={inputdata} 
                    onChange={(e)=> setinputdata(e.target.value)} 
                    />
                </div>
                <div>
                    <button> Add task </button>
                </div>
            </form>
            </section>
  )
}
export default TodoForm;