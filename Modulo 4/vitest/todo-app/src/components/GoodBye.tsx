// src/components/Hello.tsx
// Componente trivial usado únicamente para verificar la configuración.
interface GoodbyeProps {
  name: string;
}

export function Goodbye({ name }: GoodbyeProps) {
  return <p>Goodbye, {name}</p>;
}