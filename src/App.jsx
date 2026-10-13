import ProductList from './components/ProductList'
import { productos } from './data/productos'

function App() {
  return (
    <div className="container py-5">
      <h1 className="text-success mb-4">HuertoHogar</h1>
      <ProductList productos={productos} />
    </div>
  )
}

export default App