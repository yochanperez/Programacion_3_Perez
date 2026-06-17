// Asegúrate de que la ruta y el nombre del archivo sean correctos
import AnimalCatalogList from './components/MascotasList'

// Definimos la interfaz aquí o la importamos si está en otro lado
export interface Animal {
  id: number
  name: string
  price: number
  edad: number
}

const animales: Animal[] = [
  { id: 1, name: 'Perrito Golden', price: 150.00, edad: 2 },
  { id: 2, name: 'Gatito Siames',  price: 80.00,  edad: 1 },
  { id: 3, name: 'Loro Hablador',  price: 200.00, edad: 5 },
]

export default function App() {
  return (
    <main style={{ maxWidth: 540, margin: '40px auto', fontFamily: 'sans-serif' }}>
      
      <h1>Refugio de Animales</h1>
      
      {/* Usamos exactamente el mismo nombre que pusimos en el import */}
      <AnimalCatalogList 
        animals={animales} 
        title="Mascotas en adopción" 
      />

    </main>
  )
}