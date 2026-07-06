// src/components/TodoItemInteraction.test.tsx
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import type { Todo } from '../types'
import { TodoItem } from './TodoItemInteraction' 

const todo: Todo = { id: 'a1', text: 'Leer documentación', completed: false }

describe('TodoItem', () => {
  it('dispara onToggle con el id al hacer click en el checkbox', async () => {
    const user = userEvent.setup()
    const onToggle = vi.fn()
    render(<TodoItem todo={todo} onToggle={onToggle} onDelete={vi.fn()} />)

    await user.click(screen.getByRole('checkbox'))

    expect(onToggle).toHaveBeenCalledTimes(1)
    expect(onToggle).toHaveBeenCalledWith('a1')
  })

  it('requiere doble verificación para disparar onDelete', async () => {
    const user = userEvent.setup()
    const onDelete = vi.fn()
    render(<TodoItem todo={todo} onToggle={vi.fn()} onDelete={onDelete} />)

    const botonEliminar = screen.getByRole('button', { name: /eliminar/i })
    await user.click(botonEliminar)
    
    expect(onDelete).toHaveBeenCalledTimes(1)
    expect(onDelete).toHaveBeenCalledWith('a1')
  })

  it('muestra el checkbox marcado cuando la tarea está completada', () => {
    const completada: Todo = { ...todo, completed: true }
    render(<TodoItem todo={completada} onToggle={vi.fn()} onDelete={vi.fn()} />)

    expect(screen.getByRole('checkbox')).toBeChecked()
  })
})