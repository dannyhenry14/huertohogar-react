import ProductList from '../components/ProductList'

function Productos({ productos, onAgregar }) {
  return (
    <section className="container py-5">
      <h1 className="text-success mb-4">Nuestros productos</h1>
      <ProductList productos={productos} onAgregar={onAgregar} />
    </section>
  )
}

export default Productos