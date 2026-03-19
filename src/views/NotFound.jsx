import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <section className="cont-not-found">
      <h1>404 - La página no se encuentra.</h1>
      <Link to="/">Volver</Link>
    </section>
  )
}

export { NotFound }