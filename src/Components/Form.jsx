export default function Form() {
  return (
    <form className="w-full max-w-sm">
      <div className="flex items-center border-b border-teal-500 py-2">
        <input
          type="text"
          name="todo"
          placeholder="Thêm một việc làm mới"
          className="appearance-none bg-transparent border-none w-full mr-3 py-1 px-2 leading-tight focus:outline-none text-white "
          autoFocus
        />
        <button
          type="submit"
          className="bg-teal-500 hover:bg-teal-700 text-white  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex-shrink-0"
        >
          Thêm mới
        </button>
      </div>
    </form>
  );
}
