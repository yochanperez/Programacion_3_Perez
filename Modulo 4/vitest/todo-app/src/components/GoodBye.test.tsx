// src/components/Hello.test.tsx
import { describe, it, expect } from 'vitest';
import { Goodbye } from './GoodBye';

describe('GoodBye', () => {
  // El test mínimo: el componente existe y es importable.
  it('debería estar definido', () => {
    expect(Goodbye).toBeDefined();
  });
});