class Datas extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400&display=swap"
    />
    <link rel="stylesheet" href="./datas-component.css" />
           <div class="container-data">
                <div class="head">
                    <h1 id="Mês" style="margin: 0px 5%">Setembro</h1>
                    <h3 style="margin: 0px 5%">Horários disponíveis para agendamento</h3>
                </div>
                <hr class="linha" />
                <div class="body">
                    <div class="dia">
                    <div class="circle">
                        <h1 style="margin: 0">19</h1>
                        <p style="margin: 0">QUI</p>
                    </div>
                    </div>
                    <div class="horarios">
                        <div class="horario" id="openModalBtn">11:00</div>
                        <div class="horario" id="openModalBtn">12:00</div>
                        <div class="horario" id="openModalBtn">13:00</div>
                        <div class="horario" id="openModalBtn">14:00</div>
                        <div class="horario" id="openModalBtn">15:00</div>
                        <div class="horario" id="openModalBtn">16:00</div>
                        <div class="horario" id="openModalBtn">17:00</div>
                        <div class="horario" id="openModalBtn">18:00</div>
                    </div>
                </div>
                
                <div class="body">
                    <div class="dia">
                    <div class="circle">
                        <h1 style="margin: 0">20</h1>
                        <p style="margin: 0">SEX</p>
                    </div>
                    </div>
                    <div class="horarios">
                    <div class="horario" id="openModalBtn" id="openModalBtn">11:00</div>
                    <div class="horario" id="openModalBtn">12:00</div>
                    <div class="horario" id="openModalBtn">13:00</div>
                    <div class="horario" id="openModalBtn">14:00</div>
                    <div class="horario" id="openModalBtn">15:00</div>
                    <div class="horario" id="openModalBtn">16:00</div>
                    <div class="horario" id="openModalBtn">17:00</div>
                    <div class="horario" id="openModalBtn">18:00</div>
                    </div>
                </div>
            </div>
            <script src="./datas-component.js"></script>
          `;
  }
}

customElements.define("datas-component", Datas);
