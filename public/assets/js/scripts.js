$('#registrationbutton').click(() => {
  let registrationPrueba = {
    cc: 123456789,
    name: 'Marl',
    password: 'Marl',
    phone: '63',
    email: 'a@gmail.com',
    age: 40,
    weight: 64,
    height: 1.7,
    birth: '2000-01-10',
    // answer: answer.value,
    // response: response.value,
  };

  console.table(registrationPrueba);
  let registrationJson = JSON.stringify(registrationPrueba);
  console.log(registrationJson);

  fetch('http://localhost:3000/api/patients', {
    method: 'Post',
    body: registrationJson,
  });

  // if (password.value === passwordConfirm.value) {
  //   let registration = {
  //     cc: cc.value,
  //     name: names.value,
  //     password: password.value,
  //     phone: phone.value,
  //     email: email.value,
  //     age: age.value,
  //     weight: weight.value,
  //     height: height.value,
  //     birth: birth.value,
  //     // answer: answer.value,
  //     // response: response.value,
  //   };

  //   console.table(registration);
  //   let registrationJson = JSON.stringify(registration);
  //   console.log(registrationJson);

  //   fetch('http://localhost:3000/api/patients', {
  //     method: 'Post',
  //     body: registrationJson,
  //   });
  // } else {
  //   Swal.fire({
  //     icon: 'error',
  //     title: 'ERROR!!',
  //     text: 'La contraseña es diferente',
  //   });
  //   passwordConfirm.value = '';
  //   passwordConfirm.focus();
  //   return false;
  // }
});
