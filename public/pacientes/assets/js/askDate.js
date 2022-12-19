const btn=document.querySelector('#btnCitas');
btn.addEventListener('click',(event)=>{
  event.preventDefault();

  let hora= document.querySelector('#inputHora');

  let date = new Date(hora.value);
  const actualD = parseInt(date.getDay());

//cedula
  let cc= document.querySelector('#cc');
  let doctor= document.querySelector('#doctorSelect');
  let servicio= document.querySelector('#servicioSelect');
  let descri= document.querySelector('#description');

//sub
let hora1=hora.value;
let hora2=hora1.split(" ");


//cedula
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

if (actualD==0||actualD==6) {

  Swal.fire({
    icon: 'error',
    title: 'ERROR!!',
    text: 'Lo sentimos, los fines de semana no atendemos, porfavor selecione de nuevo la fecha ',
  });
  hora.value = '';
  hora.focus();
  return false;
}


});
