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
import { ITodo } from "@/redux/interface/TodoTypes";
import { useUpdateTaskDataMutation } from "@/redux/api/api";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Loader2 } from "lucide-react";

const EditTodoModal = ({ _id, title, description, priority }: ITodo) => {
  const [taskTitle, setTaskTitle] = useState(title || "");
  const [taskDescription, setTaskDescription] = useState(description || "");
  const [taskPriority, setTaskPriority] = useState("");

  const [updateTask, { isLoading, isError, isSuccess }] =
    useUpdateTaskDataMutation();

  console.log("update data:", { isLoading, isError, isSuccess });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    const editDetails = {
      title: taskTitle,
      description: taskDescription,
      priority: taskPriority,
    };

    const options = {
      id: _id,
      data: editDetails,
    };

    updateTask(options);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={"icon"} className="bg-indigo-600">
          <Icons.Edit className="size-4 md:size-6" />
        </Button>
      </DialogTrigger>
      <DialogContent className="w-11/12 sm:max-w-[425px]">
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
              <Label htmlFor="priority" className="text-left">
                Priority
              </Label>
              <Select
                value={priority}
                onValueChange={(value) => setTaskPriority(value)}
              >
                <SelectTrigger className="col-span-3 text-gray-500">
                  <SelectValue placeholder="Select priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup className="text-gray-500">
                    <SelectLabel>Priority</SelectLabel>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="low">Low</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex items-end justify-end mt-5">
            <DialogClose asChild>
              {isLoading ? (
                <Button
                  className="bg-primary-gradient font-semibold w-20"
                  type="submit"
                >
                  <Loader2 className="h-4 w-4 animate-spin" />
                </Button>
              ) : (
                <Button
                  className="bg-primary-gradient font-semibold"
                  type="submit"
                >
                  Save and Change
                </Button>
              )}
            </DialogClose>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditTodoModal;
