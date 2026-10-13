function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container text-center">
        <p className="mb-1">HuertoHogar - Del campo al hogar.</p>
        <p className="mb-1">Contacto: contacto@huertohogar.cl</p>
        <p className="mb-0 small">
          &copy; {new Date().getFullYear()} HuertoHogar. Proyecto académico DSY1104.
        </p>
      </div>
    </footer>
  )
}

export default Footer