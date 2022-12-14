let buttonEnviar = document.getElementById('registrationbutton');

buttonEnviar.addEventListener('click', function () {
  let cc = document.getElementById('cc');
  let names = document.getElementById('names');
  let password = document.getElementById('password');
  let passwordConfirm = document.getElementById('passwordConfirm');
  let phone = document.getElementById('phone');
  let email = document.getElementById('email');
  let weight = document.getElementById('weight');
  let height = document.getElementById('height');
  //let age = document.getElementById('age');
  let birth = document.getElementById('birth');
  let answer = document.getElementById('answer');
  let response = document.getElementById('response');

  if (cc.value == 0) {
    Swal.fire({
      icon: 'error',
      title: 'ERROR!!',
      text: 'Debe insertar su cedula',
    });
    cc.value = '';
    cc.focus();
    return false;
  } else if (cc.value <= 0) {
    Swal.fire({
      icon: 'error',
      title: 'ERROR!!',
      text: 'Debe insertar su cedula correctamente',
    });
    cc.value = '';
    cc.focus();
    return false;
  }

  const Edad = () => {
    const date = new Date();
    const actualA = parseInt(date.getFullYear());
    const actualM = parseInt(date.getMonth() + 1);
    const actualD = parseInt(date.getDate());
    //Datos usuario
    const anoNacimiento = parseInt(String(birth.value).substring(0, 4));
    const Mes = parseInt(String(birth.value).substring(5, 7));
    const dia = parseInt(String(birth.value).substring(8, 10));

    let edad = actualA - anoNacimiento;
    if (actualM < Mes) {
      edad--;
    } else if (actualM === Mes) {
      if (actualD < dia) {
        edad--;
      }
    }
    return edad;
  };
  var a = Edad();
  console.log(a);
  if (a <= 1) {
    Swal.fire({
      icon: 'error',
      title: 'ERROR!!',
      text: 'Edad menor a un año',
    });
    birth.value = '';
    birth.focus();
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
      text: 'Debe insertar un numero de telefono correctamente',
    });
    phone.value = '';
    phone.focus();
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
  if (weight.value == 0) {
    Swal.fire({
      icon: 'error',
      title: 'ERROR!!',
      text: 'Debe insertar su peso',
    });
    weight.value = '';
    weight.focus();
    return false;
  } else if (weight.value <= 0) {
    Swal.fire({
      icon: 'error',
      title: 'ERROR!!',
      text: 'Debe insertar su peso correctamente',
    });
    weight.value = '';
    weight.focus();
    return false;
  }

  if (height.value == 0) {
    Swal.fire({
      icon: 'error',
      title: 'ERROR!!',
      text: 'Debe insertar su estatura',
    });
    height.value = '';
    height.focus();
    return false;
  } else if (height.value <= 0) {
    Swal.fire({
      icon: 'error',
      title: 'ERROR!!',
      text: 'Debe insertar su estatura correctamente',
    });
    height.value = '';
    height.focus();
    return false;
  }

  if (birth.value == 0) {
    Swal.fire({
      icon: 'error',
      title: 'ERROR!!',
      text: 'Debe insertar su fecha de nacimiento',
    });
    birth.value = '';
    birth.focus();
    return false;
  }
  if (answer.value == 0) {
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
      cc: cc.value,
      name: names.value,
      password: password.value,
      phone: phone.value,
      email: email.value,
      age: a,
      weight: weight.value,
      height: height.value,
      birth: birth.value,
      question: answer.value,
      answer: response.value,
    };

    console.table(registration);
    let registrationJson = JSON.stringify(registration);
    console.log(registrationJson);

    fetch('http://localhost:3000/api/patients', {
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
      window.location = '/login';
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
