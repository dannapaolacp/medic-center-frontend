function tableViewDate() {
    fetch('http://localhost:3000/api/viewDate')
      .then((response) => response.json())
      .then((viewDate) => {
        let tableViewDate = document.querySelector('#table-viewDate tbody');        

        for (const itemViewDate of viewDate) {
          let tr =
            '<tr> <td>' +
            itemViewDate.id +
            '</td><td>' +
            itemViewDate.hour +
            '</td><td>' +
            itemViewDate.speciality +
            '</td><td>' +
            itemViewDate.doctor +
            '</td></tr>' +            
            itemViewDate.id_visit_status +
            '</td></tr>';
  
          tableViewDate.innerHTML += tr;
        }
      });
  }
  
tableViewDate();
  