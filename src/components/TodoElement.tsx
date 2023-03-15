import React, { useState, useRef, useEffect } from "react";
import { Todo } from "../model";
import { AiFillEdit, AiFillDelete, AiFillCheckCircle } from "react-icons/ai";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const TodoElement = ({ todo, todos, setTodos }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editText, setEditText] = useState<string>(todo.todo);

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              isDone: !todo.isDone,
            }
          : todo
      )
    );
    console.log(todos);
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  //edit todo value
  const handleEdit = () => {
    if (!edit && !todo.isDone) {
      setEdit(!edit);
    } else {
      window.alert("The task is already done and cannot be edited!");
    }
  };

  //submit edited todo and update todos
  const handleSubmit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) =>
        id === todo.id
          ? {
              ...todo,
              todo: editText,
            }
          : todo
      )
    );
    setEdit(false);
  };

  //when click edit, automatelly make mouse focus on input field
  //the type of useRef is the type of input field
  const inputRef = useRef<HTMLInputElement>(null);
  //every time edit changes, mouse will focus on inputRef
  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    //if edit is on, show input box, else show todo value.
    //if todo is done, Cross it out, else, show it
    <form className="todo-element" onSubmit={(e) => handleSubmit(e, todo.id)}>
      {edit ? (
        <input
          ref={inputRef}
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          type="input"
          placeholder="edit task..."
          className="todo-element-text"
        />
      ) : todo.isDone ? (
        <s className="todo-element-text">{todo.todo}</s>
      ) : (
        <span className="todo-element-text">{todo.todo}</span>
      )}

      <div>
        <span className="icon" onClick={() => handleEdit()}>
          <AiFillEdit />
        </span>
        <span className="icon" onClick={() => handleDelete(todo.id)}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => handleDone(todo.id)}>
          <AiFillCheckCircle />
        </span>
      </div>
    </form>
  );
};

export default TodoElement;
