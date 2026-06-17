interface ProductCardProps {
  title: string
  description?: string
  highlighted?: boolean
  price?: number
}

export default function ProductCard({
  title,
  description = 'Sin descripción',
  highlighted = false,
  price
}: ProductCardProps) {
  return (
    <div
      style={{
        border: highlighted ? '2px solid gold' : '1px solid #ccc',
        borderRadius: 8,
        padding: 16,
        marginBottom: 12,
        backgroundColor: highlighted ? '#fffbea' : '#fff',
      }}
    >
      <h3 style={{ margin: '0 0 8px' }}>{title}</h3>
      <p style={{ margin: 0, color: '#555' }}>{description}</p>
      {/* Solo mostramos el precio si nos pasan el prop */}
      {price !== undefined && <p style={{ marginTop: 8, fontWeight: 'bold' }}>Precio: ${price}</p>}
    </div>
  )
}