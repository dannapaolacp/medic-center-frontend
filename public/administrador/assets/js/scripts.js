let buttonDeleteMedics = document.getElementById('eliminar');
let buttonDeletePacients = document.getElementById('eliminar');
buttonDeleteMedics.addEventListener('click', function () {
  let cc = document.getElementById('professionalCard');
  fetch(`http://localhost:3000/api/medic/${cc.value}`, {
    method: 'DELETE',
  });
});

buttonDeletePacients.addEventListener('click', function () {
  let cc = document.getElementById('cc');
  console.log(cc.value);
  fetch(`http://localhost:3000/api/patient/${cc.value}`, {
    method: 'DELETE',
  });
});
