export interface ITodo {
  _id?: string;
  title: string;
  description: string;
  priority?: "high" | "medium" | "low";
  isCompleted?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IInitialState {
  tasks: ITodo[];
}
