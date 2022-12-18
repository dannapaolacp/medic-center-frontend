function tableViewDate() {
    fetch('http://localhost:3000/api/viewDate')
      .then((response) => response.json())
      .then((viewDate) => {
        let tableViewDate = document.querySelector('#table-viewDate tbody');        
        let dirM = "'modifyAppointment.html'";          
        let iconoM = '<button class="mt-3" style="right: 50px; border: 0;" id="actualizar"><img style="width: 30px; height: 30px;"'                        
        + 'onclick="location.href='+ dirM +'"'
        + 'src="assets/img/lapiz.png"'
        + 'alt="cita"'
        + 'title="editar"'
        + '/></button> '; 
        let dirC = "'modifyAppointment.html'";          
        let iconoC = '<button class="mt-3" style="right: 50px; border: 0;" id="actualizar"><img style="width: 30px; height: 30px;"'                        
        + 'onclick="location.href='+ dirC +'"'
        + 'src="assets/img/confirmar.png"'
        + 'alt="cita"'
        + 'title="confirmar"'
        + '/></button> ';
        for (const itemViewDate of viewDate) {
          let tr =
            '<tr> <td>' +
            itemViewDate.id +
            '</td><td>' +
            itemViewDate.hour +
            '</td><td>' +
            itemViewDate.date+
            '</td><td>' +
            itemViewDate.specialty +
            '</td></tr>' +            
            itemViewDate.doctor +
            '</td></tr>' +
            itemViewDate.id_visit_status +
            '</td></tr>' +
            iconoM + iconoC +
            '</td></tr>';             
  
          tableViewDate.innerHTML += tr;
        }
      });
  }
  
tableViewDate();
  