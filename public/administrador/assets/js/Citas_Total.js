




  function tabladoctors() {
    // /appointments/filters/Canceledmonthly
    // Realizedweekly
    fetch('http://localhost:3000/api/appointments')
      .then((response) => response.json())
      .then((Total) => {
        let tabla_Totalcitas = document.querySelector('#Citas_Total tbody');
        //select v.id, v.hour, v.date, use.name, sp.speciality, us.name as paciente, s.status
        //tabla_Canceladascitas.reset();
        //table.tbody.reset()
        let i=0;

        for (const itemCanceladas of Total) {
          const fecha = itemCanceladas.date.split('T');
          let tr =
          '<td>' +
          (i+=1) +
          '</td><td>' +
            itemCanceladas.hour +
            '</td><td>' +
            fecha[0] +
            '</td><td>' +
            itemCanceladas.name +
            '</td><td>' +
            itemCanceladas.speciality +
            '</td><td>'+
            itemCanceladas.paciente +
            '</td><td>'+
            itemCanceladas.status +
            '</td></td>';

          tabla_Totalcitas.innerHTML += tr;
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
