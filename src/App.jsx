import { useEffect, useState } from "react";
import GetApiKey from "./Action/GetApiKey";
import "./assets/App.css";
import Form from "./Components/Form";
import ListTodos from "./Components/ListTodos";
export default function App() {
  const [apiKey, setApiKey] = useState("");
  const [todo, setTodos] = useState([]);
  const getNewTodo = (newToDo) => {
    setTodos(newToDo);
  };
  const handleGetApiKey = (apiKey) => {
    setApiKey(apiKey);
  };
  console.log("form", apiKey);
  console.log("todo", todo);

  return (
    <div>
      <main className="__className_6a793a flex items-center justify-center p-8">
        <div className="container bg-slate-700 p-4 flex flex-col justify-center items-center">
          <h1 className="font-bold text-white">Welcome to Todo App!</h1>
          <Form apiKey={apiKey} onNewToDo={getNewTodo} />
          <GetApiKey onDataSend={handleGetApiKey} newTodo={todo} />
        </div>
      </main>
    </div>
  );
}
