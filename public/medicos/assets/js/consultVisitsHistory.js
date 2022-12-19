const getCookie = (name) => {
    let nameEQ = name + '=';
    let ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  };
  
  const cookiecc = getCookie('cc');
  console.log(cookiecc);
  const getuser = async (cookiecc) => {
    const data = await fetch(`http://localhost:3000/api/medic/${cookiecc}`);
    const doctors = await data.json();
    let nameProfile = document.getElementById('nameProfile');
    nameProfile.innerHTML = `Medico ${doctors.name}`;
  };
  
  getuser(cookiecc);

function tableVisits() {
    fetch(`http://localhost:3000/api/appointments/medics/${cookiecc}/prev`)
      .then((response) => response.json())
      .then((visits) => {
        let tablaVisits = document.querySelector('#table-visits tbody');                
        for (const itemVisits of visits) {
          let tr =
            '<tr> <td>' +
            itemVisits.id +
            '</td><td>' +
            itemVisits.hour +
            '</td><td>' +
            itemVisits.date +
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