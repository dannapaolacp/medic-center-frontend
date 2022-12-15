const getCookies = (namess) => {
  let nameEQ = namess + '=';
  let ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};
const cookiecc2 = getCookies('cc');

let buttonSave = document.getElementById('btnSave');

// validar contraseña

buttonSave.addEventListener('click', () => {
  let pass1 = document.getElementById('password1');
  let pass2 = document.getElementById('password2');

  if (pass1.value === pass2.value) {
    let newpassword = {
      password: pass1.value,
    };
    let passwordJson = JSON.stringify(newpassword);
    const putPassword = async () => {
      const data = await fetch(`http://localhost:3000/api/user/${cookiecc2}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: passwordJson,
      });
    };
    putPassword();
    Swal.fire({
      icon: 'success',
      title: 'COMPROBADO!',
      text: 'Se guardo correctamente su contraseña',
    }).then(function () {
      window.location = 'index.html';
    });

    return true;
  } else if (pass1.value != pass2.value) {
    Swal.fire({
      icon: 'error',
      title: 'DENEGADO!',
      text: 'Las contraseñas no coinciden, intente nuevamente',
    });
    pass1.value = '';
    pass2.value = '';
    pass1.focus();
    return false;
  }
});
