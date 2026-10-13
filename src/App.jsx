import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import ProductList from './components/ProductList'
import Carrito from './components/Carrito'
import Footer from './components/Footer'
import { productos } from './data/productos'

function App() {
  const [carrito, setCarrito] = useState([])

  function agregarAlCarrito(producto) {
    const existe = carrito.find((item) => item.id === producto.id)

    if (existe) {
      setCarrito(
        carrito.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        )
      )
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }])
    }
  }

  function eliminarDelCarrito(id) {
    setCarrito(carrito.filter((item) => item.id !== id))
  }

  function cambiarCantidad(id, cambio) {
    setCarrito(
      carrito
        .map((item) =>
          item.id === id ? { ...item, cantidad: item.cantidad + cambio } : item
        )
        .filter((item) => item.cantidad > 0)
    )
  }

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="flex-grow-1">
        <Home />
        <section id="productos" className="container py-5">
          <h2 className="text-success mb-4">Nuestros productos</h2>
          <ProductList productos={productos} onAgregar={agregarAlCarrito} />
        </section>
        <Carrito
          carrito={carrito}
          onEliminar={eliminarDelCarrito}
          onCambiarCantidad={cambiarCantidad}
        />
      </main>
      <Footer />
    </div>
  )
}

export default App