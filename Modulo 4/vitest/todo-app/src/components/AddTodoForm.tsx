// src/components/AddTodoForm.tsx
import { useState } from 'react';

interface AddTodoFormProps {
  onAdd: (text: string, titulo: string) => void; // Recibe ambos parámetros
}

export function AddTodoForm({ onAdd }: AddTodoFormProps) {
  const [text, setText] = useState('');
  const [titulo, setTitulo] = useState('');

  const disabled = text.trim() === '';

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (disabled) return;
    
    // Enviamos ambos textos limpios a la función constructora
    onAdd(text.trim(), titulo.trim());
    
    // Reseteamos ambos estados
    setText('');
    setTitulo('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="new-todo">Nueva tarea</label>
      <input
        id="new-todo"
        value={text}
        placeholder="¿Qué hay que hacer?"
        onChange={(e) => setText(e.target.value)}
      />

      <label htmlFor="new-titulo">Título</label>
      <input
        id="new-titulo"
        value={titulo}
        placeholder="Escribe Título"
        onChange={(e) => setTitulo(e.target.value)} // Asegúrate de que use setTitulo
      />
      
      <button type="submit" disabled={disabled}>
        Añadir
      </button>
    </form>
  );
}