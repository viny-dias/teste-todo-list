import { useEffect, useState } from "react";
import PostForm from "./TaskForm";
import PostList from "./TaskList";
import { Task } from "../types/Task";

export function PostManager() {
    const [tasks, setPosts] = useState<Task[]>([]);
    const [editingPost, setEditingPost] = useState<Task | null>(null);

  
    useEffect(() => { 
      // @todo: Implementar a função para buscar os tasks da API
      setPosts([
        { id: 1, title: 'Task de exemplo', content: 'Conteúdo do task' },
      ]);
    }, []);
  
    const handleCreatePost = async (title: string, content: string) => {
      // @todo: Implementar a função para criar um novo task
      console.log('Criar task:', title, content);
    };
  
    const handleUpdatePost = async (title: string, content: string, id: number) => {
      // @todo: Implementar a função para atualizar um task existente
      console.log('Atualizar task:', id, title, content);
    };
  
    const handleDeletePost = async (id: number) => {
      // @todo: Implementar a função para deletar um task
      console.log('Deletar task:', id);
    };
  
    return (
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <PostForm
          onSubmit={handleCreatePost}
          onEdit={handleUpdatePost}
          editingPost={editingPost}
          setEditingPost={setEditingPost}
        />
        <PostList 
          tasks={tasks} 
          onEdit={setEditingPost} 
          onDelete={handleDeletePost} 
        />
      </div>
    );

}