import { type ReactNode, useEffect, useState } from "react";
import axios from "axios";
import * as React from "react";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface SingleTodoLoaderProps {
  children: ReactNode;
  todoId: number;
}

interface ChildComponentProps {
  todos: Todo | null;
}

const SingleTodoLoader = ({ todoId, children }: SingleTodoLoaderProps) => {
  const [todos, setTodos] = useState<Todo | null>(null);
  //data fetching useEffet
  useEffect(() => {
    (async () => {
      const response = await axios.get<Todo>(
        `https://jsonplaceholder.typicode.com/todos/${todoId}`,
      );
      setTodos(response.data);
    })();
  }, []);

  return (
    <div>
      {React.Children.map(children, (child) => {
        if (React.isValidElement<ChildComponentProps>(child)) {
          return React.cloneElement(child, { todos });
        }
        return child;
      })}
    </div>
  );
};
export default SingleTodoLoader;
