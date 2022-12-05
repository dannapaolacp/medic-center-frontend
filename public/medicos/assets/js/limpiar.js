// $(
//   '#modificar,#consultar,#exportar,#aplazar,#ver,#dias,#configurar,#perfil'
// ).click(function () {
//   $('#carusel').remove();
// });

let btneditar = document.querySelector('#editar');
let input = document.querySelector('#floatingInputGrid');
btneditar.addEventListener('click', (event) => {
  event.preventDefault();
  input.removeAttribute('readonly');
});

let btneditar2 = document.querySelector('#editar2');
let input2 = document.querySelector('#floatingInput');
btneditar2.addEventListener('click', (event) => {
  event.preventDefault();
  input2.removeAttribute('readonly');
});

let btneditar3 = document.querySelector('#editar3');
let input3 = document.querySelector('#floating');
btneditar3.addEventListener('click', (event) => {
  event.preventDefault();
  input3.removeAttribute('readonly');
});
