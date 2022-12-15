const getCookie = (name) => {
  let nameEQ = name + '=';
  let ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};

const cookiecc = getCookie('cc');
console.log(cookiecc);
const getuser = async (cookiecc) => {
  const data = await fetch(`http://localhost:3000/api/admin/${cookiecc}`);
  const patients = await data.json();
  let nameProfile = document.getElementById('nameProfile');
  nameProfile.innerHTML = `Administrador ${patients.name}`;
};

getuser(cookiecc);
