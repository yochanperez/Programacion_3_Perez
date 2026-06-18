// src/components/ProductCard.tsx

interface Vehiculo {
  brand: string
  model: string
  highlighted?: boolean
}

interface VehiculosTableProps {
  title: string
  vehiculos: Vehiculo[]
}

export default function VehiculosTable({ title, vehiculos }: VehiculosTableProps) {
  return (
    <div style={{ maxWidth: 400, fontFamily: 'sans-serif' }}>
      <h3 style={{ marginBottom: 12, color: '#333' }}>{title}</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #ccc', textAlign: 'left' }}>
            <th style={{ padding: '8px', textAlign: 'left' }}>Marca</th>
            <th style={{ padding: '8px', textAlign: 'left' }}>Modelo</th>
          </tr>
        </thead>
        <tbody>
          {vehiculos.map((auto) => (
            <tr
              key={`${auto.brand}-${auto.model}`}
              style={{
                backgroundColor: auto.highlighted ? '#fffbea' : 'transparent',
                borderBottom: '1px solid #eee',
                fontWeight: auto.highlighted ? 600 : 400
              }}
            >
              <td style={{ padding: '8px', color: auto.highlighted ? 'gold' : '#555' }}>
                {auto.brand} {auto.highlighted ? '⭐' : ''}
              </td>
              <td style={{ padding: '8px' }}>{auto.model}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}