import { cleanup, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Carrito from '../components/Carrito';

describe('Carrito', () => {
  afterEach(() => {
    cleanup();
  });

  it('muestra un mensaje cuando el carrito está vacío y esconde el botón Comprar', () => {
    render(
      <MemoryRouter>
        <Carrito carrito={[]} />
      </MemoryRouter>
    );

    expect(screen.getByText('Tu carrito está vacío.')).toBeTruthy();
    expect(screen.queryByText('Comprar')).toBeNull();
  });
});