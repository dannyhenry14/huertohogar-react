import ProductCard from './ProductCard'

function ProductList({ productos }) {
  return (
    <div className="row g-4">
      {productos.map((producto) => (
        <div className="col-12 col-sm-6 col-lg-4" key={producto.id}>
          <ProductCard producto={producto} />
        </div>
      ))}
    </div>
  )
}

export default ProductList