import React from 'react'

const TodoList = (props) => {
  return (
    <div className='todo-list-item'>
      {
        props.todos.map((item,index) => {
          return(
          <p key={index}>{item}</p>
          )
        })
      }
    </div>
  )
}

export default TodoList
