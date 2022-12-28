import React from 'react'

function TodoItem(props) {
  return (
    <>
      <h4>{props.todo1.title}</h4>
      <p>{props.todo1.desc}</p>
      <button className='btn btn-sm btn-danger' onClick={() => props.onDelete(props.todo1)}>Delete</button>
    </>
  )
}

export default TodoItem;