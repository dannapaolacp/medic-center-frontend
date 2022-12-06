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

const getUser = async (cookiecc2) => {
  const data = await fetch(`http://localhost:3000/api/patient/${cookiecc2}`);
  const patients = await data.json();
  console.log(patients);
  let ced = document.getElementById('cc');
  let names = document.getElementById('names');
  let email = document.getElementById('email');
  let phone = document.getElementById('phone');
  let age = document.getElementById('age');
  let birth = document.querySelector('input[type="date"]');
  const fecha = patients.birth.split('T');
  console.table(fecha);
  let weight = document.getElementById('weight');
  let height = document.getElementById('height');
  ced.value = patients.cc;
  names.value = patients.name;
  email.value = patients.email;
  phone.value = patients.phone;
  age.value = patients.age;
  birth.value = fecha[0];
  weight.value = patients.weight;
  height.value = patients.height;
};

getUser(cookiecc2);

let btnunames = document.querySelector('#unames');
let names = document.querySelector('#names');
btnunames.addEventListener('click', (event) => {
  event.preventDefault();
  names.removeAttribute('readonly');
});

let btnemail = document.querySelector('#uemail');
let email = document.querySelector('#email');
btnemail.addEventListener('click', (event) => {
  event.preventDefault();
  email.removeAttribute('readonly');
});

let btnphone = document.querySelector('#uphone');
let phone = document.querySelector('#phone');
btnphone.addEventListener('click', (event) => {
  event.preventDefault();
  phone.removeAttribute('readonly');
});

let btnweight = document.querySelector('#uweight');
let weight = document.querySelector('#weight');
btnweight.addEventListener('click', (event) => {
  event.preventDefault();
  weight.removeAttribute('readonly');
});

let btnheight = document.querySelector('#uheight');
let height = document.querySelector('#height');
btnheight.addEventListener('click', (event) => {
  event.preventDefault();
  height.removeAttribute('readonly');
});

let buttonUpdate = document.getElementById('buttonUpdate');
let registration;
let registrationJson;

const udpateUser = async () => {
  const data = await fetch(`http://localhost:3000/api/patient/${cc.value}`, {
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
  let weight = document.getElementById('weight');
  let height = document.getElementById('height');
  let age = document.getElementById('age');
  let birth = document.getElementById('birth');

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
      text: 'Debe insertar su edad correctamente',
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
  if (weight.value == 0) {
    Swal.fire({
      icon: 'error',
      title: 'ERROR!!',
      text: 'Debe insertar su peso',
    });
    weight.value = '';
    weight.focus();
    return false;
  } else if (weight.value <= 0) {
    Swal.fire({
      icon: 'error',
      title: 'ERROR!!',
      text: 'Debe insertar su peso correctamente',
    });
    weight.value = '';
    weight.focus();
    return false;
  }

  if (height.value == 0) {
    Swal.fire({
      icon: 'error',
      title: 'ERROR!!',
      text: 'Debe insertar su estatura',
    });
    height.value = '';
    height.focus();
    return false;
  } else if (height.value <= 0) {
    Swal.fire({
      icon: 'error',
      title: 'ERROR!!',
      text: 'Debe insertar su estatura correctamente',
    });
    height.value = '';
    height.focus();
    return false;
  }

  if (birth.value == 0) {
    Swal.fire({
      icon: 'error',
      title: 'ERROR!!',
      text: 'Debe insertar su fecha de nacimiento',
    });
    birth.value = '';
    birth.focus();
    return false;
  }

  registration = {
    name: names.value,
    phone: phone.value,
    email: email.value,
    weight: weight.value,
    height: height.value,
  };
  Swal.fire({
    icon: 'success',
    title: 'Se ha editado los datos del usuario correctamente!!',
  }).then(function () {
    window.location = '/pacientes';
  });
  console.table(registration);
  registrationJson = JSON.stringify(registration);
  console.log(registrationJson);
  udpateUser();
});
