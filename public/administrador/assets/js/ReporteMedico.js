




  function tabladoctors() {
    // /appointments/filters/Canceledmonthly
    // Realizedweekly

    fetch('http://localhost:3000/api/medics')
      .then((response) => response.json())
      .then((Medico) => {
        let tabla_Totalmedicos = document.querySelector('#table_doctors tbody');
        //select v.id, v.hour, v.date, use.name, sp.speciality, us.name as paciente, s.status
        //tabla_Canceladascitas.reset();
        //table.tbody.reset()

        //SELECT u.cc, u.name, u.phone, u.email, s.speciality
        for (const itemMedico of Medico) {
          let tr =
          '<td>' +
            itemMedico.cc +
            '</td><td>' +
            itemMedico.name +
            '</td><td>' +
            itemMedico.phone +
            '</td><td>' +
            itemMedico.email +
            '</td><td>'+
            itemMedico.speciality +
            '</td>';

          tabla_Totalmedicos.innerHTML += tr;
        }
      });
  }

  tabladoctors();
/*

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

tabladoctors();*/
