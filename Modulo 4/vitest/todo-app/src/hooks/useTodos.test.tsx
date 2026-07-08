// src/hooks/useTodos.test.tsx
import { renderHook, act } from '@testing-library/react' // 👈 'act' importado correctamente aquí
import { describe, it, expect } from 'vitest'
import type { Todo } from '../types'
import { useTodos } from './useTodos'

describe('useTodos', () => {
  it('arranca con lista vacía y filtro "all"', () => {
    const { result } = renderHook(() => useTodos())
    expect(result.current.todos).toEqual([])
    expect(result.current.filter).toBe('all')
  })

  it('respeta el estado inicial provisto', () => {
    const inicial: Todo[] = [{ id: 'x', text: 'Pre-cargada', completed: false }]
    const { result } = renderHook(() => useTodos(inicial))

    expect(result.current.todos).toHaveLength(1)
    expect(result.current.todos[0].text).toBe('Pre-cargada')
  })

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

  it('toggle alterna el campo completed', () => {
    const inicial: Todo[] = [{ id: 'a', text: 'Tarea', completed: false }]
    const { result } = renderHook(() => useTodos(inicial))

    act(() => result.current.toggle('a'))
    expect(result.current.todos[0].completed).toBe(true)

    // segundo toggle vuelve al estado original
    act(() => result.current.toggle('a'))
    expect(result.current.todos[0].completed).toBe(false)
  })

  it('remove elimina la tarea por id', () => {
    const inicial: Todo[] = [
      { id: 'a', text: 'Una', completed: false },
      { id: 'b', text: 'Dos', completed: false },
      { id: 'c', text: 'Dos', completed: false },
    ]
    const { result } = renderHook(() => useTodos(inicial))

    act(() => result.current.remove('a'))

    expect(result.current.todos).toHaveLength(2)
    expect(result.current.todos[0].id).toBe('b')
    expect(result.current.todos[1].id).toBe('c')
  })
})