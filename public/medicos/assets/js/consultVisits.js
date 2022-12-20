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

function tableVisits() {
  fetch(`http://localhost:3000/api/appointments/medics/${cookiescc}`)
    .then((response) => response.json())
    .then((visits) => {
      let tablaVisits = document.querySelector('#table-visits tbody');
      let dir = "'actualizarVisita.html'";
      let icono =
        '<button class="mt-3" style="right: 50px; border: 0;" id="actualizar"><img style="width: 30px; height: 30px;"' +
        'onclick="location.href=' +
        dir +
        '"' +
        'src="assets/img/confirmacion.png"' +
        'alt="visita"' +
        '/></button> ';
      let i = 0;
      for (const itemVisits of visits) {
        const fecha = itemVisits.date.split('T');
        let tr =
          '<tr> <td>' +
          (i += 1) +
          '</td><td>' +
          itemVisits.hour +
          '</td><td>' +
          fecha[0] +
          '</td><td>' +
          itemVisits.status +
          '</td><td>' +
          icono +
          '</td></tr>';

        tablaVisits.innerHTML += tr;
      }
    });
}

tableVisits();
