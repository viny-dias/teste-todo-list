
import { TaskListProps } from '../types/TaskListProps';
import PostItem from './TaskItem';

const PostList = ({ tasks, onEdit, onDelete }: TaskListProps) => {
  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <PostItem key={task.id} task={task} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default PostList;