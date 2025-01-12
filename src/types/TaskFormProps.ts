import { Task } from "./Task";


export interface PostFormProps {
    onSubmit: (title: string, content: string) => void;
    onEdit?: (title: string, content: string, id: number) => void;
    editingPost: Task | null;
    setEditingPost: (task: Task | null) => void;
}