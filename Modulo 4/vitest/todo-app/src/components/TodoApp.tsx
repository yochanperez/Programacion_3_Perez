// src/components/TodoApp.tsx
import { useState, useEffect } from 'react';
import { fetchTodos } from '../api/todos';
import { TodoList } from './TodoList';
import type { Todo } from '../types';

export default function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetchTodos().then((data) => setTodos(data));
  }, []);

  return (
    <main>
      <h1>Todo App</h1>
      <TodoList 
        todos={todos} 
        onToggle={() => {}} 
        onDelete={() => {}} 
      />
    </main>
  );
}