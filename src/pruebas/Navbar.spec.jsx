import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { guardarSesion } from '../utilidades/usuarios';

describe('Navbar', () => {
  afterEach(() => {
    cleanup();
    localStorage.clear();
  });

  it('sin sesión muestra Iniciar sesión y no muestra Cerrar sesión', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    expect(screen.getByText('Iniciar sesión')).toBeTruthy();
    expect(screen.queryByText('Cerrar sesión')).toBeNull();
  });

  it('con sesión muestra el saludo y al cerrar sesión vuelve a Iniciar sesión', () => {
    guardarSesion({
      nombre: 'Ana',
      apellidos: 'Pérez',
      correo: 'ana@duoc.cl',
    });

    const espiaBorrar = spyOn(Storage.prototype, 'removeItem').and.callThrough();

    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    expect(screen.getByText('Hola, Ana')).toBeTruthy();
    expect(screen.queryByText('Iniciar sesión')).toBeNull();

    fireEvent.click(screen.getByText('Cerrar sesión'));

    expect(espiaBorrar).toHaveBeenCalledWith('sesion');
    expect(screen.getByText('Iniciar sesión')).toBeTruthy();
    expect(screen.queryByText('Hola, Ana')).toBeNull();
    expect(screen.queryByText('Cerrar sesión')).toBeNull();
  });
});