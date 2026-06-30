// src/components/TodoItem.test.tsx
import { describe, it, expect } from 'vitest';
import { TodoItem } from './TodoItem';
import type { Todo } from '../types';
import { render, screen, logRoles, fireEvent } from '@testing-library/react';
import { LoginForm } from './LoginForm';

describe('TodoItem', () => {
  it('debería mostrar el texto de la tarea', () => {
    const todo = crearTodo({ text: 'Estudiar Vitest' });

    render(<TodoItem todo={todo} onToggle={() => { }} onDelete={() => { }} />);

    expect(screen.getByText('Estudiar Vitest')).toBeDefined();
  });

  it('debería renderizar un checkbox', () => {
    // Arrange
    const todo = crearTodo({ text: 'Comprar pan' });

    // Act
    render(<TodoItem todo={todo} onToggle={() => { }} onDelete={() => { }} />);

    // Assert: Verificamos que exista el checkbox usando .toBeDefined()
    expect(screen.getByRole('checkbox')).toBeDefined();
  });

  it('debería mostrar un botón de eliminar', () => {
    const todo = crearTodo();

    render(<TodoItem todo={todo} onToggle={() => { }} onDelete={() => { }} />);

    expect(screen.getByRole('button', { name: 'Eliminar' })).toBeDefined();
  });

  it('debería mostrar un checkbox en true', () => {
    const todo = crearTodo({ completed: true });
    console.log(todo);
    render(<TodoItem todo={todo} onToggle={() => { }} onDelete={() => { }} />);

    expect(screen.getByRole('checkbox', { checked: true })).toBeDefined();
  });

  it('inspecciona el DOM y los roles', () => {
    const { container } = render(<LoginForm onLogin={() => { }} />);

    // Imprime TODO el HTML renderizado en consola
    screen.debug();

    // Imprime solo un nodo (más enfocado)
    screen.debug(screen.getByRole('button', { name: 'Entrar' }));

    // Lista todos los roles y sus nombres accesibles
    logRoles(container);
    const passwordInput = screen.getByLabelText(/contraseña/i);
    fireEvent.change(passwordInput, { target: { value: 'mi_secreto_123' } });

    // Ahora tus logs sí mostrarán el valor
    screen.debug(passwordInput);
    logRoles(container);
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

describe('TodoItem · matchers', () => {
  it('debería marcar el checkbox cuando la tarea está completada', () => {
    // Arrange: tarea completada
    const todo = crearTodo({ completed: true });
    // Act
    render(<TodoItem todo={todo} onToggle={() => { }} onDelete={() => { }} />);
    // Assert: el checkbox debe estar marcado
    expect(screen.getByRole('checkbox')).toBeChecked();
  });


  it('NO debería marcar el checkbox cuando la tarea está activa', () => {
    // Arrange: tarea pendiente
    const todo = crearTodo({ completed: false });
    // Act
    render(<TodoItem todo={todo} onToggle={() => { }} onDelete={() => { }} />);
    // Assert: matcher negado con .not
    expect(screen.getByRole('checkbox')).not.toBeChecked();
  });

  it('debería mostrar el texto exacto de la tarea', () => {
    const todo = crearTodo({ text: 'Estudiar matchers', titulo:'Educación' });
    render(<TodoItem todo={todo} onToggle={() => { }} onDelete={() => { }} />);
    // toHaveTextContent comprueba el texto contenido en el <li>
    expect(screen.getByRole('listitem')).toHaveTextContent('Estudiar matchers');
    expect(screen.getByRole('listitem')).toHaveTextContent('Educación');
  });


});