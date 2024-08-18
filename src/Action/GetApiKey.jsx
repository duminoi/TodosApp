// import React from 'react'

import { useEffect } from "react";
import { useState } from "react";
import ListTodos from "../Components/ListTodos";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function GetApiKey({ newTodo, onDataSend, onGetToast }) {
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
  }, [prompt]);

  useEffect(() => {
    if (toastContent != "idle") {
      toast(toastContent);
    }
  }, [toastContent, toast]);
  // useEffect(() => {
  //   if (typeof onGetToast === "function") {
  //     onGetToast(toastContent);
  //   }
  // }, [toastContent, onGetToast]);

  useEffect(() => {
    if (apiKey) {
      onDataSend(apiKey);
    }
  }, [apiKey, onDataSend]);
  return (
    <>
      {!apiKey ? (
        <div className=" py-2 px-3 bg-white  rounded w-full  ">
          Không có công việc nào
        </div>
      ) : (
        <ListTodos apiKey={apiKey} newTodo={newTodo}></ListTodos>
      )}
    </>
  );
}
