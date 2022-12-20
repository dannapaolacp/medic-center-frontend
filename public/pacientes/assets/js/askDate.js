const getCookies = (names) => {
  let nameEQ = names + '=';
  let ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};

const cookieccs = getCookies('cc');
const getusers = async (cookieccs) => {
  const data = await fetch(`http://localhost:3000/api/patient/${cookieccs}`);
  const patients = await data.json();
  let cc1 = document.getElementById('cc1');
  cc1.value = patients.cc;
};

getusers(cookieccs);

const btn = document.querySelector('#btnCitas');
let selectSpecialy = document.querySelector('#servicioSelect');
let doctorSelect = document.querySelector('#doctorSelect');

selectSpecialy.addEventListener('click', (event) => {
  const limpiar = () => {
    for (let i = doctorSelect.options.length; i >= 0; i--) {
      doctorSelect.remove(i);
    }
  };

  limpiar();

  function selectdoctors(speciality) {
    fetch(`http://localhost:3000/api/medics/${speciality}`)
      .then((response) => response.json())
      .then((doctors) => {
        for (const itemDoctors of doctors) {
          let option = `<option value="${itemDoctors.cc}">${itemDoctors.name}</option>`;
          doctorSelect.innerHTML += option;
        }
      });
  }

  event.preventDefault();
  selectdoctors(selectSpecialy.value);
});

btn.addEventListener('click', (event) => {
  event.preventDefault();

  let hora = document.querySelector('#inputHora');
  let date = new Date(hora.value);
  const actualD = parseInt(date.getDay());

  let cc = document.getElementById('cc1');
  let doctor = document.querySelector('#doctorSelect');
  let selectedOption = doctor.options[doctor.selectedIndex];
  let hora1 = hora.value;
  let hora2 = hora1.split(' ');

  if (actualD == 0 || actualD == 6) {
    Swal.fire({
      icon: 'error',
      title: 'ERROR!!',
      text: 'Lo sentimos, los fines de semana no atendemos, porfavor selecione de nuevo la fecha ',
    });
    hora.value = '';
    hora.focus();
    return false;
  }

  let visitasr = {
    hour: hora2[1],
    date: hora2[0],
    cc_patients: cc.value,
    cc_doctors: selectedOption.value,
  };

  console.table(visitasr);
  let visitasJson = JSON.stringify(visitasr);
  console.log(visitasJson);

  fetch('http://localhost:3000/api/appointments', {
    method: 'Post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: visitasJson,
  });
  Swal.fire({
    icon: 'success',
    title: 'Se ha creado su visita correctamente!!',
  }).then(function () {
    window.location = 'index.html';
  });
});
