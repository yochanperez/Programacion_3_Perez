// src/components/LoginForm.test.tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { LoginForm } from './LoginForm';

describe('LoginForm · queries', () => {
  it('debería encontrar campos por su label (getByLabelText)', () => {
    // Arrange
    render(<LoginForm onLogin={() => {}} />);
    // Assert: la forma preferida para campos de formulario
    expect(screen.getByLabelText('Usuario')).toBeDefined();
    expect(screen.getByLabelText('Contraseña')).toBeDefined();
    expect(screen.getByLabelText('Incluye usuario')).toBeDefined();
  });

  it('debería encontrar el botón por rol y nombre (getByRole)', () => {
    render(<LoginForm onLogin={() => {}} />);
    // El nombre accesible de un button es su texto.
    expect(
      screen.getByRole('button', { name: 'Entrar' }),
    ).toBeDefined();
  });

  it('debería encontrar el formulario por su rol con name', () => {
    render(<LoginForm onLogin={() => {}} />);
    // aria-label define el nombre accesible del <form>.
    expect(
      screen.getByRole('form', { name: 'Formulario de acceso' }),
    ).toBeDefined();
  });

  it('Lik a google', () => {
    render(<LoginForm onLogin={() => {}} />);
    // aria-label define el nombre accesible del <form>.
    expect(
      screen.getByRole('link'),
    ).toBeDefined();
  });
  
});