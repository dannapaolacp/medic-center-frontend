let buttonLogin = document.getElementById('buttonLogin');

buttonLogin.addEventListener('click', async (event) => {
  let cc = document.getElementById('cc');
  let password = document.getElementById('password');

  let login = {
    username: cc.value,
    password: password.value,
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
    let logincedula = await getUser();

    function cedulaLogeo(loginced) {
      document.cookie = `cc = ${logincedula};max-age=3600;path=/pacientes`;
    }

    if (logins.role === 'administrator') {
      Swal.fire({
        icon: 'success',
        title: 'Validado correctamente!!',
      }).then(function () {
        window.location = '/administrador';
      });
    } else if (logins.role === 'medic') {
      Swal.fire({
        icon: 'success',
        title: 'Validado correctamente!!',
      }).then(function () {
        window.location = '/medicos';
      });
    } else if (logins.role == 'patient') {
      Swal.fire({
        icon: 'success',
        title: 'Validado correctamente!!',
      }).then(function () {
        window.location = '/pacientes';
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'No se encontraron datos relacionados pruebe nuevamente!!',
      });
    }
    cedulaLogeo(logincedula);
  };
});
