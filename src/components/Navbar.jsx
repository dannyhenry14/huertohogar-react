import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { cerrarSesion, obtenerSesion } from '../utilidades/usuarios'

function Navbar() {
  useLocation()
  const navigate = useNavigate()
  const sesion = obtenerSesion()

  const manejarCerrarSesion = () => {
    cerrarSesion()
    navigate('/iniciar-sesion')
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container">
        <Link className="navbar-brand" to="/">
          HuertoHogar
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menuPrincipal"
          aria-controls="menuPrincipal"
          aria-expanded="false"
          aria-label="Abrir menú"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menuPrincipal">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" end>
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/productos">
                Productos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/nosotros">
                Nosotros
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/blog">
                Blog
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/carrito">
                Carrito
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contacto">
                Contacto
              </NavLink>
            </li>

            {sesion ? (
              <>
                <li className="nav-item d-flex align-items-center">
                  <span className="navbar-text me-lg-3">Hola, {sesion.nombre}</span>
                </li>
                <li className="nav-item d-flex align-items-center">
                  <button
                    type="button"
                    className="btn btn-outline-light btn-sm"
                    onClick={manejarCerrarSesion}
                  >
                    Cerrar sesión
                  </button>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <NavLink className="nav-link" to="/iniciar-sesion">
                  Iniciar sesión
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar