// src/App.tsx

// import { ThemeProvider }    from './theme/ThemeContext'
import CssGlobalDemo        from './components/CssGlobalDemo'
import CssModuleDemo from './components/CssModuleDemo'
// import './theme/theme.css'

// ┌──────────────────────────────────────────────────────────────────────┐
// │  Cambia PASO y guarda (Ctrl+S) para navegar entre componentes.      │
// │  1  CssGlobalDemo        — clases globales y riesgo de colisión     │
// │  2  InlineStyleDemo      — objetos JS, sin :hover ni @media         │
// │  3  CssModuleDemo        — scope local, :hover con CSS Modules      │
// │  4  StyledComponentsDemo — CSS-in-JS con props transient ($)        │
// │  5  LiveStyleEditor      — hook useStyles para estilos dinámicos    │
// │  6  HoverDemo            — hook useHover para efectos hover         │
// │  7  ThemePanel           — Context + CSS variables para theming     │
// └──────────────────────────────────────────────────────────────────────┘
const PASO = 3

export default function App() {
  const content =
    PASO === 1 ? <CssGlobalDemo /> :
    // PASO === 2 ? <InlineStyleDemo /> :
     PASO === 3 ? <CssModuleDemo /> :
    // PASO === 4 ? <StyledComponentsDemo /> :
    // PASO === 5 ? <LiveStyleEditor /> :
    // PASO === 6 ? <HoverDemo /> :
    // PASO === 7 ? <ThemePanel /> :
    <p style={{ color: '#e00' }}>Paso {PASO}: crea el componente primero</p>

  return (
      <main style={{ maxWidth: 640, margin: '0 auto', padding: '32px 16px' }}>
        {content}
      </main>
  )
}  
