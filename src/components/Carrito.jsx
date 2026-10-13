function Carrito({ carrito }) {
  const total = carrito.reduce(
    (suma, item) => suma + item.precio * item.cantidad,
    0
  )

  return (
    <section id="carrito" className="container py-5">
      <h2 className="text-success mb-4">Mi carrito</h2>

      {carrito.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <ul className="list-group">
          {carrito.map((item) => (
            <li
              key={item.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <span>
                {item.nombre} x{item.cantidad}
              </span>
              <span>
                ${(item.precio * item.cantidad).toLocaleString('es-CL')}
              </span>
            </li>
          ))}
        </ul>
      )}

      <p className="fs-4 fw-bold mt-3">
        Total: ${total.toLocaleString('es-CL')}
      </p>
    </section>
  )
}

export default Carrito