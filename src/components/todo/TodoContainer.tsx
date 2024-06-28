import { useAppSelector } from "@/redux/hooks";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";

const TodoContainer = () => {
  const { tasks } = useAppSelector((state) => state.tasks);
  return (
    <div>
      <div className="mb-5 md:mb-10 flex justify-between">
        <AddTodoModal />
        <TodoFilter />
      </div>
      <div className="bg-primary-gradient rounded-xl p-[5px] h-full space-y-3">
        {tasks.length ? (
          <div className="bg-white rounded-lg p-2 space-y-2">
            {tasks.map((item) => (
              <TodoCard key={item.id} {...item} />
            ))}
          </div>
        ) : (
          <div className="bg-white p-5 flex justify-center items-center rounded-md">
            <p className="text-black text-center text-lg font-semibold">
              There is not task pending !
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoContainer;
