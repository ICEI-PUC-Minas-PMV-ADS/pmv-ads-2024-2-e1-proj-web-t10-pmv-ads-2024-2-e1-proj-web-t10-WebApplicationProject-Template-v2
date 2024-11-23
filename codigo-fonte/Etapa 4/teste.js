// 1. Validação do Formulário de Cadastro
document.querySelector("form[action='/signup']").addEventListener("submit", function(event) {
    // Captura os valores dos campos
    let nomeCompleto = document.querySelector('input[name="nome completo"]').value;
    let email = document.querySelector('input[name="email"]').value;
    let celular = document.querySelector('input[name="celular"]').value;
    let senha = document.querySelector('input[name="senha"]').value;
    let genero = document.querySelector('input[name="title"]:checked');
  
    // Verifica se todos os campos obrigatórios foram preenchidos
    if (!nomeCompleto || !email || !celular || !senha || !genero) {
      alert("Por favor, preencha todos os campos obrigatórios!");
      event.preventDefault(); // Impede o envio do formulário
    } else {
      alert("Cadastro realizado com sucesso!");
    }
  });
  
  // 2. Envio do Formulário de Sugestões
  document.querySelector('form[action="/subscribe"]').addEventListener("submit", function(event) {
    let nome = document.getElementById("usr").value;
    let celular = document.getElementById("celular").value;
    let comentario = document.getElementById("comment").value;
    
    // Validação de campos obrigatórios
    if (!nome || !celular || !comentario) {
      alert("Por favor, preencha todos os campos!");
      event.preventDefault();
    } else {
      alert("Sua sugestão foi enviada com sucesso!");
    }
  });
  
  // 3. Habilitar ou Desabilitar o Botão de "Cadastrar" dependendo do checkbox
  document.querySelector('input[type="checkbox"]').addEventListener("change", function() {
    let btnCadastrar = document.querySelector('button[type="submit"]');
    if (this.checked) {
      btnCadastrar.disabled = false; // Habilita o botão quando o checkbox é marcado
    } else {
      btnCadastrar.disabled = true; // Desabilita o botão quando o checkbox não é marcado
    }
  });
  
  // 4. Alerta para o Formulário de Pesquisa
  document.querySelector('input[type="submit"]').addEventListener("click", function(event) {
    let pesquisa = document.querySelector('input[name="q"]').value;
    if (pesquisa === "") {
      alert("Por favor, insira um termo de pesquisa!");
    } else {
      alert("Você está buscando por: " + pesquisa);
    }
  });