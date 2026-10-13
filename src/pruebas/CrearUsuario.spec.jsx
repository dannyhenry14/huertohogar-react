import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CrearUsuario from '../paginas/CrearUsuario';

const MENSAJE_ERROR_RUN =
  'El RUN debe tener 7 u 8 números y un dígito verificador (0-9 o K), sin puntos ni guion.';

describe('CrearUsuario', () => {
  afterEach(() => {
    cleanup();
  });

  it('un RUN inválido muestra su error y un RUN válido no', () => {
    render(
      <MemoryRouter>
        <CrearUsuario />
      </MemoryRouter>
    );

    const campoRun = screen.getByLabelText('RUN (sin puntos ni guion)');
    const botonCrear = screen.getByRole('button', { name: 'Crear usuario' });

    fireEvent.change(campoRun, { target: { value: '12.345.678-5' } });
    fireEvent.click(botonCrear);

    expect(screen.getByText(MENSAJE_ERROR_RUN)).toBeTruthy();

    fireEvent.change(campoRun, { target: { value: '12345678K' } });
    fireEvent.click(botonCrear);

    expect(screen.queryByText(MENSAJE_ERROR_RUN)).toBeNull();
  });
});