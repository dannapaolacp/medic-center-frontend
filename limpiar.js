$(
  '#modificar,#consultar,#exportar,#aplazar,#ver,#dias,#configurar,#perfil'
).click(function () {
  $('#carusel').remove();
  $('#footer').remove();
});
const perfilS = document.querySelector('#section-perfil');
$('#perfil').click(function () {
  perfilS.innerHTML = `
      <!doctype html>
      <html lang="en">
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <meta name="description" content="">
          <title>Registro de Doctores</title>
          <!--favicon-->
        <link rel="icon" type="image/x-icon" href="../assets/img/medicina.png">

          <link rel="canonical" href="https://getbootstrap.com/docs/5.2/examples/checkout/">

      <link href="../bootstrap/css/bootstrap.min.css" rel="stylesheet">

          <style>
            .bd-placeholder-img {
              font-size: 1.125rem;
              text-anchor: middle;
              -webkit-user-select: none;
              -moz-user-select: none;
              user-select: none;
            }

            @media (min-width: 768px) {
              .bd-placeholder-img-lg {
                font-size: 3.5rem;
              }
            }

            .b-example-divider {
              height: 3rem;
              background-color: rgba(0, 0, 0, .1);
              border: solid rgba(0, 0, 0, .15);
              border-width: 1px 0;
              box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
            }

            .b-example-vr {
              flex-shrink: 0;
              width: 1.5rem;
              height: 100vh;
            }

            .bi {
              vertical-align: -.125em;
              fill: currentColor;
            }

            .nav-scroller {
              position: relative;
              z-index: 2;
              height: 2.75rem;
              overflow-y: hidden;
            }

            .nav-scroller .nav {
              display: flex;
              flex-wrap: nowrap;
              padding-bottom: 1rem;
              margin-top: -1px;
              overflow-x: auto;
              text-align: center;
              white-space: nowrap;
              -webkit-overflow-scrolling: touch;
            }
          </style>

        </head>
        <body class="bg-light">
        <div
        class="container-fluid d-flex  flex-shrink-0 p-3"
        style="width: 150%; position: absolute; top: 0; left: -48%; bottom: 0"

      >

          <main>
          <div class="container" style="height: 140px>
          <!--Maneja el container interno-->
            <div class="py-5 text-center">
              <img class="d-block mx-auto mb-4" src="../assets/img/medicina.png" alt="" width="72" height="57">
              <h2>Registro de Doctores</h2>
            </div>

            <div class="row g-5">
              <div class="col-md-5 col-lg-4 order-md-last">

                <ul class="list-group mb-3">
                  <div class="container" style="align-content: space-around;">
                    <img  src="../assets/img/Medico_Formulario_registro.png" alt="Clinica" style="height: 450px;width:100%;display: block;float: left;" >
                  </div>
                </ul>
              </div>
              <div class="col-md-7 col-lg-8">
                <h4 class="mb-3">Informacion Personal</h4>
                <form class="needs-validation" novalidate>
                  <div class="row g-3">


                    <div class="col-12">
                      <label for="lastName" class="form-label"># tarjeta profecional</label>
                      <input type="text" class="form-control" id="#_tarjeta" required>
                    </div>

                    <div class="col-sm-6">
                      <label for="firstName" class="form-label">Nombre</label>
                      <input type="text" class="form-control" id="Nombre" required>
                    </div>

                    <div class="col-sm-6">
                      <label for="lastName" class="form-label">Apellidos</label>
                      <input type="text" class="form-control" id="Apellidos" required>
                    </div>
                    <div class="col-sm-6">
                      <label for="email" class="form-label">Correo</label>
                      <input type="email" class="form-control" id="email" required>
                      <div class="invalid-feedback">
                        Ingrese un email valido.
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <label for="lastName" class="form-label">Telefono</label>
                      <input type="text" class="form-control" id="Telefono" required>
                    </div>
                    <div class="col-md-12">
                      <label for="country" class="form-label">Seleccione especialidad</label>
                      <select class="form-select" id="Selec_especialidad" required>
                        <option>Seleccione</option>
                        <option value="Pediatria">Pediatria</option>
                        <option value="Medicina interna">Medicina interna</option>
                        <option value="Urologia">Urologia</option>
                        <option value="Neurologia">Neurologia</option>
                        <option value="Hematologia">Hematologia</option>
                        <option value="Hepatologia">Hepatologia</option>
                        <option value="Oncologia">Oncologia</option>
                        <option value="Neumologia">Neumologia</option>
                        <option value="Cardiologia">Cardiologia</option>
                        <option value="Psiquiatria">Psiquiatría</option>
                      </select>
                      <div class="invalid-feedback">
                        Seleccione especialidad correcta.
                      </div>
                    </div>
                    <h4 class="mb-3">Contraseña</h4>

                    <div class="col-sm-6">
                      <label for="address" class="form-label">Contraseña</label>
                      <input type="text" class="form-control" id="contraseña1"  required>
                    </div>

                    <div class="col-sm-6">
                      <label for="address2" class="form-label">Repita la Contraseña</label>
                      <input type="text" class="form-control" id="contraseña2">
                    </div>
                    <div class="col-md-12">
                      <label for="country" class="form-label">Preguntas de seguridad</label>
                      <select class="form-select" id="Selec_seguridad" required>
                        <option>Seleccione la pregunta de seguridad</option>
                        <option value="Nom_primera_m">Nombre de la primera mascota</option>
                        <option value="Equipo_fut">Equipo favorito de futbol</option>
                        <option value="Lugar_favo">Nombre de lugar favorito</option>
                      </select>
                      <div class="invalid-feedback">
                        Seleccione una pregunta valida.
                      </div>
                    </div>
                    <div class="col-12">
                      <input type="text" class="form-control" id="Result_select_seguridad_Medico"  required>
                    </div>
                  <button class="w-100 btn btn-primary btn-lg" type="submit">Registrar</button>
                </form>
              </div>
            </div>
            </div>
          </main>
        </div>
            <script src="../assets/dist/js/bootstrap.bundle.min.js"></script>
        </body>
      </html>

        `;
});
