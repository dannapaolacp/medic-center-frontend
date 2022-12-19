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

let buttonValidate1 = document.getElementById('btnValidate1');

buttonValidate1.addEventListener('click', () => {
  let cc = document.getElementById('cc');
  document.cookie = `cc = ${cc.value}`;
  const cookiecc2 = getCookies('cc');
  const getUser = async () => {
    const data = await fetch(`http://localhost:3000/api/recovery/${cookiecc2}`);
    const users = await data.json();
    if (cc.value == users.cc) {
      Swal.fire({
        icon: 'success',
        title: 'COMPROBADO!',
        text: 'Se valido correctamente su cedula',
      }).then(function () {
        window.location = 'validatePasswordReset2.html';
      });
      return true;
    } else if (cc.value != users.cc) {
      Swal.fire({
        icon: 'error',
        title: 'DENEGADO!',
        text: 'El usuario no existe en la base de datos',
      });
      cc.value = '';
      cc.focus();
      return false;
    }
  };

  getUser();
});
