let buttonSave = document.getElementById('btnSave');

// validar contraseña

buttonSave.addEventListener('click', ()=>{
    let pass1 = document.getElementById("password1");
    let pass2 = document.getElementById("password2");
    if (pass1.value == pass2.value) {
      Swal.fire({
        icon: 'success',
        title: 'COMPROBADO!',
        text: 'Se guardo correctamente su contraseña',
      }).then(function() {
        window.location = "index.html";
    });
      return true;
    } else if (pass1.value != pass2.value) {
      Swal.fire({
        icon: 'error',
        title: 'DENEGADO!',
        text: 'Las contraseñas no coinciden, intente nuevamente',
      });
      pass1.value = '';
      pass2.value = '';
      pass1.focus();
      return false;
    }
  });