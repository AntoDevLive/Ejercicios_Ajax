// Constates y variables




// GET con Async Fetch API
async function loadAll() {
  try {
    const res = await fetch('http://localhost/Ejercicios_Ajax/');
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

document.addEventListener('DOMContentLoaded', loadAll);


// POST con Async Fetch API
const nuevoUsuario = {
  nombre: 'user5',
  apellido: 'test5',
  email: 'user5@correo',
  telefono: 654123987
}


async function createUser() {
  try {
    const req = await fetch('http://localhost/Ejercicios_Ajax/', {
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

createUser();