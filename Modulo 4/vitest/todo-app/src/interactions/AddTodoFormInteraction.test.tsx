import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { AddTodoForm } from './AddTodoFormInteraction' 

describe('AddTodoForm', () => {
  it('llama a onAdd con el texto al enviar el formulario', async () => {
    const onAdd = vi.fn()
    render(<AddTodoForm onAdd={onAdd} />)

    // 1. Interactuar con la primera tarea
    const inputTodo = screen.getByLabelText('Nueva tarea')
    await userEvent.type(inputTodo, 'Comprar pan')

    const botonAgregar = screen.getByRole('button', { name: /agregar/i }) 
    await userEvent.click(botonAgregar)
    
    // 2. Interactuar con la segunda tarea
    const inputTodo2 = screen.getByLabelText('Nueva tarea')
    await userEvent.type(inputTodo2, 'Comprar leche')
    await userEvent.click(screen.getByRole('button', { name: /agregar/i }))

    // Validaciones
    expect(onAdd).toHaveBeenCalledTimes(2)
    expect(onAdd).toHaveBeenNthCalledWith(1, 'Comprar pan')
    expect(onAdd).toHaveBeenNthCalledWith(2, 'Comprar leche')
  })
})