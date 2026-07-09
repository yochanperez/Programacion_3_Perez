// src/pages/AboutRB.tsx

import { Container, Card, ListGroup } from 'react-bootstrap'

export default function ProyectsRB() {
  return (
    <Container className="py-5" style={{ maxWidth: 600 }}>
      <h1 className="h3 fw-bold mb-4">Proyectos</h1>
      <Card className="shadow-sm">
        <Card.Header className="fw-semibold">Proyectos Full Stack utilizados</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>Despliegues AWS, Google Cloud, Azure</ListGroup.Item>
          <ListGroup.Item>ERP Contable</ListGroup.Item>
          <ListGroup.Item>Point Cloud Viewer</ListGroup.Item>
          <ListGroup.Item>Control de Eventos Academicos</ListGroup.Item>
        </ListGroup>
      </Card>
    </Container>
  )
}