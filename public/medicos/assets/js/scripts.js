const getUser = async () => {
  const cedu = 12443;
  const data = await fetch(`http://localhost:3000/api/medic/${cedu}`);
  const medic = await data.json();
  console.log(medic);
  let ced = document.getElementById('cedula');
  let names = document.getElementById('names');
  let email = document.getElementById('email');
  let phone = document.getElementById('phone');
  let speciality = document.getElementById('specialty');
  ced.value = medic.cc;
  names.value = medic.name;
  email.value = medic.email;
  phone.value = medic.phone;
  speciality.value = medic.role;
};

getUser();
