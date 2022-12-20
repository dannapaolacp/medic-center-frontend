




function limpiar(){
  document.table.body.reset();
}
const btn=document.getElementById('mensualCitas_R3');

btn.addEventListener('click',function (){
  //event.preventDefault();

  function tabladoctors() {
    // /appointments/filters/Canceledmonthly
    // Realizedweekly
    fetch('http://localhost:3000/api/appointments/filters/Realizedmonthly')
      .then((response) => response.json())
      .then((canceladas) => {
        let tabla_Canceladascitas = document.querySelector('#Tabla_Realizadas tbody');
        //select v.id, v.hour, v.date, use.name, sp.speciality, us.name as paciente, s.status
        //tabla_Canceladascitas.reset();
        //table.tbody.reset()
        let i=0;

        for (const itemCanceladas of canceladas) {
          const fecha = itemCanceladas.date.split('T');
          let tr =
          '<td>' +
          (i+=1) +
          '</td><td>' +
            itemCanceladas.hour +
            '</td><td>' +
            fecha[0] +
            '</td><td>' +
            itemCanceladas.name +
            '</td><td>' +
            itemCanceladas.speciality +
            '</td><td>'+
            itemCanceladas.paciente +
            '</td><td>'+
            itemCanceladas.status +
            '</td></td>';

          tabla_Canceladascitas.innerHTML += tr;
        }
      });
  }

  tabladoctors();
});


const btn1=document.getElementById('semanalCitas_R1');

btn1.addEventListener('click',function (){
  //event.preventDefault();
  function tabladoctors() {
    // /appointments/filters/Canceledmonthly
    // Realizedweekly

    fetch('http://localhost:3000/api/appointments/filters/Realizedbiweekly')
      .then((response) => response.json())
      .then((realizadas) => {
        let tabla_Realizadas = document.querySelector('#Tabla_Realizadas tbody');

        let i=0;
        for (const itemRealizadas of realizadas) {
          const fecha = itemRealizadas.date.split('T');
          let tr =
          '<td>' +
          (i+=1) +
          '</td><td>' +
            itemRealizadas.hour +
            '</td><td>' +
            fecha[0] +
            '</td><td>' +
            itemRealizadas.name +
            '</td><td>' +
            itemRealizadas.speciality +
            '</td><td>'+
            itemRealizadas.paciente +
            '</td><td>'+
            itemRealizadas.status +
            '</td></td>';


          tabla_Realizadas.innerHTML += tr;
        }
      });
  }

  tabladoctors();
});


const btn3=document.getElementById('quincenalCitas_R2');

btn3.addEventListener('click',function (){
  //event.preventDefault();
  function tabladoctors() {
    // /appointments/filters/Canceledmonthly
    // Realizedweekly

    fetch('http://localhost:3000/api/appointments/filters/Realizedbiweekly')
      .then((response) => response.json())
      .then((canceladas) => {
        let tabla_Canceladascitas = document.querySelector('#Tabla_Realizadas tbody');

        let i=0;
        for (const itemCanceladas of canceladas) {
          const fecha = itemCanceladas.date.split('T');
          let tr =
          '<td>' +
          (i+=1) +
          '</td><td>' +
            itemCanceladas.hour +
            '</td><td>' +
            fecha[0] +
            '</td><td>' +
            itemCanceladas.name +
            '</td><td>' +
            itemCanceladas.speciality +
            '</td><td>'+
            itemCanceladas.paciente +
            '</td><td>'+
            itemCanceladas.status +
            '</td></td>';


          tabla_Canceladascitas.innerHTML += tr;
        }
      });
  }

  tabladoctors();
});





const btn4=document.getElementById('semestralCitas_R4');

btn4.addEventListener('click',function (){
  //event.preventDefault();

    //let a=document.getElementById("#Tabla_Realizadas tbody");
    //a.removeAttribute();

  function tabladoctors() {
    // /appointments/filters/Canceledmonthly
    // Realizedweekly

    fetch('http://localhost:3000/api/appointments/filters/Realizedbiannual')
      .then((response) => response.json())
      .then((canceladas) => {
        let tabla_Canceladascitas = document.querySelector('#Tabla_Realizadas tbody');
        //`select v.id, v.hour, v.date, use.name, sp.speciality, us.name as paciente, s.status
        //tabla_Canceladascitas.innerHTML="";
        //tabla_Canceladascitas.removeChild('<th></th>');
        //let arrayGeneral=[];
        //canceladas.forEach(element => {
         // arrayGeneral.push(element);
        //});
        //console.table(arrayGeneral);
        let i=0;
        for (const itemCanceladas of canceladas) {
          const fecha = itemCanceladas.date.split('T');
          let tr =
          '<td>' +
          (i+=1) +
          '</td><td>' +
            itemCanceladas.hour +
            '</td><td>' +
            fecha[0] +
            '</td><td>' +
            itemCanceladas.name +
            '</td><td>' +
            itemCanceladas.speciality +
            '</td><td>'+
            itemCanceladas.paciente +
            '</td><td>'+
            itemCanceladas.status +
            '</td></td>';


          tabla_Canceladascitas.innerHTML += tr;
        }
      });
  }

  tabladoctors();
});
/*
const btn2=document.querySelector('#quincenalCitas_Can2');
btn.addEventListener('click',(event)=>{
  event.preventDefault();
});
const btn3=document.querySelector('#mensualCitas_Can3');
btn.addEventListener('click',(event)=>{
  event.preventDefault();


});
const btn4=document.querySelector('#semestralCitas_Can4');
btn.addEventListener('click',(event)=>{
  event.preventDefault();


});*/
