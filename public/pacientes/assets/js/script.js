function tabladoctores() {
  fetch('http://localhost:3000/api/medics')
    .then((response) => response.json())
    .then((doctors) => {
      console.log(doctors);
    });
}

tabladoctores();
