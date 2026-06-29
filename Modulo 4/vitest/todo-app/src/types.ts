// src/types.ts
export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  titulo: string;
}

export type Filter = 'all' | 'active' | 'completed';

export interface User {
  id: string;
  name: string;
}