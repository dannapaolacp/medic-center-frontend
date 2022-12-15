let buttonEnviar = document.getElementById('registrationbutton');

buttonEnviar.addEventListener('click', function (event) {
  event.preventDefault();
  let form = document.getElementById('registrationform');
  let cc = document.getElementById('cc');
  let names = document.getElementById('names');
  let email = document.getElementById('email');
  let phone = document.getElementById('phone');
  let speciality = document.getElementById('speciality');
  let selectedOption = speciality.options[speciality.selectedIndex];
  console.log(selectedOption.value);
  let password = document.getElementById('password');
  let passwordConfirm = document.getElementById('passwordConfirm');
  let answer = document.getElementById('answer');
  let response = document.getElementById('response');

  if (cc.value == 0) {
    Swal.fire({
      icon: 'error',
      title: 'ERROR!!',
      text: 'Debe insertar su tarjeta profesional',
    });
    cc.value = '';
    cc.focus();
    return false;
  } else if (cc.value <= 0) {
    Swal.fire({
      icon: 'error',
      title: 'ERROR!!',
      text: 'Debe insertar su número de tarjeta profesional correctamente',
    });
    cc.value = '';
    cc.focus();
    return false;
  }
  if (names.value == 0) {
    Swal.fire({
      icon: 'error',
      title: 'ERROR!!',
      text: 'Debe insertar su nombre',
    });
    names.value = '';
    names.focus();
    return false;
  }
  const patternn = new RegExp('^[A-Z ]+$', 'i');
  if (!patternn.test(names.value)) {
    Swal.fire({
      icon: 'error',
      title: 'ERROR!!',
      text: 'No debe tener numeros ni caracteres especiales en el nombre',
    });
    names.value = '';
    names.focus();
    return false;
  }
  if (email.value == 0) {
    Swal.fire({
      icon: 'error',
      title: 'ERROR!!',
      text: 'Debe insertar su correo',
    });
    email.value = '';
    email.focus();
    return false;
  }
  let Regular = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  const valido = Regular.test(email.value);
  if (valido == false) {
    Swal.fire({
      icon: 'error',
      title: 'ERROR!!',
      text: 'Correo no valido',
    });
    email.value = '';
    email.focus();
    return false;
  }
  if (phone.value == 0) {
    Swal.fire({
      icon: 'error',
      title: 'ERROR!!',
      text: 'Debe insertar su telefono',
    });
    phone.value = '';
    phone.focus();
    return false;
  } else if (phone.value <= 0) {
    Swal.fire({
      icon: 'error',
      title: 'ERROR!!',
      text: 'Debe insertar su numero de telefono correctamente',
    });
    phone.value = '';
    phone.focus();
    return false;
  }
  if (speciality.value == 'Seleccione') {
    Swal.fire({
      icon: 'error',
      title: 'ERROR!!',
      text: 'Seleccione una pregunta adecuada',
    });
    speciality.value = '';
    speciality.focus();
    return false;
  } else if (speciality.value == 0) {
    Swal.fire({
      icon: 'error',
      title: 'ERROR!!',
      text: 'Seleccione una pregunta adecuada',
    });
    speciality.value = '';
    speciality.focus();
    return false;
  }
  if (password.value == 0) {
    Swal.fire({
      icon: 'error',
      title: 'ERROR!!',
      text: 'Debe insertar su contraseña',
    });
    password.value = '';
    password.focus();
    return false;
  }
  if (passwordConfirm.value == 0) {
    Swal.fire({
      icon: 'error',
      title: 'ERROR!!',
      text: 'Debe insertar su comprobación de contraseña',
    });
    passwordConfirm.value = '';
    passwordConfirm.focus();
    return false;
  }
  if (answer.value == 'Seleccione la pregunta de seguridad') {
    Swal.fire({
      icon: 'error',
      title: 'ERROR!!',
      text: 'Debe escoger una pregunta',
    });
    answer.value = '';
    answer.focus();
    return false;
  } else if (answer.value == 0) {
    Swal.fire({
      icon: 'error',
      title: 'ERROR!!',
      text: 'Debe escoger una pregunta',
    });
    answer.value = '';
    answer.focus();
    return false;
  }
  if (response.value == 0) {
    Swal.fire({
      icon: 'error',
      title: 'ERROR!!',
      text: 'Debe insertar su respuesta de seguridad',
    });
    response.value = '';
    response.focus();
    return false;
  }
  if (password.value === passwordConfirm.value) {
    let registration = {
      cc: Number(cc.value),
      name: names.value,
      password: password.value,
      phone: phone.value,
      email: email.value,
      specialityTitle: selectedOption.value,
      question: answer.value,
      answer: response.value,
    };

    console.table(registration);
    let registrationJson = JSON.stringify(registration);
    console.log(registrationJson);

    fetch('http://localhost:3000/api/medics', {
      method: 'Post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: registrationJson,
    });
    Swal.fire({
      icon: 'success',
      title: 'Se ha creado tu usuario correctamente!!',
    }).then(function () {
      window.location = '/administrador';
    });
  } else {
    Swal.fire({
      icon: 'error',
      title: 'ERROR!!',
      text: 'La contraseña es diferente',
    });
    passwordConfirm.value = '';
    passwordConfirm.focus();
    return false;
  }
});
