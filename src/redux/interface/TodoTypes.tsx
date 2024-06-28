export interface ITodo {
  id: string;
  title: string;
  description: string;
  credit?: number;
  isCompleted?: boolean;
}

export interface IInitialState {
  tasks: ITodo[];
}
