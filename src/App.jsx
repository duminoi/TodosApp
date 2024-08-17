import GetApiKey from "./Action/GetApiKey";
import "./assets/App.css";
import Form from "./Components/Form";
import ListTodos from "./Components/ListTodos";
export default function App() {
  return (
    <div>
      <main className="__className_6a793a flex items-center justify-center p-8">
        <div className="container bg-slate-700 p-4 flex flex-col justify-center items-center">
          <h1 className="font-bold text-white">Welcome to Todo App!</h1>
          <Form />
          <GetApiKey />
          {/* <ListTodos /> */}
        </div>
      </main>
    </div>
  );
}
