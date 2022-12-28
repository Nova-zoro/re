import React from 'react'
import TodoItem from './TodoItem';

function Todos(props){
  return (
    <div className="container">
      <h3 className='text-center my-3'>Todo List</h3>
      {props.tod.length === 0 ? "NO TODOS TO DISPLAY" :
      props.tod.map((todods)=>{ 
        return(
         <TodoItem todo1 = {todods} onDelete={props.onDelete}/> 
        )
      })}
    </div>
  )
}

export default Todos;