const monthSelect = document.getElementById('expiry-month');
const months = [
    "01", "02", "03", "04", "05", "06", 
    "07", "08", "09", "10", "11", "12"
];

months.forEach(month => {
    const option = document.createElement('option');
    option.value = month;
    option.textContent = month;
    monthSelect.appendChild(option);
});

const yearSelect = document.getElementById('expiry-year');
const currentYear = new Date().getFullYear();
const numberOfYears = 10;

for (let i = 0; i < numberOfYears; i++) {
    const option = document.createElement('option');
    option.value = currentYear + i;
    option.textContent = currentYear + i;
    yearSelect.appendChild(option);
}