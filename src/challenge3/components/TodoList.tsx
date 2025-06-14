interface TodoList {
  id: number;
  title: string;
  completed: boolean;
}

interface TodoListProps {
  todo: TodoList | null;
}

const TodoList = ({ todo }: TodoListProps) => {
  const { id, title } = todo || {};
  return todo ? (
    <div>
      <h2>
        <strong>Todo Id</strong>
        {id}
      </h2>
      <p>
        Todo Title <strong>{title}</strong>
      </p>
    </div>
  ) : (
    <p>Loading.....</p>
  );
};
export default TodoList;
