import ItemTodos from "./ItemTodos";
const list = [
  {
    value: "test 1",
  },
  {
    value: "test 2",
  },
];
export default function ListTodos() {
  console.log();

  return (
    <ul className="list-disc w-full max-w-3xl flex flex-col gap-4">
      {list.map((item, index) => {
        return <ItemTodos key={index} {...item}></ItemTodos>;
      })}
    </ul>
  );
}
