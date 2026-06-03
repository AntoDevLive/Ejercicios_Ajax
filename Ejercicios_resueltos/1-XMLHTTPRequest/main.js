// Constates y variables
const xhrGET = new XMLHttpRequest();
const xhrPOST = new XMLHttpRequest();


// GET con XMLHTTPRequest
xhrGET.onload = function() {
  if(xhrGET.status === 200) {
    console.log(JSON.parse(xhrGET.responseText));
  }
}

xhrGET.open('GET', 'http://localhost/Ejercicios_Ajax/', true);

xhrGET.send();


// POST con XMLHTTPRequest
xhrPOST.onload = function () {
  if (xhrPOST.status === 200) {
    console.log(JSON.parse(xhrPOST.responseText));
  }
}

xhrPOST.open('POST', 'http://localhost/Ejercicios_Ajax/', true);

xhrPOST.setRequestHeader('Content-Type', 'application/json');

const nuevoUsuario = {
  nombre: 'user3',
  apellido: 'test3',
  email: 'user3@correo',
  telefono: 654123987
}

xhrPOST.send(JSON.stringify(nuevoUsuario));