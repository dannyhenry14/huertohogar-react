function ProductCard({ producto, onAgregar }) {
  return (
    <div className="card h-100 shadow-sm">
      <img
        src={producto.imagen}
        className="card-img-top"
        alt={producto.nombre}
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{producto.nombre}</h5>
        <p className="card-text">
          ${producto.precio.toLocaleString('es-CL')} / {producto.unidad}
        </p>
        <button
          className="btn btn-success mt-auto"
          onClick={() => onAgregar(producto)}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  )
}

export default ProductCard