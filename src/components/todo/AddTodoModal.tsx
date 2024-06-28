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
import { useAppDispatch } from "@/redux/hooks";
import { addTask } from "@/redux/features/todoSlice";

const AddTodoModal = () => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [credit, setCredit] = useState("");
  const dispatch = useAppDispatch();

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    const randomId = Math.random().toString(36).substring(2, 7);

    const taskDetails = {
      id: randomId,
      title: task,
      description: description,
      credit: parseInt(credit),
    };

    dispatch(addTask(taskDetails));
    setTask("");
    setDescription("");
    setCredit("");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-primary-gradient font-semibold">Add todo</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
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
                value={task}
                required
                onChange={(e) => setTask(e.target.value)}
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
              <Label htmlFor="credit" className="text-left">
                Credit
              </Label>
              <Input
                id="credit"
                value={credit}
                required
                type="number"
                onChange={(e) => setCredit(e.target.value)}
                placeholder="Enter task credit"
                className="col-span-3 w-full"
              />
            </div>
          </div>
          <div className="flex items-end justify-end mt-5">
            <Button className="bg-primary-gradient font-semibold" type="submit">
              Submit
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddTodoModal;
