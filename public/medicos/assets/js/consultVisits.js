function tableVisits() {
    fetch('http://localhost:3000/api/visits')
      .then((response) => response.json())
      .then((visits) => {
        let tablaVisits = document.querySelector('#table-visits tbody');
        let dir = "'actualizarVisita.html'";          
        let icono = '<button class="mt-3" style="right: 50px; border: 0;" id="actualizar"><img style="width: 30px; height: 30px;"'                        
        + 'onclick="location.href='+ dir +'"'
        + 'src="assets/img/confirmacion.png"'
        + 'alt="visita"'
        + '/></button> ';        
        for (const itemVisits of visits) {
          let tr =
            '<tr> <td>' +
            itemVisits.id +
            '</td><td>' +
            itemVisits.hour +
            '</td><td>' +
            itemVisits.date +
            '</td><td>' +
            itemVisits.description +
            '</td></tr>' +
             icono +
            '</td></tr>';
  
          tablaVisits.innerHTML += tr;
        }
      });
  }
  
  tableVisits();