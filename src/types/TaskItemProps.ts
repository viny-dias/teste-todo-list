import { Task } from "./Task";

export interface PostItemProps {
    task: Task;
    onEdit: (task: Task) => void;
    onDelete: (id: number) => void;
}