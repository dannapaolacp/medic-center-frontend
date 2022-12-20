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

const cookiescc = getCookies('cc');
console.log(cookiescc);

function tableVisits() {
  fetch(`http://localhost:3000/api/appointments/medics/${cookiescc}/prev`)
    .then((response) => response.json())
    .then((visits) => {
      let tablaVisits = document.querySelector('#table-visits tbody');
      for (const itemVisits of visits) {
        const fecha = itemVisits.date.split('T');
        let tr =
          '<tr> <td>' +
          itemVisits.id +
          '</td><td>' +
          itemVisits.hour +
          '</td><td>' +
          fecha[0] +
          '</td><td>' +
          itemVisits.name +
          '</td><td>' +
          itemVisits.cc +
          '</td></tr>';

        tablaVisits.innerHTML += tr;
      }
    });
}

tableVisits();
