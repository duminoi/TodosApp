import { useEffect, useInsertionEffect, useState } from "react";
import UpdateForm from "../Action/UpdateForm";
import config from "../lib/config";
import ActionTodos from "./ActionTodos";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/* eslint-disable react/prop-types */
export default function ItemTodos({
  id,
  value,
  apiKey,
  onUpdateTodo,
  onDeleteTodo,
}) {
  const [buttonType, setButtonType] = useState("update");
  const [inputValue, setInputValue] = useState(`${value}`);
  const [status, setStatus] = useState(false);
  const [toastContent, setToatContent] = useState("idle");
  const [updateTodo, setUpdateTodo] = useState("");
  const [deleteTodo, setDeleteTodo] = useState("");

  const handleDeleteTodo = async (id, apiKey) => {
    try {
      console.log("vào dây");
      const res = await fetch(`${config.SERVER_API}/todos/${id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
          "X-Api-Key": apiKey,
        },
      });
      if (!res.ok) {
        throw new Error();
      }
      const { data } = await res.json();
      setDeleteTodo(data);
      setToatContent("Xóa thành công!!!");
    } catch (e) {
      setToatContent("Xóa thất bại!!!");
      setDeleteTodo(false);
    }
  };
  const handleGetUpdateTodo = (updateTodo) => {
    setUpdateTodo(updateTodo);
  };

  const handleChangeValue = (e) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
  };
  const handleEditClick = () => {
    if (buttonType == "edit") {
      setButtonType("update");
    } else {
      setButtonType("edit");
    }
    setStatus((pre) => !pre);
    console.log(buttonType);
  };
  useEffect(() => {
    if (typeof onUpdateTodo === "function") {
      onUpdateTodo(updateTodo);
    }
  }, [updateTodo, onUpdateTodo]);

  useEffect(() => {
    if (typeof onDeleteTodo === "function") {
      onDeleteTodo(deleteTodo);
    }
  }, [deleteTodo, onDeleteTodo]);

  useEffect(() => {
    handleEditClick();
  }, [updateTodo]);

  useEffect(() => {
    if (toastContent != "idle") {
      toast(toastContent);
    }
  }, [toast, toastContent]);
  return (
    <li className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
      <input
        onChange={(e) => {
          handleChangeValue(e);
        }}
        data-id={id}
        type="text"
        className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  "
        readOnly={status}
        value={status ? value : inputValue} //Nếu là readonly thì sẽ lấy value render ra từ api,nếu không thì lấy value từ bàn phím(với nội dung cũ)
      />
      {buttonType === "edit" ? (
        <ActionTodos
          apiKey={apiKey}
          idValue={id}
          onDeleteTodo={handleDeleteTodo}
          onclick={handleEditClick}
        />
      ) : (
        <UpdateForm
          onDeleteTodo={handleDeleteTodo}
          onUpdateTodo={handleGetUpdateTodo}
          onclick={handleEditClick}
          inputValue={inputValue}
          apiKey={apiKey}
          idValue={id}
        />
      )}
    </li>
  );
}
