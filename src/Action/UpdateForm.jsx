import React, { useEffect, useState } from "react";
import config from "../lib/config";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function UpdateForm({
  onclick,
  idValue,
  apiKey,
  inputValue,
  onUpdateTodo,
  onDeleteTodo,
}) {
  const [checkBox, setCheckBox] = useState("");
  const [labelValue, setLabelValue] = useState("");
  const [updateTodo, setUpdateTodo] = useState("");
  const [toastContent, setToatContent] = useState("idle");
  const handleCheckbox = (e) => {
    setCheckBox(e.target.checked);
    console.log(checkBox);
  };

  const handleUpdateTodo = async (id, inputValue, apiKey) => {
    try {
      const res = await fetch(`${config.SERVER_API}/todos/${id}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
          "X-Api-Key": apiKey,
        },
        body: JSON.stringify({ todo: inputValue }),
      });
      if (!res.ok) {
        throw new Error();
      }
      const { data } = await res.json();
      console.log(data);
      setUpdateTodo(data);
      setToatContent("Cập nhật thành công!!!");
      console.log(updateTodo);
    } catch (e) {
      console.log(e);
      setUpdateTodo(false);
      setToatContent("Cập nhật thất bại,vui lòng Reload lại!!!");
    }
  };

  useEffect(() => {
    if (toastContent != "idle") {
      toast(toastContent);
    }
  }, [toast, toastContent]);

  useEffect(() => {
    if (checkBox == true) {
      setLabelValue("Completed");
    } else {
      setLabelValue("Not Completed");
    }
  }, [checkBox]);

  useEffect(() => {
    if (typeof onUpdateTodo === "function") {
      onUpdateTodo(updateTodo);
    }
  }, [updateTodo, onUpdateTodo]);
  return (
    <div className="flex items-center justify-between mt-4">
      <div className="flex items-center">
        <label htmlFor="taskdone" className="mr-2">
          {labelValue}
        </label>
        <input
          onClick={(e) => {
            handleCheckbox(e);
          }}
          type="checkbox"
          className="form-checkbox h-5 w-5 text-gray-600="
          id="taskdone"
        />
      </div>
      <div className="flex items-center">
        <button
          onClick={onclick}
          type="button"
          className="bg-orange-500 hover:bg-orange-700 text-white  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
        >
          Thoát
        </button>
        <button
          onClick={() => {
            handleUpdateTodo(idValue, inputValue, apiKey);
          }}
          type="button"
          className="bg-teal-500 hover:bg-teal-700 text-white  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
        >
          Update
        </button>
        <button
          onClick={() => {
            onDeleteTodo(idValue, apiKey);
          }}
          type="button"
          className="bg-red-500 hover:bg-red-700 text-white  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
        >
          Xóa
        </button>
      </div>
    </div>
  );
}
