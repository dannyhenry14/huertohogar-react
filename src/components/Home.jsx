import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <section className="bg-light py-5 text-center">
        <div className="container">
          <h1 className="display-5 fw-bold text-success">
            Frescura del campo, directo a ti
          </h1>
          <p className="lead mx-auto" style={{ maxWidth: '640px' }}>
            Del campo a tu mesa, sin intermediarios. HuertoHogar te trae lo mejor
            de la tierra chilena, fresco y con sabor real.
          </p>
          <Link to="/productos" className="btn btn-success btn-lg">
            Ver productos
          </Link>
        </div>
      </section>

      <section className="container py-5">
        <div className="row g-4">
          <div className="col-12 col-md-6">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h2 className="h4 text-success">Nuestra misión</h2>
                <p className="mb-0">
                  Llevamos productos frescos del campo directo a tu puerta,
                  apoyando a los agricultores locales y una vida más sana.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h2 className="h4 text-success">Nuestra visión</h2>
                <p className="mb-0">
                  Queremos ser la tienda online de confianza para compra de
                  productos frescos y naturales de todo Chile.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home