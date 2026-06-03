import './App.css'

function App() {


  return (
    <>
      <div className="container">

        {/* Tabla */}
        <section className="section-card">
          <div className="section-header">
            <h2>
              <i className="fa-solid fa-users"></i> Listado de Usuarios
            </h2>
            <p>
              Visualiza y gestiona los usuarios registrados en el sistema.
            </p>
          </div>

          <div className="table-container">
            <table className="custom-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>Email</th>
                  <th>Teléfono</th>
                  <th className="text-center">Acciones</th>
                </tr>
              </thead>

              <tbody>
                {/* Los datos se renderizarán dinámicamente aquí */}
              </tbody>
            </table>
          </div>
        </section>

        {/* Formulario */}
        <section className="section-card">
          <div className="section-header">
            <h2>
              <i className="fa-solid fa-user-plus"></i> Registrar Usuario
            </h2>
            <p>
              Introduce los datos para dar de alta un nuevo miembro.
            </p>
          </div>

          <form className="user-form">
            <div className="form-grid">

              <div className="form-group">
                <label htmlFor="nombre">Nombre</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  placeholder="Ej. Ana"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="apellido">Apellido</label>
                <input
                  type="text"
                  id="apellido"
                  name="apellido"
                  placeholder="Ej. Silva"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Correo Electrónico</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="ana@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="telefono">Teléfono</label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  placeholder="Ej. +34 600 000 000"
                />
              </div>

            </div>

            <div className="form-actions">
              <button type="submit" className="btn-submit">
                <i className="fa-solid fa-save"></i> Guardar Usuario
              </button>
            </div>
          </form>
        </section>
      </div>
    </>
  )
}

export default App
