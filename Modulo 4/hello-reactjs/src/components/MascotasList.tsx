interface Animal {
  id: number
  name: string
  price: number
  edad: number
}

interface AnimalCatalogListProps {
  animals: Animal[]
  title?: string
}

export default function AnimalCatalogList({ 
  animals, 
  title = 'Catálogo de Animales' 
}: AnimalCatalogListProps) {
  
  return (
    <section>
      <h2 style={{ marginBottom: 16 }}>{title}</h2>

      {/* Un pequeño extra: mensaje por si la lista está vacía */}
      {animals.length === 0 && (
        <p style={{ color: '#999' }}>No hay animales disponibles en este momento.</p>
      )}

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {animals.map((animal) => (
          <li
            key={animal.id}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '10px 0',
              borderBottom: '1px solid #eee',
            }}
          >
            <span>
              {/* Mostramos el nombre del animal */}
              <strong>{animal.name}</strong>
              
              {/* Mostramos la edad que definiste en tu interfaz */}
              <em style={{ marginLeft: 8, color: '#666', fontSize: 14 }}>
                ({animal.edad} {animal.edad === 1 ? 'año' : 'años'})
              </em>
            </span>
            
            {/* Mostramos el precio */}
            <strong>${animal.price.toFixed(2)}</strong>
          </li>
        ))}
      </ul>
    </section>
  )
}