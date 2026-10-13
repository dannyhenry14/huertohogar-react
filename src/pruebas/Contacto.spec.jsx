import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import Contacto from '../paginas/Contacto';

describe('Contacto', () => {
  afterEach(() => {
    cleanup();
  });

  it('al enviar el formulario vacío muestra los 3 mensajes de error', () => {
    render(<Contacto />);

    expect(screen.queryByText('El nombre es obligatorio.')).toBeNull();
    expect(screen.queryByText('El mensaje es obligatorio.')).toBeNull();

    fireEvent.click(screen.getByText('Enviar mensaje'));

    expect(screen.getByText('El nombre es obligatorio.')).toBeTruthy();
    expect(
      screen.getByText('Ingresa un correo válido, por ejemplo nombre@correo.com.')
    ).toBeTruthy();
    expect(screen.getByText('El mensaje es obligatorio.')).toBeTruthy();
  });
});