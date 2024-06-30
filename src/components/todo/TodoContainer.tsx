import { useState, useEffect } from "react";
import { ITodo } from "@/redux/interface/TodoTypes";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useGetTasksQuery } from "@/redux/api/api";
import TaskSkeleton from "../skeleton/todo/TaskSkeleton";
import TaskPagination from "./Pagination";

const TodoContainer = () => {
  const [priority, setPriority] = useState("");
  const { data: tasks, isLoading } = useGetTasksQuery(priority);
  const [currentPage, setCurrentPage] = useState(1);
  const tasksPerPage = 6;

  useEffect(() => {
    // Reset to the first page whenever the priority changes
    setCurrentPage(1);
  }, [priority]);

  if (isLoading) {
    return <TaskSkeleton />;
  }

  // Calculate indices for the current page
  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;

  // Get the current tasks for the page
  const currentTasks = tasks?.data.slice(indexOfFirstTask, indexOfLastTask);

  // Function to handle page change
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="mb-5 md:mb-8">
      <div className="mb-5 md:mb-10 flex justify-between">
        <AddTodoModal />
        <TodoFilter priority={priority} setPriority={setPriority} />
      </div>
      <div className="bg-primary-gradient rounded-xl p-[5px] h-full space-y-3 mb-5 md:mb-8">
        <div className="bg-white rounded-lg p-1 md:p-2 space-y-2 h-full w-full overflow-auto md:overflow-hidden">
          <div className="bg-gray-50 p-2 md:px-2 md:py-4 font-semibold rounded-md flex gap-3 justify-between items-center border mb-3 overflow-x-auto w-[600px] md:w-full">
            <p className="text-[8px] md:text-[16px]">☑️</p>
            <p className="text-[8px] md:text-[16px] flex-[2]">Title</p>
            <p className="text-[8px] md:text-[16px] flex-1">Priority</p>
            <p className="text-[8px] md:text-[16px] flex-1">Status</p>
            <p className="text-[8px] md:text-[16px] flex-[3]">Description</p>
            <p className="text-[8px] md:text-[16px] flex-1">Date</p>
            <p className="text-[8px] md:text-[16px] flex-1">Time</p>
            <p className="text-[8px] md:text-[16px] md:mr-11">Action</p>
          </div>
          {currentTasks?.length ? (
            <div className="overflow-x-auto w-[600px] md:w-full rounded-md">
              {currentTasks.map((item: ITodo) => (
                <TodoCard key={item._id} {...item} />
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
