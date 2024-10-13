document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('login-form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const cpf = document.getElementById('cpf').value;

        // Colocar lógica de validação do CPF
        if (cpf === '000.000.000-00') {
            window.location.href = 'src/pages/home/home.html';
        } else {
            alert('CPF inválido.');
        }
    });
});

function submitForm() {
    const form = document.getElementById('login-form');
    form.dispatchEvent(new Event('submit'));
}