interface CommentList {
  id: number;
  name: string;
  email: string;
  body: string;
}

interface CommentListProps {
  comments: CommentList | null;
}

const Comments = ({ comments }: CommentListProps) => {
  const { name, email, body } = comments || {};
  return (
    <div>
      <h2>{name}</h2>
      <p>{email}</p>
      <span>{body}</span>
    </div>
  );
};
export default Comments;
