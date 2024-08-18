import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GetApiKey from "./Action/GetApiKey";
import "./assets/App.css";
import Form from "./Components/Form";
export default function App() {
  const [apiKey, setApiKey] = useState("");
  const [todo, setTodos] = useState([]);
  // const [toastContent, setToast] = useState("idle");
  const getNewTodo = (newToDo) => {
    setTodos(newToDo);
  };
  const handleGetApiKey = (apiKey) => {
    setApiKey(apiKey);
  };
  console.log("form", apiKey);
  console.log("todo", todo);

  const handleSetToast = (toast) => {
    setToast(toast);
  };
  // useEffect(() => {
  //   if (toastContent != "idle") {
  //     toast(toastContent);
  //   }
  //   console.log(toastContent);
  // }, [toastContent, toast]);

  return (
    <div>
      <main className="__className_6a793a flex items-center justify-center p-8">
        <div className="container bg-slate-700 p-4 flex flex-col justify-center items-center">
          <h1 className="font-bold text-white">Welcome to Todo App!</h1>
          <Form
            apiKey={apiKey}
            onNewToDo={getNewTodo}
            onGetToast={handleSetToast}
          />
          <GetApiKey
            onDataSend={handleGetApiKey}
            newTodo={todo}
            onGetToast={handleSetToast}
          />
        </div>
      </main>
      <ToastContainer />
    </div>
  );
}
