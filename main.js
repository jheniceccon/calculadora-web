function appendValue(value) {
    document.getElementById('display').value += value;
}

function calculate() {
    try {
        const result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (error) {
        alert('Erro na expressão!');
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
}
