const divs = document.querySelectorAll(".redirect");

divs.forEach((div) => {
  div.addEventListener("click", () => {
    // const link = div.getAttribute("data-link");
    // window.location.href = "../index.html";
  });
});

function Redirect(){
  window.location.href = "../home/home.html";
}

function Sair() {
  window.location.href = "../../../index.html";
}

class SideBar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
         <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400&display=swap"
            />
            <link rel="stylesheet" href="./side-bar.css" />
            <div class="container-side">
            <div class="base foto"><div class="instance-child"></div></div>
            <div class="base" style=" font-weight: bold;">
                <p style="margin: 0; font-size: 24px;">Fulano da Silva</p>
                <p style="margin-bottom: 0;">Unidade de saúde X</p>
                <p style="margin: 0;">(00) 0000-0000</p></div>
            <div class="base">
                
            </div>
                <div class="base redirect" onclick=Redirect() data-link="/codigo-fonte/index.html">Minhas mensagens</div>
                <div class="base redirect" onclick=Redirect() data-link="/codigo-fonte/index.html">Meus exames</div>
                <div class="base redirect" onclick=Redirect() data-link="/codigo-fonte/index.html">Minhas consultas</div>
                <div class="base redirect" onclick=Redirect()  data-link="../index.html"><span>Inicio</span></div>
                <div class="base redirect" onclick=Redirect() data-link="../index.html">Meu perfil</div>
                <div class="base redirect" onclick=Redirect() data-link="/codigo-fonte/index.html">Informações</div>
                <div class="base redirect" onclick=Redirect() data-link="/codigo-fonte/index.html">
                    Dúvidas frequentes - FAQ
                </div>
                <div class="base foto" style="margin-top: 20px;" >
                    <button class="side-button" onclick=Sair()>Sair</button>
                </div>
            </div>

            <script src="./side-bar.js"></script>
        `;
  }
}

customElements.define("side-bar", SideBar);
