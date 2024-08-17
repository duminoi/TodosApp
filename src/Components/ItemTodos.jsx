import { useState } from "react";
import UpdateForm from "../Action/UpdateForm";
import ActionTodos from "./ActionTodos";

/* eslint-disable react/prop-types */
export default function ItemTodos({ id, value }) {
  const [buttonType, setButtonType] = useState("edit");
  const handleEditClick = () => {
    if (buttonType == "edit") {
      setButtonType("update");
    } else {
      setButtonType("edit");
    }
    console.log(buttonType);
  };
  return (
    <li className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
      <input
        data-id={id}
        type="text"
        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  "
        readOnly
        value={value}
      />
      {buttonType === "edit" ? (
        <ActionTodos onclick={handleEditClick} />
      ) : (
        <UpdateForm onclick={handleEditClick} />
      )}
    </li>
  );
}
