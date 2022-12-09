let buttonDeletePacients = document.getElementById('eliminar');
buttonDeletePacients.addEventListener('click', function (event) {
  event.preventDefault();
  let cc = document.getElementById('cc');
  fetch(`http://localhost:3000/api/patient/${cc.value}`, {
    method: 'DELETE',
  });
  Swal.fire({
    icon: 'success',
    title: 'Se ha eliminado el paciente correctamente!!',
  }).then(function () {
    window.location = '/administrador';
  });
});
