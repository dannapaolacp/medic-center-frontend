let buttonDeleteMedics = document.getElementById('eliminar');
buttonDeleteMedics.addEventListener('click', function (event) {
  event.preventDefault();
  let cc = document.getElementById('professionalCard');
  fetch(`http://localhost:3000/api/medic/${cc.value}`, {
    method: 'DELETE',
  });
  Swal.fire({
    icon: 'success',
    title: 'Se ha eliminado el doctor correctamente!!',
  }).then(function () {
    window.location = '/administrador';
  });
});
