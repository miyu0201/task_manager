import React from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>; //setTodo is a dispatch function
  handleAdd: (e: React.FormEvent) => void;
}

//define type os props todo and setTodo as interface Props
//another way of define type
//const InputBox: React.FC<Props> = ({todo, setTodo}) => {...}
const InputBox = ({ todo, setTodo, handleAdd }: Props) => {
  return (
    <form className="input" onSubmit={handleAdd}>
      <input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        type="input"
        placeholder="enter task..."
        className="input-box"
      />
      <button className="btn-submit" type="submit">
        Add
      </button>
    </form>
  );
};

export default InputBox;
