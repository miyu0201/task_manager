import React, { useReducer } from "react";
import { Todo } from "./model";

type Actions =
  | { type: "add"; payload: string } //need todo.todo, type is string
  | { type: "remove"; payload: number } //remove needs todo.id, so type is number
  | { type: "done"; payload: number }; //done needs todo.id,so type is number

const todoReducer = (state: Todo[], action: Actions) => {
  switch (action.type) {
    case "add":
      return [
        ...state,
        { id: Date.now(), todo: action.payload, isDone: false },
      ];

    case "remove":
      return state.filter((todo) => todo.id !== action.payload);

    case "done":
      return state.map((todo) =>
        todo.id === action.payload
          ? {
              ...todo,
              isDone: !todo.isDone,
            }
          : todo
      );

    default:
      return state;
  }
};

const ReducerExample = () => {
  const [state, dispatch] = useReducer(todoReducer, []);

  return <div></div>;
};
