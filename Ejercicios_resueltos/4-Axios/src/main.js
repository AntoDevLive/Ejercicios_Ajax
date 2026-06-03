// Imports (recuerda instalar axios con npm!: "npm install axios")
import axios from 'axios';

// GET con Axios
async function loadAll() {

  try {
    const res = await axios.get('http://localhost/ejercicios_ajax/');
    console.log(res.data.usuarios);
  } catch (error) {
    console.log(error);
  }

}

document.addEventListener('DOMContentLoaded', () => {
  loadAll();
  createUser();
});


// POST con Axios
async function createUser() {

  const nuevoUsuario = {
    nombre: 'axiosPOST',
    apellido: 'axiosPOST',
    email: 'axiosPOST@correo',
    telefono: 654123987
  }

  try {
    const res = await axios.post('http://localhost/ejercicios_ajax/', nuevoUsuario);
    console.log(res.data.message);
  } catch (error) {
    console.log(error);
  }

}

// Mi axios
class MiAxios {

  constructor(){}

  get(url) {
    fetch(url)
      .then(res => res.json())
      .then(data => console.log(data))
  }

  post(url, usuario) {
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(usuario)
    })
      .then(res => res.json())
      .then(data => console.log(data))
  }

}

const nuevoUsuario = {
  nombre: 'miaxios',
  apellido: 'miaxiosTest',
  email: 'miaxios@correo',
  telefono: 654123987
}

const axiosTest = new MiAxios();

axiosTest.get('http://localhost/ejercicios_ajax/');

axiosTest.post('http://localhost/ejercicios_ajax/', nuevoUsuario);