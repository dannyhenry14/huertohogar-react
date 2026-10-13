import { Link } from 'react-router-dom';
import articulos from '../data/articulos';

function Blog() {
  return (
    <div className="container my-4">
      <h1>Blog</h1>
      <p className="lead">Consejos y novedades de HuertoHogar.</p>

      <div className="row g-4 mt-2">
        {articulos.map((articulo) => (
          <div key={articulo.id} className="col-12 col-md-6">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <h2 className="h5 card-title">{articulo.titulo}</h2>
                <p className="card-text">{articulo.resumen}</p>
                <Link
                  to={`/blog/${articulo.id}`}
                  className="btn btn-outline-success mt-auto align-self-start"
                >
                  Leer artículo
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;