import { useState, useEffect } from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';

// Define a interface para o post
interface Post {
  id: number;
  title: string;
  content: string;
}

// Define o componente App
export function App() {
  const [posts, setPosts] = useState<Post[]>([]); // Estado tipado com um array de Post
  const [editingPost, setEditingPost] = useState<Post | null>(null); // Estado para o post em edição

  useEffect(() => {
    // @todo: Implementar a função para buscar os posts da API
    // Simulação de exemplo para evitar erro
    setPosts([
      { id: 1, title: 'Post de exemplo', content: 'Conteúdo do post' },
    ]);
  }, []);

  const handleCreatePost = async (data: Omit<Post, 'id'>) => {
    // @todo: Implementar a função para criar um novo post
    console.log('Criar post:', data);
  };

  const handleUpdatePost = async (id: number, data: Omit<Post, 'id'>) => {
    // @todo: Implementar a função para atualizar um post existente
    console.log('Atualizar post:', id, data);
  };

  const handleDeletePost = async (id: number) => {
    // @todo: Implementar a função para deletar um post
    console.log('Deletar post:', id);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
        Gerenciador de Posts
      </h1>
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <PostForm
          onSubmit={editingPost ? handleUpdatePost : handleCreatePost}
          editingPost={editingPost}
          setEditingPost={setEditingPost}
        />
        <PostList posts={posts} onEdit={setEditingPost} onDelete={handleDeletePost} />
      </div>
    </div>
  // <div className="min-h-screen bg-gray-100 p-4">
  //   <h1>Hello, React!</h1>
  // </div>

  );
}
