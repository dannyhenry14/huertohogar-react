import { useParams, Link } from 'react-router-dom'
import { productos } from '../data/productos'

function DetalleProducto({ onAgregar }) {
  const { id } = useParams()
  const producto = productos.find((p) => p.id === Number(id))

  if (!producto) {
    return (
      <section className="container py-5">
        <h1 className="text-success">Producto no encontrado</h1>
        <p>No se pudo encontrar el producto seleccionado.</p>
        <Link to="/productos" className="btn btn-success">
          Volver a productos
        </Link>
      </section>
    )
  }

  return (
    <section className="container py-5">
      <div className="row g-4 align-items-center">
        <div className="col-12 col-md-6">
          <img
            src={producto.imagen}
            alt={producto.nombre}
            className="img-fluid rounded shadow-sm"
          />
        </div>
        <div className="col-12 col-md-6">
          <h1 className="text-success">{producto.nombre}</h1>
          <p className="lead">{producto.descripcion}</p>
          <p className="fs-4 fw-bold">
            ${producto.precio.toLocaleString('es-CL')} / {producto.unidad}
          </p>
          <button
            className="btn btn-success me-2"
            onClick={() => onAgregar(producto)}
          >
            Agregar al carrito
          </button>
          <Link to="/productos" className="btn btn-outline-secondary">
            Volver
          </Link>
        </div>
      </div>
    </section>
  )
}

export default DetalleProducto