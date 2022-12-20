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
let buttonValidate2 = document.getElementById('btnValidate2');

const getUser = async () => {
  const data = await fetch(`http://localhost:3000/api/recovery/${cookiecc2}`);
  const users = await data.json();
  console.log(users);
  question.innerHTML = users.question;
};

getUser();

buttonValidate2.addEventListener('click', () => {
  const getValidate = async () => {
    let answer = document.getElementById('answer');
    let validate = {
      answer: answer.value,
    };

    let validateJson = JSON.stringify(validate);
    const data = await fetch(
      `http://localhost:3000/api/recovery/validate/${cookiecc2}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: validateJson,
      }
    );
    if (data.status == 200) {
      Swal.fire({
        icon: 'success',
        title: 'COMPROBADO!',
        text: 'Se valido correctamente su respuesta',
      }).then(function () {
        window.location = 'passwordReset.html';
      });
      console.log(answer.value);
      return true;
    } else if (data.status != 200) {
      Swal.fire({
        icon: 'error',
        title: 'DENEGADO!',
        text: 'La respuesta no coincide',
      });
      answer.value = '';
      answer.focus();
      return false;
    }
  };

  getValidate();
});
