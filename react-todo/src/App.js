import './App.css';
import Header from './components/Header';
import TodoItemForm from './components/TodoItemForm';
import {useState} from "react";
import TodoList from './components/TodoList';



function App() {
  const [todoItem, setTodoItem] = useState('');
  const [todos, setTodos] = useState(['']);

  return (
    <div className="App">
     <Header/>
     <TodoItemForm 
      todoItem = {todoItem}
      setTodoItem = {setTodoItem}
      todos = {todos}
      setTodos={setTodos}
     />
     <TodoList todos={todos}/>
    </div>
  );
}

export default App;
