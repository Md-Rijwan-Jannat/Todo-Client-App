import TodoContainer from "@/components/todo/TodoContainer";

const Todo = () => {
  return (
    <div>
      <h2 className="text-gray-800 text-3xl font-semibold text-center my-5 md:my-10 ">
        My Todo App
      </h2>
      <TodoContainer />
    </div>
  );
};

export default Todo;
