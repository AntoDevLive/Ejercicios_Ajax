import { useEffect, useState } from 'react'
import './App.css'

function App() {

  interface IUsuario {
    id?: number,
    nombre: string,
    apellido: string,
    email: string,
    telefono: number
  }

  const [usuario, setUsuario] = useState<IUsuario[]>([]);

  async function loadAll(): Promise<void> {
    try {
      const req = await fetch('http://localhost/ejercicios_ajax/index.php');
      const res = await req.json();
      setUsuario(res.usuarios);
      console.log(usuario);
    } catch (error) {
      console.log(error)
    }
  }

  async function createUser(): Promise<void> {

    const nuevoUsuario: IUsuario = {
      nombre: 'reactTest',
      apellido: 'react',
      email: 'react@correo',
      telefono: 654321987
    }

    try {
      const req = await fetch('http://localhost/ejercicios_ajax/index.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(nuevoUsuario)
      });
      const res = await req.json();
      console.log(res);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    loadAll();
    createUser();
    loadAll();
  }, []);

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
