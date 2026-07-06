// src/api/todos.ts
import type { Todo } from '../types'

export async function fetchTodos(): Promise<Todo[]> {
  const res = await fetch('/api/todos')
  if (!res.ok) throw new Error('Error al cargar tareas')
  return res.json()
}