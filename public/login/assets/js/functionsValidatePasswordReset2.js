let buttonValidate2 = document.getElementById('btnValidate2');
let q = document.getElementById('question');
  q.innerHTML='Pregunta';


// validar respuesta de pregunta de seguridad

buttonValidate2.addEventListener('click', () => {  
  let answer = document.getElementById("answer");
    let aux = "Rosa";    

    if (answer.value == aux) {
      Swal.fire({
        icon: 'success',
        title: 'COMPROBADO!',
        text: 'Se valido correctamente su respuesta',
      }).then(function() {
        window.location = "passwordReset.html";
    });
      console.log(answer.value);
      return true;
    } else if (answer.value != aux) {
      Swal.fire({
        icon: 'error',
        title: 'DENEGADO!',
        text: 'La respuesta no coincide',
      });
      answer.value = '';
      answer.focus();      
      console.log(`No es correcto, es ${aux}`);
      return false;
    }
});
