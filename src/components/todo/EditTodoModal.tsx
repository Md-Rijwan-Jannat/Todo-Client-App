import { FormEvent, useState } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { DialogClose } from "@radix-ui/react-dialog";
import { Icons } from "../ui/Icons";
import { useAppDispatch } from "@/redux/hooks";
import { editTask } from "@/redux/features/todoSlice";
import { ITodo } from "@/redux/interface/TodoTypes";

const EditTodoModal = ({ id, title, description, credit }: ITodo) => {
  const [taskTitle, setTaskTitle] = useState(title || "");
  const [taskDescription, setTaskDescription] = useState(description || "");
  const [taskCredit, setTaskCredit] = useState(credit?.toString() || "");
  const dispatch = useAppDispatch();

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    const editDetails: ITodo = {
      id: id,
      title: taskTitle,
      description: taskDescription,
      credit: parseInt(taskCredit),
    };

    dispatch(editTask(editDetails));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-indigo-600">
          <Icons.Edit className="size-6" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit task</DialogTitle>
          <DialogDescription>
            Please update the details of the task you want to complete.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit}>
          <div className="flex flex-col items-start justify-start gap-3">
            <div className="grid grid-cols-4 items-center gap-4 w-full">
              <Label htmlFor="title" className="text-left">
                Title
              </Label>
              <Input
                id="title"
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
                placeholder="Enter task title"
                className="col-span-3 w-full"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4 w-full">
              <Label htmlFor="description" className="text-left">
                Description
              </Label>
              <Input
                id="description"
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
                placeholder="Enter task description"
                className="col-span-3 w-full"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4 w-full">
              <Label htmlFor="credit" className="text-left">
                Credit
              </Label>
              <Input
                id="credit"
                type="number"
                value={taskCredit}
                onChange={(e) => setTaskCredit(e.target.value)}
                placeholder="Enter task credit"
                className="col-span-3 w-full"
              />
            </div>
          </div>
          <div className="flex items-end justify-end mt-5">
            <DialogClose asChild>
              <Button
                className="bg-primary-gradient font-semibold"
                type="submit"
              >
                Save and Change
              </Button>
            </DialogClose>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditTodoModal;
