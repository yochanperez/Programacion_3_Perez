// src/components/TodoLoader.test.tsx
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { TodoLoader } from './TodoLoader';
import { fetchTodos } from '../api/todos'; // Importamos la función para poder mockearla

// 🛠️ 1. Creamos el mock automático del módulo de la API
vi.mock('../api/todos', () => ({
  fetchTodos: vi.fn(),
}));

describe('TodoLoader', () => {
  it('muestra el estado de carga al montarse', () => {
    // Definimos una promesa que no se resuelve inmediatamente para capturar el estado loading
    vi.mocked(fetchTodos).mockReturnValue(new Promise(() => {}));

    render(<TodoLoader />);

    // getBy* es síncrono: el mensaje existe en el primer render.
    expect(screen.getByRole('status')).toHaveTextContent('Cargando tareas…');
  });

  it('muestra las tareas cuando la petición tiene éxito', async () => {
    // 🛠️ 2. Simulamos una respuesta exitosa de la API con los datos exactos que espera el test
    vi.mocked(fetchTodos).mockResolvedValue([
      { id: '1', text: 'Aprender Vitest', completed: false },
      { id: '2', text: 'Configurar MSW', completed: false },
      { id: '3', text: 'Testing', completed: false },
      { id: '4', text: 'Setup', completed: false },
    ]);

    render(<TodoLoader />);

    // findBy* = getBy* + waitFor. Espera a que aparezca el elemento.
    const lista = await screen.findByRole('list', { name: 'Lista de tareas' });

    expect(lista).toBeInTheDocument();
    expect(screen.getByText('Aprender Vitest')).toBeInTheDocument();
    expect(screen.getByText('Configurar MSW')).toBeInTheDocument();
    expect(screen.getByText('Testing')).toBeInTheDocument();
    expect(screen.getByText('Setup')).toBeInTheDocument();
  });

  it('quita el mensaje de carga cuando llegan los datos', async () => {
    // Simulamos cualquier respuesta exitosa rápida
    vi.mocked(fetchTodos).mockResolvedValue([
      { id: '1', text: 'Cualquier tarea', completed: false }
    ]);

    render(<TodoLoader />);

    const cargando = screen.getByRole('status');
    expect(cargando).toBeInTheDocument();

    // Espera hasta que el nodo se elimine del DOM.
    await waitForElementToBeRemoved(cargando);

    expect(screen.queryByRole('status')).not.toBeInTheDocument();
    expect(screen.getByRole('list')).toBeInTheDocument();
  });
});