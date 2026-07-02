// src/App.tsx

import AutoFocusForm from './components/AutoFocusForm'
import Stopwatch from './components/Stopwatch'
import InlineEditor from './components/InlineEditor'
import PreviousValue from './components/PreviousValue'
// ┌──────────────────────────────────────────────────────────────────────┐
// │  Cambia PASO y guarda (Ctrl+S) para navegar entre componentes.       │
// │  1  AutoFocusForm    — foco automático y salto de campo con Enter   │
// │  2  Stopwatch        — interval guardado en ref, sin re-renders     │
// │  3  InlineEditor     — leer un input sin useState (ref no controlado)│
// │  4  PreviousValue    — guardar el valor anterior de un input        │
// └──────────────────────────────────────────────────────────────────────┘
const PASO = 3

export default function App() {
  const content = PASO === 1 ? <AutoFocusForm /> :
  PASO === 2 ? <Stopwatch /> :
  PASO === 3 ? <InlineEditor /> :
  PASO === 4 ? <PreviousValue /> :
    <p style={{ color: '#e00' }}>Paso {PASO}: crea el componente primero</p>

  return (
    <main style={{ maxWidth: 500, margin: '40px auto', fontFamily: 'sans-serif', padding: '0 16px' }}>
      {content}
    </main>
  )
}