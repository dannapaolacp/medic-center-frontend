let buttonValidate1 = document.getElementById('btnValidate1');

// validar cc

buttonValidate1.addEventListener('click', ()=>{
    let cc = document.getElementById("cc");
    let aux = 123;
    if (cc.value == aux) {
      Swal.fire({
        icon: 'success',
        title: 'COMPROBADO!',
        text: 'Se valido correctamente su cédula',
      }).then(function() {
        window.location = "validatePasswordReset2.html";
    });
      return true;
    } else if (cc.value != aux) {
      Swal.fire({
        icon: 'error',
        title: 'DENEGADO!',
        text: 'Cedula no registrada en el sistema',
      });
      cc.value = '';
      cc.focus();
      return false;
    }
  });