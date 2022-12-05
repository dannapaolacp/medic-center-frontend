let buttonLogin = document.getElementById('buttonLogin');
let cc = document.getElementById('cc');
let password = document.getElementById('password');
let role = 3;
let cc1 = '1000';
let pas = 'marlo';
buttonLogin.addEventListener('click', (event) => {
  if (cc.value == cc1 && password.value === pas) {
    if (role == 1) {
      Swal.fire({
        icon: 'success',
        title: 'Validado correctamente!!',
      }).then(function () {
        window.location = '/administrador';
      });
    } else if (role == 2) {
      Swal.fire({
        icon: 'success',
        title: 'Validado correctamente!!',
      }).then(function () {
        window.location = '/medicos';
      });
    } else if (role == 3) {
      Swal.fire({
        icon: 'success',
        title: 'Validado correctamente!!',
      }).then(function () {
        window.location = '/pacientes';
      });
    }
  }
});

// const getUser = async () => {
//   const cedu = 1000;
//   const data = await fetch(`http://localhost:3000/api/patient/${cedu}`);
//   const patients = await data.json();
//   console.log(patients);
//   let ced = document.getElementById('cc');
//   let names = document.getElementById('names');
//   let email = document.getElementById('email');
//   let phone = document.getElementById('phone');
//   let age = document.getElementById('age');
//   let birth = document.querySelector('input[type="date"]');
//   let weight = document.getElementById('weight');
//   let height = document.getElementById('height');
//   ced.value = patients.cc;
//   names.value = patients.name;
//   email.value = patients.email;
//   phone.value = patients.phone;
//   age.value = patients.age;
//   birth.value = 'patients.birth';
//   weight.value = patients.weight;
//   height.value = patients.height;
// };

// getUser();
