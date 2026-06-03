// Constates y variables



// GET con Fetch API
fetch('http://localhost/Ejercicios_Ajax/')
  .then(res => res.json())
  .then(data => console.log(data))



// POST con Fetch API
const nuevoUsuario = {
  nombre: 'user4',
  apellido: 'test4',
  email: 'user4@correo',
  telefono: 654123987
}

fetch('http://localhost/Ejercicios_Ajax/', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(nuevoUsuario)
})
.then(res => res.json())
.then(data => console.log(data))