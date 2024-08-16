import ActionTodos from "./ActionTodos";

/* eslint-disable react/prop-types */
export default function ItemTodos({ value }) {
  return (
    <li className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
      <input
        type="text"
        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  "
        readOnly
        value={value}
      />
      <ActionTodos />
    </li>
  );
}
