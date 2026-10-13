import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { existeCorreo, existeRun, guardarUsuario } from '../utilidades/usuarios';
import regiones from '../data/regiones';

const REGEX_RUN = /^[0-9]{7,8}[0-9kK]$/;
const REGEX_CORREO = /^[^\s@]+@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/i;

function validar(datos) {
  const errores = {};

  if (datos.nombre.trim() === '') {
    errores.nombre = 'El nombre es obligatorio.';
  }

  if (datos.apellidos.trim() === '') {
    errores.apellidos = 'Los apellidos son obligatorios.';
  }

  if (!REGEX_RUN.test(datos.run)) {
    errores.run =
      'El RUN debe tener 7 u 8 números y un dígito verificador (0-9 o K), sin puntos ni guion.';
  }

  if (!REGEX_CORREO.test(datos.correo)) {
    errores.correo = 'El correo debe ser @duoc.cl, @profesor.duoc.cl o @gmail.com.';
  }

  if (datos.contrasena.length < 4 || datos.contrasena.length > 10) {
    errores.contrasena = 'La contraseña debe tener entre 4 y 10 caracteres.';
  }

  if (datos.fechaNacimiento === '') {
    errores.fechaNacimiento = 'La fecha de nacimiento es obligatoria.';
  }

  if (datos.direccion.trim() === '') {
    errores.direccion = 'La dirección es obligatoria.';
  }

  if (datos.region === '') {
    errores.region = 'Debes seleccionar una región.';
  }

  if (datos.comuna === '') {
    errores.comuna = 'Debes seleccionar una comuna.';
  }

  return errores;
}

function CrearUsuario() {
  const [datos, setDatos] = useState({
    nombre: '',
    apellidos: '',
    run: '',
    correo: '',
    contrasena: '',
    fechaNacimiento: '',
    direccion: '',
    region: '',
    comuna: '',
  });
  const [errores, setErrores] = useState({});
  const navigate = useNavigate();

  const manejarCambio = (evento) => {
    const { name, value } = evento.target;
    setDatos({ ...datos, [name]: value });
  };

  const manejarRegion = (evento) => {
    setDatos({ ...datos, region: evento.target.value, comuna: '' });
  };

  const comunasDisponibles =
    regiones.find((r) => r.nombre === datos.region)?.comunas || [];

  const manejarEnvio = (evento) => {
    evento.preventDefault();
    const nuevosErrores = validar(datos);

    if (!nuevosErrores.run && existeRun(datos.run)) {
      nuevosErrores.run = 'Ya existe un usuario con este RUN.';
    }

    if (!nuevosErrores.correo && existeCorreo(datos.correo)) {
      nuevosErrores.correo = 'Ya existe un usuario con este correo.';
    }

    setErrores(nuevosErrores);

    if (Object.keys(nuevosErrores).length === 0) {
      guardarUsuario(datos);
      navigate('/iniciar-sesion');
    }
  };

  return (
    <div className="container my-4">
      <h1>Crear usuario</h1>

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
          <label htmlFor="apellidos" className="form-label">
            Apellidos
          </label>
          <input
            type="text"
            id="apellidos"
            name="apellidos"
            className={`form-control ${errores.apellidos ? 'is-invalid' : ''}`}
            value={datos.apellidos}
            onChange={manejarCambio}
          />
          <div className="invalid-feedback">{errores.apellidos}</div>
        </div>

        <div className="mb-3">
          <label htmlFor="run" className="form-label">
            RUN (sin puntos ni guion)
          </label>
          <input
            type="text"
            id="run"
            name="run"
            className={`form-control ${errores.run ? 'is-invalid' : ''}`}
            placeholder="Ej: 12345678K"
            value={datos.run}
            onChange={manejarCambio}
          />
          <div className="invalid-feedback">{errores.run}</div>
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

        <div className="mb-3">
          <label htmlFor="fechaNacimiento" className="form-label">
            Fecha de nacimiento
          </label>
          <input
            type="date"
            id="fechaNacimiento"
            name="fechaNacimiento"
            className={`form-control ${errores.fechaNacimiento ? 'is-invalid' : ''}`}
            value={datos.fechaNacimiento}
            onChange={manejarCambio}
          />
          <div className="invalid-feedback">{errores.fechaNacimiento}</div>
        </div>

        <div className="mb-3">
          <label htmlFor="direccion" className="form-label">
            Dirección
          </label>
          <input
            type="text"
            id="direccion"
            name="direccion"
            className={`form-control ${errores.direccion ? 'is-invalid' : ''}`}
            value={datos.direccion}
            onChange={manejarCambio}
          />
          <div className="invalid-feedback">{errores.direccion}</div>
        </div>

        <div className="mb-3">
          <label htmlFor="region" className="form-label">
            Región
          </label>
          <select
            id="region"
            name="region"
            className={`form-select ${errores.region ? 'is-invalid' : ''}`}
            value={datos.region}
            onChange={manejarRegion}
          >
            <option value="">Selecciona una región</option>
            {regiones.map((r) => (
              <option key={r.nombre} value={r.nombre}>
                {r.nombre}
              </option>
            ))}
          </select>
          <div className="invalid-feedback">{errores.region}</div>
        </div>

        <div className="mb-3">
          <label htmlFor="comuna" className="form-label">
            Comuna
          </label>
          <select
            id="comuna"
            name="comuna"
            className={`form-select ${errores.comuna ? 'is-invalid' : ''}`}
            value={datos.comuna}
            onChange={manejarCambio}
            disabled={!datos.region}
          >
            <option value="">Selecciona una comuna</option>
            {comunasDisponibles.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          <div className="invalid-feedback">{errores.comuna}</div>
        </div>

        <button type="submit" className="btn btn-success">
          Crear usuario
        </button>
      </form>

      <p className="mt-3">
        ¿Ya tienes cuenta? <Link to="/iniciar-sesion">Inicia sesión aquí</Link>
      </p>
    </div>
  );
}

export default CrearUsuario;