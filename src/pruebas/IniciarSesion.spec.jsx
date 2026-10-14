import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import IniciarSesion from '../paginas/IniciarSesion';
import { guardarUsuario } from '../utilidades/usuarios';

describe('IniciarSesion', () => {
  afterEach(() => {
    cleanup();
    localStorage.clear();
  });

  it('una contraseña incorrecta muestra el aviso y no guarda ninguna sesión', () => {
    guardarUsuario({
      nombre: 'Ana',
      apellidos: 'Pérez',
      run: '12345678K',
      correo: 'ana@duoc.cl',
      contrasena: '1234',
    });

    const espiaGuardar = spyOn(Storage.prototype, 'setItem');

    render(
      <MemoryRouter>
        <IniciarSesion />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByLabelText('Correo'), {
      target: { value: 'ana@duoc.cl' },
    });
    fireEvent.change(screen.getByLabelText('Contraseña'), {
      target: { value: 'clave-equivocada' },
    });
    fireEvent.click(screen.getByRole('button', { name: 'Iniciar sesión' }));

    expect(screen.getByText('Correo o contraseña incorrectos.')).toBeTruthy();
    expect(espiaGuardar).not.toHaveBeenCalled();
  });
});