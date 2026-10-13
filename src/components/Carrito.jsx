import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { obtenerSesion } from '../utilidades/usuarios'

function Carrito({ carrito, onEliminar, onCambiarCantidad, onVaciar }) {
  const [compraRealizada, setCompraRealizada] = useState(false)
  const navigate = useNavigate()

  const total = carrito.reduce(
    (suma, item) => suma + item.precio * item.cantidad,
    0
  )

  const manejarCompra = () => {
    if (!obtenerSesion()) {
      navigate('/iniciar-sesion')
      return
    }

    onVaciar()
    setCompraRealizada(true)
  }

  return (
    <section id="carrito" className="container py-5">
      <h2 className="text-success mb-4">Mi carrito</h2>

      {compraRealizada && (
        <div className="alert alert-success">
          ¡Compra realizada con éxito! Gracias por preferir HuertoHogar.
        </div>
      )}

      {carrito.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <ul className="list-group">
          {carrito.map((item) => (
            <li
              key={item.id}
              className="list-group-item d-flex flex-wrap justify-content-between align-items-center gap-2"
            >
              <span>{item.nombre}</span>

              <div className="d-flex align-items-center gap-2">
                <button
                  className="btn btn-outline-secondary btn-sm"
                  onClick={() => onCambiarCantidad(item.id, -1)}
                >
                  -
                </button>
                <span>{item.cantidad}</span>
                <button
                  className="btn btn-outline-secondary btn-sm"
                  onClick={() => onCambiarCantidad(item.id, 1)}
                >
                  +
                </button>
              </div>

              <div className="d-flex align-items-center gap-3">
                <span>
                  ${(item.precio * item.cantidad).toLocaleString('es-CL')}
                </span>
                <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={() => onEliminar(item.id)}
                >
                  Eliminar
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      <p className="fs-4 fw-bold mt-3">
        Total: ${total.toLocaleString('es-CL')}
      </p>

      {carrito.length > 0 && (
        <button className="btn btn-success" onClick={manejarCompra}>
          Comprar
        </button>
      )}
    </section>
  )
}

export default Carrito