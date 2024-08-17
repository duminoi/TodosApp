import { useEffect, useState } from "react";
import ItemTodos from "./ItemTodos";
import config from "../lib/config";
export default function ListTodos({ newTodo, apiKey }) {
  const [listTodo, setListTodo] = useState([]);
  const getTodos = async () => {
    try {
      const response = await fetch(`${config.SERVER_API}/todos`, {
        headers: {
          "Content-type": "application/json",
          "X-Api-Key": apiKey,
        },
      });
      if (!response.ok) {
        throw new Error();
      }
      const { data } = await response.json();
      const todo = data.listTodo;
      console.log(todo);

      setListTodo([...todo]);
      return data;
    } catch (e) {
      setListTodo(e);
      return false;
    }
  };
  useEffect(() => {
    getTodos();
    console.log(listTodo);
  }, [newTodo]);
  return (
    <ul className="list-disc w-full max-w-3xl flex flex-col gap-4">
      {listTodo.map(({ _id: id, todo }, index) => {
        return <ItemTodos key={index} id={id} value={todo}></ItemTodos>;
      })}
    </ul>
  );
}
