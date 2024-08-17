import React from "react";

export default function UpdateForm({ onclick }) {
  return (
    <div className="flex items-center justify-between mt-4">
      <div className="flex items-center">
        <label htmlFor="taskdone" className="mr-2">
          Not Completed
        </label>
        <input
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
          type="button"
          className="bg-teal-500 hover:bg-teal-700 text-white  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
        >
          Update
        </button>
        <button
          type="button"
          className="bg-red-500 hover:bg-red-700 text-white  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
        >
          Xóa
        </button>
      </div>
    </div>
  );
}
