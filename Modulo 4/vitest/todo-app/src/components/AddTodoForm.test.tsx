// src/components/AddTodoForm.test.tsx
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AddTodoForm } from './AddTodoForm';

describe('AddTodoForm · matchers y acciones', () => {
  it('debería deshabilitar el botón cuando el input está vacío', () => {
    render(<AddTodoForm onAdd={() => {}} />);
    expect(screen.getByRole('button', { name: 'Añadir' })).toBeDisabled();
  });

  it('debería permitir escribir en ambos inputs y enviar los datos correctamente', async () => {
    // 1. Creamos un mock espía para verificar la función onAdd
    const onAddMock = vi.fn();
    
    // 2. Renderizamos el componente
    render(<AddTodoForm onAdd={onAddMock} />);
    
    const inputTarea = screen.getByLabelText('Nueva tarea');
    const inputTitulo = screen.getByLabelText('Título');
    const botonAñadir = screen.getByRole('button', { name: 'Añadir' });

    // 3. Simulamos al usuario escribiendo en ambos campos
    await userEvent.type(inputTarea, 'Comprar leche');
    await userEvent.type(inputTitulo, 'Supermercado');

    // El botón debería habilitarse automáticamente al haber texto
    expect(botonAñadir).toBeEnabled();

    // 4. Hacemos clic en el botón de enviar
    await userEvent.click(botonAñadir);

    // 5. Asertamos que onAdd haya sido llamado con los parámetros correctos
    // (Asegúrate de que tu componente AddTodoForm pase ambos argumentos en el onSubmit)
    expect(onAddMock).toHaveBeenCalledWith('Comprar leche', 'Supermercado');

    // 6. Verificamos que los campos se hayan limpiado tras el envío
    expect(inputTarea).toHaveValue('');
    expect(inputTitulo).toHaveValue('');
  });
});