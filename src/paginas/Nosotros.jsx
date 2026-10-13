const secciones = [
  {
    titulo: 'Nuestra misión',
    texto:
      'Acercar productos frescos y orgánicos a las familias, apoyando a los productores locales y cuidando el medio ambiente.',
  },
  {
    titulo: 'Nuestra visión',
    texto:
      'Ser la tienda online de referencia en alimentos naturales, reconocida por su calidad y su cercanía con el campo.',
  },
  {
    titulo: 'Nuestros valores',
    texto:
      'Frescura, transparencia y respeto por la tierra guían cada una de nuestras decisiones.',
  },
];

function Nosotros() {
  return (
    <div className="container my-4">
      <h1>Nosotros</h1>
      <p className="lead">
        HuertoHogar es una tienda online de productos frescos, orgánicos y
        lácteos, pensada para llevar el sabor del campo directo a tu mesa.
      </p>

      <div className="row g-4 mt-2">
        {secciones.map((seccion) => (
          <div key={seccion.titulo} className="col-12 col-md-4">
            <div className="card h-100">
              <div className="card-body">
                <h2 className="h5 card-title">{seccion.titulo}</h2>
                <p className="card-text">{seccion.texto}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Nosotros;