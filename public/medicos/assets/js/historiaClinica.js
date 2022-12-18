function tableClinicHistoryHead() {
    fetch('http://localhost:3000/api/clinicHistoryHead')
      .then((response) => response.json())
      .then((clinicHistory) => {
        let tablaClinicHistory = document.querySelector('table-clinic-history tHead trHead');              
        for (const itemClinicHistory of clinicHistory) {
          let tr =
            '<td>' +
            itemClinicHistory.id +
            '</td><td>' +
            itemClinicHistory.cc +
            '</td><td>' +
            itemClinicHistory.name + 
            '</td><td>' +
            itemClinicHistory.age +   
            '</td><td>' +
            itemClinicHistory.height +
            '</td><td>' +
            itemClinicHistory.weight +
            '</td><td>' +
            itemClinicHistory.birth +        
            '</td>';
          tablaClinicHistory.innerHTML += tr;
        }
      });
  }

function tableClinicHistoryBody() {
    fetch('http://localhost:3000/api/clinicHistoryBody')
      .then((response) => response.json())
      .then((clinicHistory) => {
        let tablaClinicHistory = document.querySelector('table-clinic-history tbody');              
        for (const itemClinicHistory of clinicHistory) {
          let tr =
            '<tr> <td>' +
            itemClinicHistory.date +
            '</td><td colspan="5">' +
            itemClinicHistory.description +
            '</td><td>' +
            itemClinicHistory.specialty +
            '</td></tr>';
          tablaClinicHistory.innerHTML += tr;
        }
      });
  }

  tableClinicHistoryHead();
  tableClinicHistoryBody();