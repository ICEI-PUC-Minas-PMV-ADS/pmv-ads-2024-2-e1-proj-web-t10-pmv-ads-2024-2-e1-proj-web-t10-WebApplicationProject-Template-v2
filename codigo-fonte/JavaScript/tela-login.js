function login() {
    const username = document.getElementById("usuário").value;
    const password = document.getElementById("senha").value;
    const errorMessage = document.getElementById("mensagem-erro");

    // Validações básicas
    if (username === "" || password === "") {
        errorMessage.textContent = "Deverá ser preenchido todos os campos.";
        return;
    }
}