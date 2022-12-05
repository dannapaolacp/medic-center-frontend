// function tabladoctors() {
//   fetch('http://localhost:3000/api/medics')
//     .then((response) => response.json())
//     .then((doctors) => {
//       let tablaDoctors = document.querySelector('#table-doctors tbody');

//       for (const itemDoctors of doctors) {
//         let tr =
//           '<tr> <td>' +
//           itemDoctors.name +
//           '</td><td>' +
//           itemDoctors.phone +
//           '</td><td>' +
//           itemDoctors.email +
//           '</td><td>' +
//           itemDoctors.speciality +
//           '</td></tr>';

//         tablaDoctors.innerHTML += tr;
//       }
//     });
// }

// tabladoctors();

const getUser = async () => {
  const cedu = 1000;
  const data = await fetch(`http://localhost:3000/api/patient/${cedu}`);
  const patients = await data.json();
  console.log(patients);
  let ced = document.getElementById('cc');
  let names = document.getElementById('names');
  let email = document.getElementById('email');
  let phone = document.getElementById('phone');
  let age = document.getElementById('age');
  let birth = document.querySelector('input[type="date"]');
  let weight = document.getElementById('weight');
  let height = document.getElementById('height');
  ced.value = patients.cc;
  names.value = patients.name;
  email.value = patients.email;
  phone.value = patients.phone;
  age.value = patients.age;
  birth.value = 'patients.birth';
  weight.value = patients.weight;
  height.value = patients.height;
};

getUser();
