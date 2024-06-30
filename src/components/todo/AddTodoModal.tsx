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
import { useAddTaskMutation } from "@/redux/api/api";
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

const AddTodoModal = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [addTask, { data, isLoading, isError, isSuccess }] =
    useAddTaskMutation();

  console.log({ data, isLoading, isError, isSuccess });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    const randomId = Math.random().toString(36).substring(2, 7);

    const taskDetails = {
      id: randomId,
      title: title,
      description: description,
      priority: priority,
      isCompleted: false,
    };

    // for local state post
    // dispatch(addTask(taskDetails));

    // for server post
    addTask(taskDetails);

    setTitle("");
    setDescription("");
    setPriority("");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-primary-gradient font-semibold">Add todo</Button>
      </DialogTrigger>
      <DialogContent className="w-11/12 sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add task</DialogTitle>
          <DialogDescription>
            Please enter the details of the task you want to complete.
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
                value={title}
                required
                onChange={(e) => setTitle(e.target.value)}
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
                value={description}
                required
                onChange={(e) => setDescription(e.target.value)}
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
                onValueChange={(value) => setPriority(value)}
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
            {isLoading ? (
              <Button
                className="bg-primary-gradient font-semibold w-20"
                type="submit"
              >
                <Loader2 className="h-4 w-4 animate-spin" />
              </Button>
            ) : (
              <Button
                className="bg-primary-gradient font-semibold w-20"
                type="submit"
              >
                Submit
              </Button>
            )}
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddTodoModal;
