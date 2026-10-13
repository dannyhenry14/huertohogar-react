import { render, screen } from '@testing-library/react';

describe('Configuración de pruebas', () => {
  it('debería dibujar un componente de React en el navegador', () => {
    render(<h1>Hola pruebas</h1>);

    expect(screen.getByText('Hola pruebas')).toBeTruthy();
  });
});