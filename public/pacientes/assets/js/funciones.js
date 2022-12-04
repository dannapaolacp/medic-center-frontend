$(
    '#modificar,#consultar,#exportar,#aplazar,#ver,#dias,#configurar,#perfil'
  ).click(function () {
    $('#carusel').remove();
  });
  const perfilS = document.querySelector('#section-perfil');
  $('#perfil').click(function () {
    perfilS.innerHTML = `
          <div class="w-100 d-flex justify-content-center">
            <div class="card-header pt-5">
              <img
                  class="doctor"
                  src="assets/img/doctor.png"
                  alt="doctor"
                />
            </div>
            <div class="card-body">
              <form class="px-4">
                <div class="row g-2">
                <div class="col-md">
                  <label class="mb-2" for="floatingInputGrid">Cédula del doctor</label>
                      <input type="text" class="form-control p-1" id="floatingInputGrid" readonly>
                <div class="row g-2">
                <div class="col-md">
                  <label class="mb-2 mt-2" for="floatingInputGrid">Nombre del doctor</label>
                      <input type="text" class="form-control p-1" id="floatingInputGrid" readonly>
                </div>
                    <div class="col-md">
                        <br>
                        <button class="mt-3" style="right: 50px; border: 0;"><img style="width: 30px; height: 30px;"
                                                      class="editar"
                                                      src="assets/img/lapiz.png"
                                                      alt="doctor"
                          /></button>
                    </div>
                </div>
                <div class="row g-2">
                <div class="col-md">
                  <label class="mb-2 mt-2" for="floatingInputGrid">Correo electronico</label>
                      <input type="email" class="form-control p-1" id="floatingInputGrid" readonly>
                </div>
                    <div class="col-md">
                        <br>
                        <button class="mt-3" style="right: 50px; border: 0;"><img style="width: 30px; height: 30px;"
                                                      class="editar"
                                                      src="assets/img/lapiz.png"
                                                      alt="doctor"
                          /></button>
                    </div>
                </div>
                <div class="row g-2">
                <div class="col-md">
                  <label class="mb-2 mt-2" for="floatingInputGrid">Celular</label>
                      <input type="text" class="form-control p-1" id="floatingInputGrid" readonly>
                </div>
                    <div class="col-md">
                        <br>
                        <button class="mt-3" style="right: 50px; border: 0;"><img style="width: 30px; height: 30px;"
                                                      class="editar"
                                                      src="assets/img/lapiz.png"
                                                      alt="doctor"
                          /></button>
                    </div>
                </div>
                <div class="row g-2">
                <div class="col-md">
                  <label class="mb-2 mt-2" for="floatingInputGrid">Especialidad</label>
                      <input type="text" class="form-control p-1" id="floatingInputGrid" readonly>
                </div>
                    <div class="col-md">
                        <br>
                        <button class="mt-3" style="right: 50px; border: 0;"><img style="width: 30px; height: 30px;"
                                                      class="editar"
                                                      src="assets/img/lapiz.png"
                                                      alt="doctor"
                          /></button>
                    </div>
                </div>
              </form>
            </div>
      </section>`;
  });
  