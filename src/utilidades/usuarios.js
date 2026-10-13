const CLAVE_USUARIOS = 'usuarios';
const CLAVE_SESION = 'sesion';

export function obtenerUsuarios() {
  const guardado = localStorage.getItem(CLAVE_USUARIOS);
  return guardado ? JSON.parse(guardado) : [];
}

export function guardarUsuario(usuario) {
  const usuarios = obtenerUsuarios();
  usuarios.push(usuario);
  localStorage.setItem(CLAVE_USUARIOS, JSON.stringify(usuarios));
}

export function existeRun(run) {
  return obtenerUsuarios().some(
    (u) => u.run.toUpperCase() === run.toUpperCase()
  );
}

export function existeCorreo(correo) {
  return obtenerUsuarios().some(
    (u) => u.correo.toLowerCase() === correo.toLowerCase()
  );
}

export function buscarUsuario(correo, contrasena) {
  return (
    obtenerUsuarios().find(
      (u) =>
        u.correo.toLowerCase() === correo.toLowerCase() &&
        u.contrasena === contrasena
    ) || null
  );
}

export function guardarSesion(usuario) {
  const sesion = {
    nombre: usuario.nombre,
    apellidos: usuario.apellidos,
    correo: usuario.correo,
  };
  localStorage.setItem(CLAVE_SESION, JSON.stringify(sesion));
}

export function obtenerSesion() {
  const guardada = localStorage.getItem(CLAVE_SESION);
  return guardada ? JSON.parse(guardada) : null;
}

export function cerrarSesion() {
  localStorage.removeItem(CLAVE_SESION);
}