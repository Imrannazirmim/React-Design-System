interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todo | null;
}

const TodoList = ({ todos }: TodoListProps) => {
  const { id, title } = todos || {};

  return todos ? (
    <div>
      <p>
        <strong>Todo Id</strong>
        {id}
      </p>
      <p>
        <strong>Todo title</strong>
        {title}
      </p>
    </div>
  ) : (
    <span>Loading.....</span>
  );
};
export default TodoList;
