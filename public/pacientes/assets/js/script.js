function tabladoctors() {
  fetch('http://localhost:3000/api/medics')
    .then((response) => response.json())
    .then((doctors) => {
      let tablaDoctors = document.querySelector('#table-doctors tbody');

      for (const itemDoctors of doctors) {
        let tr =
          '<tr> <td>' +
          itemDoctors.name +
          '</td><td>' +
          itemDoctors.phone +
          '</td><td>' +
          itemDoctors.email +
          '</td><td>' +
          itemDoctors.speciality +
          '</td></tr>';

        tablaDoctors.innerHTML += tr;
      }
    });
}

tabladoctors();
