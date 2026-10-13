import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { buscarUsuario, guardarSesion } from '../utilidades/usuarios';

function IniciarSesion() {
  const [datos, setDatos] = useState({ correo: '', contrasena: '' });
  const [errores, setErrores] = useState({});
  const navigate = useNavigate();

  const manejarCambio = (evento) => {
    const { name, value } = evento.target;
    setDatos({ ...datos, [name]: value });
  };

  const manejarEnvio = (evento) => {
    evento.preventDefault();
    const nuevosErrores = {};

    if (datos.correo.trim() === '') {
      nuevosErrores.correo = 'El correo es obligatorio.';
    }

    if (datos.contrasena === '') {
      nuevosErrores.contrasena = 'La contraseña es obligatoria.';
    }

    if (Object.keys(nuevosErrores).length === 0) {
      const usuario = buscarUsuario(datos.correo.trim(), datos.contrasena);

      if (usuario) {
        guardarSesion(usuario);
        navigate('/');
      } else {
        nuevosErrores.general = 'Correo o contraseña incorrectos.';
      }
    }

    setErrores(nuevosErrores);
  };

  return (
    <div className="container my-4">
      <h1>Iniciar sesión</h1>

      <form noValidate onSubmit={manejarEnvio}>
        {errores.general && (
          <div className="alert alert-danger">{errores.general}</div>
        )}

        <div className="mb-3">
          <label htmlFor="correo" className="form-label">
            Correo
          </label>
          <input
            type="email"
            id="correo"
            name="correo"
            className={`form-control ${errores.correo ? 'is-invalid' : ''}`}
            value={datos.correo}
            onChange={manejarCambio}
          />
          <div className="invalid-feedback">{errores.correo}</div>
        </div>

        <div className="mb-3">
          <label htmlFor="contrasena" className="form-label">
            Contraseña
          </label>
          <input
            type="password"
            id="contrasena"
            name="contrasena"
            className={`form-control ${errores.contrasena ? 'is-invalid' : ''}`}
            value={datos.contrasena}
            onChange={manejarCambio}
          />
          <div className="invalid-feedback">{errores.contrasena}</div>
        </div>

        <button type="submit" className="btn btn-success">
          Iniciar sesión
        </button>
      </form>

      <hr />

      <p>¿Todavía no tienes cuenta?</p>
      <Link to="/crear-usuario" className="btn btn-outline-success">
        Crear usuario
      </Link>
    </div>
  );
}

export default IniciarSesion;