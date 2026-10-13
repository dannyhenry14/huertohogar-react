import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Carrito from './components/Carrito'
import Footer from './components/Footer'
import Productos from './paginas/Productos'
import { productos } from './data/productos'

function App() {
  const [carrito, setCarrito] = useState(() => {
    const guardado = localStorage.getItem('carrito')
    return guardado ? JSON.parse(guardado) : []
  })

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito))
  }, [carrito])

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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/productos"
            element={
              <Productos productos={productos} onAgregar={agregarAlCarrito} />
            }
          />
          <Route
            path="/carrito"
            element={
              <Carrito
                carrito={carrito}
                onEliminar={eliminarDelCarrito}
                onCambiarCantidad={cambiarCantidad}
              />
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App