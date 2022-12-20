const getCookies = (name) => {
  let nameEQ = name + '=';
  let ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};

const cookieccs = getCookies('ccp');

function tableClinicHistoryHead() {
  fetch(`http://localhost:3000/api/medicalHistory/${cookieccs}`)
    .then((response) => response.json())
    .then((clinicHistory) => {
      let tablaClinicHistory = document.querySelector(
        '#table-clinic-history tHead'
      );
      console.log(clinicHistory);
      // for (const itemClinicHistory of clinicHistory) {
      const fecha = clinicHistory[0].date.split('T');
      let tr =
        '<tr><td>' +
        clinicHistory[0].id +
        '</td><td>' +
        clinicHistory[0].cc_patients +
        '</td><td>' +
        clinicHistory[0].name +
        '</td><td>' +
        clinicHistory[0].age +
        '</td><td>' +
        clinicHistory[0].height +
        '</td><td>' +
        clinicHistory[0].weight +
        '</td><td>' +
        fecha[0] +
        '</td></tr>';
      tablaClinicHistory.innerHTML += tr;
      //}
    });
}

function tableClinicHistoryBody() {
  fetch(`http://localhost:3000/api/medicalHistory/${cookieccs}`)
    .then((response) => response.json())
    .then((clinicHistory) => {
      let tablaClinicHistory = document.querySelector(
        '#table-clinic-history tbody'
      );
      for (const itemClinicHistory of clinicHistory) {
        const fecha = itemClinicHistory.date.split('T');
        let tr =
          '<tr> <td>' +
          fecha[0] +
          '</td><td colspan="5">' +
          itemClinicHistory.description +
          '</td><td>' +
          itemClinicHistory.speciality +
          '</td></tr>';
        tablaClinicHistory.innerHTML += tr;
      }
    });
}

tableClinicHistoryHead();
tableClinicHistoryBody();
