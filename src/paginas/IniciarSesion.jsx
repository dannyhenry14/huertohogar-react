import { Link } from 'react-router-dom';

function IniciarSesion() {
  return (
    <div className="container my-4">
      <h1>Iniciar sesión</h1>
      <p>Aquí irá el formulario para iniciar sesión.</p>
      <p>¿Todavía no tienes cuenta?</p>
      <Link to="/crear-usuario" className="btn btn-success">
        Crear usuario
      </Link>
    </div>
  );
}

export default IniciarSesion;