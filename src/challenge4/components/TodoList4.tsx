interface TodoList {
  id: number;
  title: string;
  completed: boolean;
}

interface TodoListProps {
  todo: TodoList | null;
}

const TodoList4 = ({ todo }: TodoListProps) => {
  console.log(todo);
  const { id, title } = todo || {};
  return todo ? (
    <div>
      <h2>{id}</h2>
      <p>{title}</p>
    </div>
  ) : (
    <p>Loading.....</p>
  );
};
export default TodoList4;
