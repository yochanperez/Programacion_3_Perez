// src/components/TodoItem.tsx
import type { Todo } from '../types';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <li>
      {/* El checkbox refleja si la tarea está completada */}
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        aria-label={`Marcar "${todo.text}"`}
      />
      
      {/* CORREGIDO: Usamos una etiqueta de texto para el título. 
          Esto elimina el warning del onChange y permite que .toHaveTextContent() lo encuentre. */}
      <strong style={{ marginRight: '8px' }}>{todo.titulo}</strong>

      {/* El texto de la tarea */}
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.text}
      </span>

      {/* Botón para eliminar la tarea */}
      <button onClick={() => onDelete(todo.id)}>Eliminar</button>
    </li>
  );
}