import { Link, useParams } from 'react-router-dom';
import articulos from '../data/articulos';

function DetalleArticulo() {
  const { id } = useParams();
  const articulo = articulos.find((a) => a.id === Number(id));

  if (!articulo) {
    return (
      <div className="container my-4">
        <h1>Artículo no encontrado</h1>
        <p>El artículo que buscas no existe.</p>
        <Link to="/blog" className="btn btn-success">
          Volver al blog
        </Link>
      </div>
    );
  }

  return (
    <div className="container my-4">
      <h1>{articulo.titulo}</h1>

      {articulo.parrafos.map((parrafo, indice) => (
        <p key={indice}>{parrafo}</p>
      ))}

      <Link to="/blog" className="btn btn-outline-success">
        Volver al blog
      </Link>
    </div>
  );
}

export default DetalleArticulo;