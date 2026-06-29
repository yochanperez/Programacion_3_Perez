// src/components/TodoItem.test.tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { TodoItem } from './TodoItem';
import type { Todo } from '../types';

describe('TodoItem', () => {
  it('debería mostrar el texto de la tarea', () => {
    const todo = crearTodo({ text: 'Estudiar Vitest' });

    render(<TodoItem todo={todo} onToggle={() => {}} onDelete={() => {}} />);

    expect(screen.getByText('Estudiar Vitest')).toBeDefined();
  });

  it('debería renderizar un checkbox', () => {
    // Arrange
    const todo = crearTodo({ text: 'Comprar pan' });

    // Act
    render(<TodoItem todo={todo} onToggle={() => {}} onDelete={() => {}} />);

    // Assert: Verificamos que exista el checkbox usando .toBeDefined()
    expect(screen.getByRole('checkbox')).toBeDefined();
  });

  it('debería mostrar un botón de eliminar', () => {
    const todo = crearTodo();

    render(<TodoItem todo={todo} onToggle={() => {}} onDelete={() => {}} />);

    expect(screen.getByRole('button', { name: 'Eliminar' })).toBeDefined();
  });

  it('debería mostrar un checkbox en true', () => {
    const todo = crearTodo({completed: true});
    console.log(todo);
    render(<TodoItem todo={todo} onToggle={() => {}} onDelete={() => {}} />);

    expect(screen.getByRole('checkbox', { checked: true })).toBeDefined();
  });
}); 

// Función helper corregida para incluir "titulo"
function crearTodo(overrides: Partial<Todo> = {}): Todo {
  return { 
    id: '1', 
    text: 'Comprar pan', 
    completed: false, 
    titulo: 'Tarea General', 
    ...overrides 
  };
}