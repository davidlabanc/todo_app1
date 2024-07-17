export type Todo = {
    id: string;
    text: string;
    completed: boolean;
}

export type List = {
  createdAt: string;
  id: string;
  name: string;
  todo: Todo[] | string;
}

export type Lists = {
  lists: List[]
}
