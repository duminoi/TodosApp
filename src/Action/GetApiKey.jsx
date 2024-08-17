// import React from 'react'

import { useEffect } from "react";
import { useState } from "react";
import ListTodos from "../Components/ListTodos";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import { httpClient } from "../lib/client";

export default function GetApiKey() {
  const [apiKey, setApiKey] = useState("");
  const [prompt, setPrompt] = useState(false);
  const [toastContent, setToast] = useState("idle");

  const getApiKey = async (query) => {
    try {
      setToast("Vui lòng chờ");
      const res = await fetch(
        `https://api-todo-ebon.vercel.app/api/v1/api-key?email=${query}`
      );
      if (!res.ok) {
        throw new Error();
      }
      const emailKey = await res.json();
      console.log(emailKey);
      const { apiKey } = emailKey.data;
      setApiKey(apiKey);
      console.log("apiKey", apiKey);
      setToast("Truy cập thành công");
    } catch (e) {
      console.log(e);
      setApiKey(false);
      setToast("Truy cập thất bại,hãy reload lại");
    }
  };

  useEffect(() => {
    if (!prompt) {
      const userInputEmail = window.prompt(
        "Vui lòng nhập email:",
        "example@examplegmail.com"
      );
      getApiKey(userInputEmail);
    }
    setPrompt(true);
    if (toastContent != "idle") {
      toast(toastContent);
    }
  }, [prompt, toastContent]);

  return (
    <>
      {!apiKey ? (
        <div className=" py-2 px-3 bg-white  rounded w-full  ">
          Không có công việc nào
        </div>
      ) : (
        <ListTodos></ListTodos>
      )}
      <ToastContainer />
    </>
  );
}
