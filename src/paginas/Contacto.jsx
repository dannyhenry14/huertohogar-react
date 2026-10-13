import { useState } from 'react';

const EXPRESION_CORREO = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const LARGO_MAXIMO_MENSAJE = 500;

function validar(datos) {
  const errores = {};

  if (datos.nombre.trim() === '') {
    errores.nombre = 'El nombre es obligatorio.';
  }

  if (!EXPRESION_CORREO.test(datos.correo)) {
    errores.correo = 'Ingresa un correo válido, por ejemplo nombre@correo.com.';
  }

  if (datos.mensaje.trim() === '') {
    errores.mensaje = 'El mensaje es obligatorio.';
  } else if (datos.mensaje.length > LARGO_MAXIMO_MENSAJE) {
    errores.mensaje = `El mensaje no puede tener más de ${LARGO_MAXIMO_MENSAJE} caracteres.`;
  }

  return errores;
}

function Contacto() {
  const [datos, setDatos] = useState({ nombre: '', correo: '', mensaje: '' });
  const [errores, setErrores] = useState({});
  const [enviado, setEnviado] = useState(false);

  const manejarCambio = (evento) => {
    const { name, value } = evento.target;
    setDatos({ ...datos, [name]: value });
  };

  const manejarEnvio = (evento) => {
    evento.preventDefault();
    const nuevosErrores = validar(datos);
    setErrores(nuevosErrores);

    if (Object.keys(nuevosErrores).length === 0) {
      setEnviado(true);
      setDatos({ nombre: '', correo: '', mensaje: '' });
    } else {
      setEnviado(false);
    }
  };

  return (
    <div className="container my-4">
      <h1>Contacto</h1>
      <p>¿Tienes dudas o comentarios? Escríbenos.</p>

      {enviado && (
        <div className="alert alert-success">
          ¡Gracias! Tu mensaje fue enviado.
        </div>
      )}

      <form noValidate onSubmit={manejarEnvio}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            className={`form-control ${errores.nombre ? 'is-invalid' : ''}`}
            value={datos.nombre}
            onChange={manejarCambio}
          />
          <div className="invalid-feedback">{errores.nombre}</div>
        </div>

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
          <label htmlFor="mensaje" className="form-label">
            Mensaje
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            rows="5"
            className={`form-control ${errores.mensaje ? 'is-invalid' : ''}`}
            value={datos.mensaje}
            onChange={manejarCambio}
          ></textarea>
          <div className="invalid-feedback">{errores.mensaje}</div>
          <div className="form-text">
            {datos.mensaje.length}/{LARGO_MAXIMO_MENSAJE} caracteres
          </div>
        </div>

        <button type="submit" className="btn btn-success">
          Enviar mensaje
        </button>
      </form>
    </div>
  );
}

export default Contacto;