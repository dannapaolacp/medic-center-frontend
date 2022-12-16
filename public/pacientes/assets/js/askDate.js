const btn=document.querySelector('#btnCitas');
btn.addEventListener('click',(event)=>{
  event.preventDefault();
  /*//Horario
  const hora= document.querySelector('#inputHora');
  const minutos= document.querySelector('#inputHminutos');
  const pm= document.querySelector('#pm');*/
  //Fecha
  let fecha= document.querySelector('#inputFecha');
//cedula
  let cc= document.querySelector('#cc');
  let doctor= document.querySelector('#doctorSelect');
  let servicio= document.querySelector('#servicioSelect');
  let descri= document.querySelector('#description');


 console.log(typeof fecha);
 console.log(fecha.value);
 console.log(typeof cc);
 console.log(cc.value);
 console.log(typeof doctor);
 console.log(doctor.value);
 console.log(typeof servicio);
 console.log(servicio.value);
 console.log(typeof descri);
 console.log(descri.value);

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

/*
//hora

function capturar(){
  function hora1(hora,minutos,pm){
    this.hora=hora;
    this.minutos=minutos;
    this.pm=pm;
  }
  agregar();
}
var hora1 =new hora1(hora.value,minutos.value,pm.value);
console.log(hora1);
var lista =[];
function agregar(){
  lista.push(hora1);
  console.log(lista);
}
*/



});
/*if (actualD==5||actualD==6) {

  Swal.fire({
    icon: 'error',
    title: 'ERROR!!',
    text: 'Lo sentimos, los fines de semana no atendemos, porfavor selecione de nuevo la fecha ',
  });
  fecha.value = '';
  fecha.focus();
  return false;
}
});
8:00 am - 8:30 am
8:30 am - 9:00 am
9:00 am - 9:30 am
9:30 am - 10:00 am
10:00 am - 10:30 am
10:30 am - 11:00 am
11:00 am - 11:30 am
11:30 am - 12:00 pm
GIAN FRANCO DUARTE POLO14:40
1:00 pm - 1:30 pm
1:30 pm - 2:00 pm
2:00 pm - 2:30 pm
2:30 pm - 3:00 pm
3:00 pm - 3:30 pm
3:30 pm - 4:00 pm
4:00 pm - 4:30 pm
4:30 pm - 5:00 pm
5:00 pm - 5:30 pm
5:30 pm - 6:00 pm*/
