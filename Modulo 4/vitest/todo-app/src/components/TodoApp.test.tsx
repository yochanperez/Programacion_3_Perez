// src/components/TodoApp.test.tsx
import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import type { Todo } from '../types'
import { fetchTodos } from '../api/todos'
import TodoApp from '../App';
// vi.mock se "iza" (hoisting) al inicio del archivo: reemplaza el módulo entero.
vi.mock('../api/todos', () => ({
  fetchTodos: vi.fn(), // creamos un mock vacío que controlaremos por test
}))

// le decimos a TS que fetchTodos es ahora un mock
const fetchTodosMock = vi.mocked(fetchTodos)

describe('TodoApp con API mockeada', () => {
  beforeEach(() => {
    vi.clearAllMocks() // limpia el historial entre tests
  })

  it('muestra las tareas que devuelve la API', async () => {
    // Arrange: respuesta controlada para este test.
    const datos: Todo[] = [{ id: '1', text: 'Tarea remota', completed: false }]
    fetchTodosMock.mockResolvedValue(datos)

    render(<TodoApp />)

    // esperamos a que aparezca el dato cargado de forma asíncrona
    expect(await screen.findByText('Tarea remota')).toBeInTheDocument()
    expect(fetchTodosMock).toHaveBeenCalledTimes(1)
  })
})