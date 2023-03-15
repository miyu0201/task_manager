import React, { useState } from "react";
import "./App.css";
import InputBox from "./components/InputBox";
import TodoList from "./components/TodoList";
import { Todo } from "./model";

//React.FC can only apply on arrow function. Normal function maust define type of input and returning value
const App: React.FC = () => {
  const [todo, setTodo] = useState<string>(""); //define type of todo as string. or if it will have string or number,use  useState<string | number>
  const [todos, setTodos] = useState<Todo[]>([]); //use imported interface Todo which is an object, the type of todos will be an array of Todo

  console.log(todo);
  console.log(todos);
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
    }
    //empty input field
    setTodo("");
  };

  return (
    <div className="App">
      <span className="heading">Task Manager</span>
      <InputBox todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
