const btnLogin = document.getElementById('button-login');

btnLogin.addEventListener("click", function() {
    const username = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (username === "" || password === "") {
        alert("Deverá ser preenchido todos os campos.");
    } else {
        window.location.href = "Shelf Skins 2.html";
    }
});