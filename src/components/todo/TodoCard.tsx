import { Icons } from "../ui/Icons";
import { Button } from "../ui/button";
import { ITodo } from "@/redux/interface/TodoTypes";
import EditTodoModal from "./EditTodoModal";
import {
  useDeleteTaskMutation,
  useUpdateTaskDataMutation,
} from "@/redux/api/api";
import { Loader2 } from "lucide-react";

const TodoCard = ({
  _id,
  title,
  description,
  priority,
  isCompleted,
  createdAt,
}: ITodo) => {
  const [deleteTask, { isLoading: isDeleting }] = useDeleteTaskMutation();
  const [updateTaskData, { isLoading: isUpdating }] =
    useUpdateTaskDataMutation();

  const formatDate = (dateString: Date | undefined): string => {
    if (typeof dateString === "undefined") {
      return "Invalid Date";
    }

    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options);
  };

  const formatTime = (dateString: Date | undefined): string => {
    if (typeof dateString === "undefined") {
      return "Invalid Date";
    }

    const options: Intl.DateTimeFormatOptions = {
      hour: "2-digit",
      minute: "2-digit",
    };

    const date = new Date(dateString);
    return date.toLocaleTimeString(undefined, options);
  };

  const toggleHandler = () => {
    const taskData = {
      title: title,
      description: description,
      priority: priority,
      isCompleted: !isCompleted,
    };
    const options = {
      id: _id,
      data: taskData,
    };

    updateTaskData(options);
  };

  return (
    <div className="bg-white p-2 md:p-2 rounded-md flex gap-3 justify-between items-center border space-y-2">
      {isUpdating ? (
        <Loader2 className="mt-1.5 size-2 md:size-3 animate-spin" />
      ) : (
        <input
          onClick={() => toggleHandler()}
          className="mt-1.5 size-2 md:size-3"
          type="checkbox"
          id="all"
          name="all"
          value="all"
          checked={isCompleted}
        />
      )}

      <p className="font-semibold text-[8px] md:text-[16px] flex-[2]">
        {title}
      </p>
      <div className="flex items-center gap-2 flex-1">
        <div
          className={`size-[10px] rounded-full 
            ${priority === "high" ? "bg-red-500" : ""} 
            ${priority === "medium" ? "bg-yellow-500" : ""} 
            ${priority === "low" ? "bg-green-500" : ""}`}
        ></div>
        <p className="text-[8px] md:text-[16px]">{priority}</p>
      </div>
      {isCompleted ? (
        <p className="text-green-500 text-[8px] md:text-[16px] flex-1">Done</p>
      ) : (
        <p className="text-red-500 text-[8px] md:text-[16px] flex-1">Pending</p>
      )}
      <p className="text-[8px] md:text-[16px] flex-[3]">{description}</p>
      <p className="text-[8px] md:text-[16px] flex-1">
        {formatDate(createdAt)}
      </p>
      <p className="text-[8px] md:text-[16px] flex-1">
        {formatTime(createdAt)}
      </p>
      <div className="flex flex-row gap-4">
        <Button
          onClick={() => deleteTask(_id)}
          size={"icon"}
          className="bg-red-500"
          disabled={isDeleting}
        >
          {isDeleting ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Icons.Trash className="size-4 md:size-6" />
          )}
        </Button>
        <EditTodoModal
          _id={_id}
          title={title}
          description={description}
          priority={priority}
        />
      </div>
    </div>
  );
};

export default TodoCard;
