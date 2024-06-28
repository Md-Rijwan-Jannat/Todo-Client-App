import TodoContainer from "@/components/todo/TodoContainer";

const Todo = () => {
  return (
    <div>
      <h2 className="bg-gray-100 text-gray-800 text-3xl font-semibold text-center rounded-md p-2 my-5 md:my-10 ">
        My Todo App
      </h2>
      <TodoContainer />
    </div>
  );
};

export default Todo;
