import { useEffect, useState } from "react";
import config from "../lib/config";
import ListTodos from "./ListTodos";

export default function Form({ apiKey, onNewToDo }) {
  const [inputValue, setInputValue] = useState("");
  const [todo, setTodo] = useState({});
  const addTodos = async (inputValue, apiKey) => {
    try {
      const response = await fetch(`${config.SERVER_API}/todos`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          "X-Api-Key": apiKey,
        },
        body: JSON.stringify({ todo: inputValue }),
      });
      if (!response.ok) {
        throw new Error();
      }
      const data = await response.json();
      setTodo(data);
      return data;
    } catch (e) {
      console.log(e);
      return false;
    }
  };
  const handleChangeInput = (e) => {
    setInputValue(e.target.value);
  };
  useEffect(() => {
    if (todo.data) {
      onNewToDo(todo.data);
    }
  }, [todo]);
  return (
    <form className="w-full max-w-sm">
      <div className="flex items-center border-b border-teal-500 py-2">
        <input
          onChange={(e) => {
            handleChangeInput(e);
          }}
          type="text"
          name="todo"
          placeholder="Thêm một việc làm mới"
          className="appearance-none bg-transparent border-none w-full mr-3 py-1 px-2 leading-tight focus:outline-none text-white "
          autoFocus
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            addTodos(inputValue, apiKey);
          }}
          type="submit"
          className="bg-teal-500 hover:bg-teal-700 text-white  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex-shrink-0"
        >
          Thêm mới
        </button>
      </div>
    </form>
  );
}
