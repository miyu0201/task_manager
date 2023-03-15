import React from "react";
import { Todo } from "../model";
import TodoElement from "./TodoElement";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoList = ({ todos, setTodos }: Props) => {
  return (
    <div className="container">
      <div className="todos">
        <p className="todos-heading">Active Tasks</p>
        {todos.map((todo) =>
          todo.isDone === false ? (
            <TodoElement
              todo={todo}
              key={todo.id}
              todos={todos}
              setTodos={setTodos}
            />
          ) : (
            ""
          )
        )}
      </div>
      <div className="completed">
        <p className="todos-heading">Completed Tasks</p>
        {todos.map((todo) =>
          todo.isDone ? (
            <TodoElement
              todo={todo}
              key={todo.id}
              todos={todos}
              setTodos={setTodos}
            />
          ) : (
            ""
          )
        )}
      </div>
    </div>
  );
};

export default TodoList;
