// src/hooks/useTodos.ts
import { useState, useMemo, useCallback } from 'react'
import type { Todo, Filter } from '../types'

let nextId = 0
function genId(): string {
  // id incremental simple para el ejemplo
  return `todo-${++nextId}`
}

export function useTodos(initial: Todo[] = []) {
  const [todos, setTodos] = useState<Todo[]>(initial)
  const [filter, setFilter] = useState<Filter>('all')

  const add = useCallback((text: string) => {
    setTodos((prev) => [...prev, { id: genId(), text, completed: false }])
  }, [])

  const toggle = useCallback((id: string) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
    )
  }, [])

  const remove = useCallback((id: string) => {
    setTodos((prev) => prev.filter((t) => t.id !== id))
  }, [])

  // lista derivada según el filtro activo
  const visibleTodos = useMemo(() => {
    if (filter === 'active') return todos.filter((t) => !t.completed)
    if (filter === 'completed') return todos.filter((t) => t.completed)
    return todos
  }, [todos, filter])

  return { todos, visibleTodos, filter, setFilter, add, toggle, remove }
}

import { act, renderHook } from '@testing-library/react'

  it('add agrega una tarea no completada', () => {
    const { result } = renderHook(() => useTodos())

    // act() agrupa la actualización de estado y aplica el re-render
    act(() => {
      result.current.add('Estudiar Vitest')
    })

    // tras act, result.current refleja el nuevo estado
    expect(result.current.todos).toHaveLength(1)
    expect(result.current.todos[0]).toMatchObject({
      text: 'Estudiar Vitest',
      completed: false,
    })
  })