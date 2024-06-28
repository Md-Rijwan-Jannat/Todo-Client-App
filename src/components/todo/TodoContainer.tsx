import { useState } from "react";
import { ITodo } from "@/redux/interface/TodoTypes";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useGetTasksQuery } from "@/redux/api/api";
import TaskSkeleton from "../skeleton/todo/TaskSkeleton";
import TaskPagination from "./Pagination";

const TodoContainer = () => {
  const { data: tasks, isLoading } = useGetTasksQuery(undefined);
  const [currentPage, setCurrentPage] = useState(1);
  const tasksPerPage = 6;

  if (isLoading) {
    return <TaskSkeleton />;
  }

  // Calculate indices for the current page
  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;

  // Get the current tasks for the page
  const currentTasks = tasks?.data.slice(indexOfFirstTask, indexOfLastTask);

  console.log(currentTasks);

  // Function to handle page change
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className="mb-5 md:mb-10 flex justify-between">
        <AddTodoModal />
        <TodoFilter />
      </div>
      <div className="bg-primary-gradient rounded-xl p-[5px] h-[517px] space-y-3">
        {currentTasks?.length ? (
          <div className="bg-white rounded-lg p-2 space-y-2 h-full">
            {currentTasks.map((item: ITodo) => (
              <TodoCard key={item.id} {...item} />
            ))}
          </div>
        ) : (
          <div className="bg-white p-5 flex justify-center items-center rounded-md">
            <p className="text-black text-center text-lg font-semibold">
              There is no task pending!
            </p>
          </div>
        )}
      </div>
      <TaskPagination
        tasksPerPage={tasksPerPage}
        totalTasks={tasks?.data.length || 0}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default TodoContainer;
