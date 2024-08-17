export default function ActionTodos({ onclick }) {
  return (
    <div className="flex items-center justify-between mt-4">
      <div className="flex items-center">
        <button
          onClick={onclick}
          type="button"
          className="bg-teal-500 hover:bg-teal-700 text-white  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
        >
          Sửa
        </button>
        <button
          type="button"
          className="bg-red-500 hover:bg-red-700 text-white  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
        >
          Xóa
        </button>
      </div>
    </div>
  );
}
