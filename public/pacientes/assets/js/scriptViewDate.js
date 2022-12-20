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

const cookieccs = getCookies('cc');
console.log(cookieccs);
let idVisit;

function tableViewDate() {
  fetch(`http://localhost:3000/api/appointments/patients/${cookieccs}`)
    .then((response) => response.json())
    .then((viewDate) => {
      let i = 0;
      // let tableViewDate = document.querySelector('#table-viewDate tbody');
      let tableviewBody = document.querySelector('#table-view-body');

      for (const itemViewDate of viewDate) {
        let trgeneral = document.createElement('tr');
        let tdid = document.createElement('td');
        let tddate = document.createElement('td');
        let tdhour = document.createElement('td');
        let tdspecialty = document.createElement('td');
        let tddoct = document.createElement('td');
        let tdstatus = document.createElement('td');
        let tdbtncancelar = document.createElement('td');
        let btncancelar = document.createElement('button');
        btncancelar.setAttribute('class', 'btn btn-danger');
        btncancelar.setAttribute('name', `${itemViewDate.id}`);
        btncancelar.append('Cancelar');
        // let btnc = document.getElementsByName('btncancelar');
        // let registration;
        // let registrationJson;
        // btnc.addEventListener('click', () => {
        //   const udpateUser = async () => {
        //     const data = await fetch(
        //       `http://localhost:3000/api/patient/${btnc.value}`,
        //       {
        //         method: 'put',
        //         body: registrationJson,
        //         headers: {
        //           'Content-Type': 'application/json',
        //         },
        //       }
        //     );
        //   };
        //   registration = {
        //     status: 'Cancelada',
        //   };
        //   Swal.fire({
        //     icon: 'success',
        //     title: 'Se ha editado el estado de su cita correctamente!!',
        //   }).then(function () {
        //     window.location = '/pacientes';
        //   });

        //   udpateUser();
        // });

        const fecha = itemViewDate.date.split('T');
        tdid.append(`${(i += 1)}`);
        tdhour.append(`${itemViewDate.hour}`);
        tddate.append(`${fecha[0]}`);
        tdspecialty.append(`${itemViewDate.speciality}`);
        tddoct.append(`${itemViewDate.name}`);
        tdstatus.append(`${itemViewDate.status}`);
        tdbtncancelar.appendChild(btncancelar);
        trgeneral.appendChild(tdid);
        trgeneral.appendChild(tdhour);
        trgeneral.appendChild(tddate);
        trgeneral.appendChild(tdspecialty);
        trgeneral.appendChild(tddoct);
        trgeneral.appendChild(tdstatus);
        trgeneral.appendChild(tdbtncancelar);
        tableviewBody.appendChild(trgeneral);

        //   let tr = `<tr> <td>
        //     ${(i += 1)}
        //     </td><td>
        //     ${itemViewDate.hour}
        //     </td><td>
        //     ${fecha[0]}
        //     </td><td>
        //     ${itemViewDate.speciality}
        //     </td><td>
        //     ${itemViewDate.name}
        //     </td><td>
        //     ${itemViewDate.status}
        //   <td><button class="mt-3" style="right: 50px; border: 0;" name="${
        //     itemViewDate.id
        //   }" id="${itemViewDate.id}"><img style="width: 30px; height: 30px;"
        //   document.cookie = 'id = ${itemViewDate.id};max-age=3600;';
        //   src="assets/img/cancelar.png"
        //   alt="cita"
        //   title="cancelar"
        //   ></button></td></tr>`;
        //   tableViewDate.innerHTML += tr;
        //   document
        //     .getElementById(`${itemViewDate.id}`)
        //     .addEventListener('click', (event) => {
        //       event.preventDefault();
        //       console.log(event.);
        //     });
      }
    });
}

tableViewDate();
