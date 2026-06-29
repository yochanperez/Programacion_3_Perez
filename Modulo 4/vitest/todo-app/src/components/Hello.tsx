// src/components/Hello.tsx
// Componente trivial usado únicamente para verificar la configuración.

import Hello from './Hello';

interface HelloProps {
  name: string;
}

export function Hello({ name }: HelloProps) {
  return <p>Hola, {name}</p>;
}