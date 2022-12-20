let btnConsulta = document.getElementById('consulta');
btnConsulta.addEventListener('click', function (event) {
  event.preventDefault();
  let cc = document.getElementById('cc');
  Swal.fire({
    icon: 'success',
    title: 'Se ha encontrado!!',
  }).then(function () {
    document.cookie = `ccp = ${cc.value};max-age=3600;`;
    window.location = 'mostrarHistoriaClinica.html';
  });
});
