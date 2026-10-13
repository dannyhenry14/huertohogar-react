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
  
  it('calcula bien el total del carrito', () => {
    const carritoDePrueba = [
      { id: 1, nombre: 'Manzanas', precio: 1200, cantidad: 2 },
      { id: 2, nombre: 'Naranjas', precio: 1000, cantidad: 3 },
    ];

    render(
      <MemoryRouter>
        <Carrito carrito={carritoDePrueba} />
      </MemoryRouter>
    );

    expect(screen.getByText('Total: $5.400')).toBeTruthy();
  });
});