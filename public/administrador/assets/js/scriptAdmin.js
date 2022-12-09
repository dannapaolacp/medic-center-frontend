const getCookies = (namess) => {
  let nameEQ = namess + '=';
  let ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};

const cookiecc2 = getCookies('cc');

const getUser = async () => {
  const data = await fetch(`http://localhost:3000/api/admin/${cookiecc2}`);
  const admin = await data.json();
  console.log(admin);
  let ced = document.getElementById('cedula');
  let names = document.getElementById('names');
  let email = document.getElementById('email');
  let phone = document.getElementById('phone');
  ced.value = admin.cc;
  names.value = admin.name;
  email.value = admin.email;
  phone.value = admin.phone;
};

getUser();

// $('#reporte_paciente,#reporte_medico').click(function () {
//   $('#carusel').remove();
// });

let btneditar = document.querySelector('#editar');
let input = document.querySelector('#names');
btneditar.addEventListener('click', (event) => {
  event.preventDefault();
  input.removeAttribute('readonly');
});

let btneditar2 = document.querySelector('#editar2');
let input2 = document.querySelector('#email');
btneditar2.addEventListener('click', (event) => {
  event.preventDefault();
  input2.removeAttribute('readonly');
});

let btneditar3 = document.querySelector('#editar3');
let input3 = document.querySelector('#phone');
btneditar3.addEventListener('click', (event) => {
  event.preventDefault();
  input3.removeAttribute('readonly');
});

let buttonUpdate = document.getElementById('buttonUpdate');
let registration;
let registrationJson;

const udpateUser = async () => {
  const data = await fetch(`http://localhost:3000/api/admin/${cookiecc2}`, {
    method: 'put',
    body: registrationJson,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

buttonUpdate.addEventListener('click', function () {
  let cc = document.getElementById('cc');
  let names = document.getElementById('names');
  let phone = document.getElementById('phone');
  let email = document.getElementById('email');

  if (names.value == 0) {
    Swal.fire({
      icon: 'error',
      title: 'ERROR!!',
      text: 'Debe insertar su nombre',
    });
    names.value = '';
    names.focus();
    return false;
  }
  const patternn = new RegExp('^[A-Z ]+$', 'i');
  if (!patternn.test(names.value)) {
    Swal.fire({
      icon: 'error',
      title: 'ERROR!!',
      text: 'No debe tener numeros ni caracteres especiales en el nombre',
    });
    names.value = '';
    names.focus();
    return false;
  }
  if (phone.value == 0) {
    Swal.fire({
      icon: 'error',
      title: 'ERROR!!',
      text: 'Debe insertar su telefono',
    });
    phone.value = '';
    phone.focus();
    return false;
  } else if (phone.value <= 0) {
    Swal.fire({
      icon: 'error',
      title: 'ERROR!!',
      text: 'Debe insertar su numero de telefono correctamente',
    });
    phone.value = '';
    phone.focus();
    return false;
  }
  if (email.value == 0) {
    Swal.fire({
      icon: 'error',
      title: 'ERROR!!',
      text: 'Debe insertar su correo',
    });
    email.value = '';
    email.focus();
    return false;
  }
  let Regular = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  const valido = Regular.test(email.value);
  if (valido == false) {
    Swal.fire({
      icon: 'error',
      title: 'ERROR!!',
      text: 'Correo no valido',
    });
    email.value = '';
    email.focus();
    return false;
  }

  registration = {
    name: names.value,
    phone: phone.value,
    email: email.value,
  };
  Swal.fire({
    icon: 'success',
    title: 'Se ha editado los datos del usuario correctamente!!',
  }).then(function () {
    window.location = '/administrador';
  });
  console.table(registration);
  registrationJson = JSON.stringify(registration);
  console.log(registrationJson);
  udpateUser();
});
