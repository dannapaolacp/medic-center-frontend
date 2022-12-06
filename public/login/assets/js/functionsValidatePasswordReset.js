let buttonValidate1 = document.getElementById('btnValidate1');

// validar cc

buttonValidate1.addEventListener('click', () => {
  let cc = document.getElementById('cc');

  let login = {
    cc: cc.value,
  };
  let loginJson = JSON.stringify(login);

  const getUser = async () => {
    const data = await fetch('http://localhost:3000/auth/login', {
      method: 'Post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: loginJson,
    });
    const logins = await data.json();
    let logincedula = logins.id;
    console.log(logincedula);

    if (logins.role === 'administrator') {
      Swal.fire({
        icon: 'success',
        title: 'Validado correctamente!!',
      }).then(function () {
        window.location = '/administrador';
        function cedulaLogeo(loginced) {
          document.cookie = `cc = ${loginced};max-age=3600;path=/administrador`;
        }
        cedulaLogeo(logincedula);
      });
    } else if (logins.role === 'medic') {
      Swal.fire({
        icon: 'success',
        title: 'Validado correctamente!!',
      }).then(function () {
        window.location = '/medicos';
        function cedulaLogeo(loginced) {
          document.cookie = `cc = ${loginced};max-age=3600;path=/medicos`;
        }
        cedulaLogeo(logincedula);
      });
    } else if (logins.role == 'patient') {
      Swal.fire({
        icon: 'success',
        title: 'Validado correctamente!!',
      }).then(function () {
        window.location = '/pacientes';
        function cedulaLogeo(loginced) {
          document.cookie = `cc = ${loginced};max-age=3600;path=/pacientes`;
        }
        cedulaLogeo(logincedula);
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'No se encontraron datos relacionados pruebe nuevamente!!',
      });
    }
  };
  getUser();

  if (cc.value == aux) {
    Swal.fire({
      icon: 'success',
      title: 'COMPROBADO!',
      text: 'Se valido correctamente su cédula',
    }).then(function () {
      window.location = 'validatePasswordReset2.html';
    });
    return true;
  } else if (cc.value != aux) {
    Swal.fire({
      icon: 'error',
      title: 'DENEGADO!',
      text: 'Cedula no registrada en el sistema',
    });
    cc.value = '';
    cc.focus();
    return false;
  }
});
