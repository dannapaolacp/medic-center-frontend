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

function tableViewDate() {
  fetch(`http://localhost:3000/api/appointments/patients/${cookieccs}/prev`)
    .then((response) => response.json())
    .then((viewDate) => {
      let i = 0;
      let tableViewDate = document.querySelector('#table-viewDate tbody');

      for (const itemViewDate of viewDate) {
        const fecha = itemViewDate.date.split('T');
        let tr = `<tr> <td>
          ${(i += 1)}
          </td><td>
          ${itemViewDate.hour}
          </td><td>
          ${fecha[0]}
          </td><td>
          ${itemViewDate.speciality}
          </td><td>
          ${itemViewDate.name}
          </td><td>
          ${itemViewDate.status}
        </tr>`;

        tableViewDate.innerHTML += tr;
      }
    });
}

tableViewDate();
