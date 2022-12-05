const getUser = async () => {
  const cedu = 100;
  const data = await fetch(`http://localhost:3000/api/admin/${cedu}`);
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
