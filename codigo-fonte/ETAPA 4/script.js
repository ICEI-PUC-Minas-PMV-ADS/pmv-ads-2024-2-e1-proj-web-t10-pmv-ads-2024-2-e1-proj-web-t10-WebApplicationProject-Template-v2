// Exemplo de validação simples de formulário de contato
document.querySelector("#contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio real do formulário
    
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const message = document.querySelector("#message").value;

    if (name === "" || email === "" || message === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    alert("Mensagem enviada com sucesso!");
});
