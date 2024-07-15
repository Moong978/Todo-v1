import React from 'react'


const TodoItemForm = ({todoItem, setTodoItem, todos, setTodos}) => {

  const handleAddTodo =()=>
    {
      setTodoItem(todoItem);

      const updateTodos = [...todos];
      updateTodos.push(todoItem);
      setTodos(updateTodos);
      setTodoItem("");
    }

  return (
    <div className='todo-input'>
      <input
        autoFocus
        required
        className = 'todo-input-item'
        type = 'text'
        placeholder='Enter a todo item'
        value = {todoItem}
        onChange={(e)=> setTodoItem(e.target.value)}
      />
      <button 
        type='button' 
        className='add-btn'
        onClick={handleAddTodo}
      >
        Add
      </button>
    </div>
  )
}



export default TodoItemForm
