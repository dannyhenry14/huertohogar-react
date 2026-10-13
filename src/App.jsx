import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import Footer from './components/Footer'
import { productos } from './data/productos'

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="container py-5 flex-grow-1">
        <h1 className="text-success mb-4">Nuestros productos</h1>
        <ProductList productos={productos} />
      </main>
      <Footer />
    </div>
  )
}

export default App