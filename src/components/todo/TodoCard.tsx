import { useAppDispatch } from "@/redux/hooks";
import { Icons } from "../ui/Icons";
import { Button } from "../ui/button";
import { removeTask, toggleComplete } from "@/redux/features/todoSlice";
import { ITodo } from "@/redux/interface/TodoTypes";

const TodoCard = ({ id, title, description, isCompleted }: ITodo) => {
  const dispatch = useAppDispatch();

  const toggleHandler = () => {
    dispatch(toggleComplete(id));
  };

  return (
    <div
      className=" bg-white p-3 rounded-md flex gap-3 justify-between items-center border space-y-2
    "
    >
      <input
        onClick={() => toggleHandler()}
        className="mt-1.5"
        type="checkbox"
        id="all"
        name="all"
        value="all"
      />
      <p className="font-semibold">{title}</p>
      {/* <p>Time</p> */}
      {isCompleted === false ? (
        <p className="text-red-500">pending</p>
      ) : (
        <p className="text-green-500">Done</p>
      )}

      <p>{description}</p>
      <div className="flex flex-col md:flex-row gap-4">
        <Button onClick={() => dispatch(removeTask(id))} className="bg-red-500">
          <Icons.Trash className="size-6"></Icons.Trash>
        </Button>
        <Button className="bg-indigo-600">
          <Icons.Edit className="size-6"></Icons.Edit>
        </Button>
      </div>
    </div>
  );
};

export default TodoCard;
